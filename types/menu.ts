export interface Sandwich {
  id: number;
  name: string;
  image: string;
  description: string;
  prices: number | Record<string, number>;
}

export interface MenuItem {
  name: string;
  price: number;
}

export interface MenuData {
  sandwiches: Sandwich[];
  chickenWings: MenuItem[];
  pizza: MenuItem[];
  empanadas: MenuItem[];
  yaroa: MenuItem[];
  freshJuice: MenuItem[];
  chilliDogs: MenuItem[];
  sides: MenuItem[];
  desserts: MenuItem[];
}

export type MenuListKey = Exclude<keyof MenuData, 'sandwiches'>;
