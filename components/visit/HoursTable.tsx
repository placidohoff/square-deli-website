interface DayHours {
  day: string;
  hours: string | null;
}

const WEEKLY_HOURS: DayHours[] = [
  { day: 'Monday', hours: '10:30am – 9:00pm' },
  { day: 'Tuesday', hours: '10:30am – 9:00pm' },
  { day: 'Wednesday', hours: '10:30am – 9:00pm' },
  { day: 'Thursday', hours: '10:30am – 9:00pm' },
  { day: 'Friday', hours: '10:30am – 9:00pm' },
  { day: 'Saturday', hours: '10:30am – 9:00pm' },
  { day: 'Sunday', hours: null },
];

export default function HoursTable() {
  return (
    <div>
      <h2 className="flex items-center gap-3 border-b border-brand-ink pb-4 text-xl text-brand-ink">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5 text-brand-orange"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
        Hours
      </h2>

      <dl>
        {WEEKLY_HOURS.map((entry) => (
          <div key={entry.day} className="flex items-center justify-between border-b border-brand-border py-3">
            <dt className="text-brand-muted">{entry.day}</dt>
            <dd className={entry.hours ? 'font-semibold text-brand-ink' : 'font-semibold text-brand-rust'}>
              {entry.hours ?? 'Closed'}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
