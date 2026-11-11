// Edit the menu here: the Menu page, the Brew Rush quick menu and the menu structured data all read from this file.

export type MenuItem = {
  name: string;
  price: string;
  description: string;
  rush: boolean; // available on Brew Rush 10-minute delivery
  best: boolean; // bestseller
};

export type MenuSection = {
  id: string;
  title: string;
  sub: string;
  items: MenuItem[];
};

const P = "₹[ ]";

export const MENU: MenuSection[] = [
  {
    id: "cold-coffee",
    title: "Cold Coffee",
    sub: "pulled fresh, shaken cold",
    items: [
      { name: "Classic Cold Coffee", price: P, description: "Milk, coffee, ice. Done right.", rush: true, best: true },
      { name: "Kadak Cold Coffee", price: P, description: "Double shot, less sugar, more kick.", rush: true, best: true },
      { name: "Hazelnut Cold Brew", price: P, description: "Twelve-hour steep, hazelnut finish.", rush: false, best: false },
      { name: "Vietnamese Iced Coffee", price: P, description: "Strong coffee over condensed milk.", rush: true, best: false },
      { name: "Mocha Frappé", price: P, description: "Coffee, dark chocolate, blended with ice.", rush: true, best: false },
      { name: "Cold Brew Tonic", price: P, description: "Cold brew over tonic and orange peel.", rush: false, best: false },
    ],
  },
  {
    id: "shakes",
    title: "Shakes",
    sub: "thick enough to need a spoon",
    items: [
      { name: "Oreo Shake", price: P, description: "Crushed cookies blended thick.", rush: true, best: true },
      { name: "Chowk Special", price: P, description: "[Your signature shake, in one line.]", rush: true, best: false },
      { name: "KitKat Shake", price: P, description: "Chocolate, wafer, crunch.", rush: true, best: false },
      { name: "Biscoff Shake", price: P, description: "Caramelised biscuit, vanilla ice cream.", rush: true, best: true },
      { name: "Mango Shake", price: P, description: "Seasonal. Ask what's fresh.", rush: false, best: false },
      { name: "Rose Falooda Shake", price: P, description: "Rose, basil seeds, vermicelli, kulfi.", rush: false, best: false },
    ],
  },
  {
    id: "small-plates",
    title: "Small plates",
    sub: "for a long adda",
    items: [
      { name: "Peri Peri Fries", price: P, description: "Crisp, spicy, made for sharing.", rush: true, best: true },
      { name: "Bombay Masala Sandwich", price: P, description: "Grilled, green chutney, cheese.", rush: false, best: false },
      { name: "Paneer Tikka Roll", price: P, description: "Smoky paneer, onions, mint mayo.", rush: true, best: false },
      { name: "Chilli Cheese Toast", price: P, description: "Green chilli, melted cheese, sourdough.", rush: false, best: false },
    ],
  },
];

export const RUSH_ITEMS = MENU.flatMap((s) => s.items.filter((i) => i.rush));
