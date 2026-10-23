# Hosting
## Goals
Have the website hosted on render.

## Implementation
Branch: `feature/hosting`

### Approach
The site runs on Render as a **Node web service** (`next start`), not a static site.

- The images in `public/images` are very large (up to 29 MB each, about 261 MB total).
- A web service keeps Next.js image optimization working: `next/image` resizes and compresses each photo on request. Locally, the 29 MB wings photo was served at about 157 KB.
- A static site (`output: 'export'`) can't optimize images, so visitors would download the full-size files.

### Files
| File | Change |
| --- | --- |
| `render.yaml` | New. Render Blueprint that defines the web service. |
| `package.json` / `package-lock.json` | Upgrade `next` and `eslint-config-next` from 16.4.0 to 16.4.3 (security fix, see below). |

### `render.yaml`
```yaml
services:
  - type: web
    name: square-deli-website
    runtime: node
    plan: free
    branch: main
    buildCommand: npm ci && npm run build
    startCommand: npm start
    healthCheckPath: /
    envVars:
      - key: NODE_VERSION
        value: 22.14.0
      - key: NEXT_TELEMETRY_DISABLED
        value: "1"
```

| Setting | What it does |
| --- | --- |
| `type: web`, `runtime: node` | Runs the app as a Node server. |
| `plan: free` | Free plan. See "Free plan limits" below. |
| `branch: main` | Deploys from `main`. Every push to `main` triggers a new deploy. |
| `buildCommand` | `npm ci` installs exactly what's in `package-lock.json`, then `next build` builds the site. |
| `startCommand` | `next start` serves the built site. It listens on Render's `PORT` automatically. |
| `healthCheckPath: /` | Render checks that the home page responds before switching traffic to a new deploy. |
| `NODE_VERSION` | Pins Node to the version used locally (22.14.0). |
| `NEXT_TELEMETRY_DISABLED` | Turns off Next.js anonymous usage reporting. |

### Security upgrade (required before going live)
- `npm audit` reports critical vulnerabilities in Next.js 16.4.0, including remote code execution in the image optimization API this site uses. Advisories:
  - GHSA-2464-fhr4-w9xw
  - GHSA-p3m5-59mp-jv5r
  - GHSA-673q-mjm6-r5xr
- Next.js 16.4.0 also stops `next build` with a `SecurityFatalError` the first time it runs. Render builds from scratch on every deploy, so deploys would fail.
- The fix is the patch release 16.4.3:
  ```
  npm install next@16.4.3 eslint-config-next@16.4.3
  ```
- **Status:** done. `npm audit` now reports 0 vulnerabilities and `npm run build` passes on the first run.
- On Windows, stop `next dev` before upgrading Next.js. A running dev server locks the compiler file and the install fails with `EBUSY`.

### Deploying on Render (one-time setup)
These steps need your Render account, so they're done in the Render dashboard rather than in code.

1. Merge `feature/hosting` into `main` and push to GitHub.
2. Sign in at https://dashboard.render.com, connecting your GitHub account if asked.
3. Click **New → Blueprint**.
4. Pick the `placidohoff/square-deli-website` repository. Render finds `render.yaml` and shows the `square-deli-website` service.
5. Click **Apply** (or **Deploy Blueprint**). The first build takes a few minutes.
6. When the deploy shows **Live**, open the `https://square-deli-website.onrender.com` URL shown on the service page. The exact name may differ if it's taken.
7. Check `/`, `/menu` and `/visit-us`, the map, and that photos load.

After this, every push to `main` deploys automatically.

### Custom domain (optional)
1. In the service, open **Settings → Custom Domains → Add Custom Domain**.
2. Enter the domain, for example `squaredeliri.com`.
3. Add the DNS records Render shows at your domain registrar.
4. Render issues the HTTPS certificate automatically.

### Free plan limits
- The service **sleeps after 15 minutes** without visitors. The next visitor waits up to about a minute while it wakes.
- 512 MB of memory. The first request for each large photo makes the server resize it, which may be slow or memory-heavy on this plan. Resized images are cached after that.
- To stay awake all the time, switch to the **Starter** plan (about $7/month): change `plan: free` to `plan: starter` in `render.yaml` and push.
- Compressing the photos in `public/images` would make builds, deploys and first image loads faster. Track that as a separate fix.

### Testing
Tested locally on Next.js 16.4.3:
- A fresh `npm run build` (after deleting `.next`) compiles all pages, `/`, `/menu` and `/visit-us`, with no security error.
- `npm audit` reports 0 vulnerabilities.
- `PORT=4123 npm start` serves on the given port, the same way Render passes `PORT`.
- `/`, `/menu`, `/visit-us` and `/_next/image?url=/images/wings.png&w=640` all return 200.

Still to do:
- After the first Render deploy, check the live URL in a browser and on a phone.
