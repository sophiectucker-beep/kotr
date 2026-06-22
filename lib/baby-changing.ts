export type BabyChangingCategory =
  | "baby-changing"
  | "lifts"
  | "buggy-friendly-toilets"
  | "baby-items"
  | "toy-stores"
  | "feeding-friendly-spots"
  | "shaded-places"
  | "family-friendly-cafes"
  | "snacks";

export interface BabyChangingSpot {
  slug: string;
  name: string;
  category: BabyChangingCategory;
  address: string;
  x: number;
  y: number;
  imageUrl?: string;
}

export const babyChangingVerifiedNote =
  "Drop your verified facilities in here as you save them from Instagram.";

export const babyChangingSpots: BabyChangingSpot[] = [
  {
    slug: "vinopolis-gastrobar",
    name: "Vinopolis Gastrobar",
    category: "baby-changing",
    address: "30 John Mackintosh Square, Gibraltar",
    x: 46,
    y: 41,
    imageUrl: "/baby-changing/vinopolis-gastrobar.jpg",
  },
  {
    slug: "kings-bastion-leisure-centre",
    name: "King’s Bastion Leisure Centre",
    category: "baby-changing",
    address: "55 Line Wall Road, Gibraltar",
    x: 54,
    y: 47,
    imageUrl: "/baby-changing/kings-bastion-leisure-centre.jpg",
  },
];
