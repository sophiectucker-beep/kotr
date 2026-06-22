export type BuySellCategory =
  | "prams"
  | "cots"
  | "clothes"
  | "toys"
  | "car-seats"
  | "carriers"
  | "feeding"
  | "other";

export interface BuySellCategoryOption {
  value: BuySellCategory;
  label: string;
}

export interface BuySellItem {
  id: string;
  title: string;
  price: string;
  description: string;
  category: BuySellCategory;
  sellerName: string;
  marketplaceUrl: string;
  imageUrl?: string;
  imageUrls?: string[];
  approvedAt: string;
}

export const buySellCategories: BuySellCategoryOption[] = [
  { value: "prams", label: "Prams" },
  { value: "cots", label: "Cots" },
  { value: "clothes", label: "Clothes" },
  { value: "toys", label: "Toys" },
  { value: "car-seats", label: "Car seats" },
  { value: "carriers", label: "Carriers" },
  { value: "feeding", label: "Feeding" },
  { value: "other", label: "Other baby bits" },
];

export const approvedBuySellItems: BuySellItem[] = [
  {
    id: "barbie-house",
    title: "Barbie House",
    price: "£20",
    description: "Used Barbie house in good condition.",
    category: "toys",
    sellerName: "Gianna",
    marketplaceUrl: "https://www.facebook.com/share/1B9PjBvP2B/",
    imageUrl: "/buy-sell/barbie-house.jpg",
    approvedAt: "2026-04-16",
  },
  {
    id: "baby-jogger",
    title: "Baby Jogger",
    price: "£100",
    description: "Baby Jogger double pram for sale.",
    category: "prams",
    sellerName: "Carol",
    marketplaceUrl: "https://www.facebook.com/share/1CEpdYFBPM/",
    imageUrl: "/buy-sell/baby-jogger-1.jpg",
    imageUrls: [
      "/buy-sell/baby-jogger-1.jpg",
      "/buy-sell/baby-jogger-2.jpg",
    ],
    approvedAt: "2026-04-16",
  },
  {
    id: "pool-school-baby-float",
    title: "Pool School Baby Float",
    price: "£5",
    description:
      "Pool School Deluxe baby float with diaper-style seat, leg holes, and a large square ring for stability. Suitable up to 15kg and in excellent condition.",
    category: "other",
    sellerName: "Simon",
    marketplaceUrl: "https://www.facebook.com/share/18YV32ehHw/",
    imageUrl: "/buy-sell/pool-school-baby-float.jpg",
    approvedAt: "2026-04-16",
  },
  {
    id: "mothercare-playmat",
    title: "Mothercare playmat",
    price: "£10",
    description:
      "Mothercare playmat for a baby girl, with removable arms so it can also be used just as a mat. All dangly bits are included.",
    category: "other",
    sellerName: "Jayney Teese",
    marketplaceUrl: "https://www.facebook.com/marketplace/item/1250077747034289/",
    imageUrl: "/buy-sell/mothercare-playmat-4.jpg",
    imageUrls: [
      "/buy-sell/mothercare-playmat-4.jpg",
      "/buy-sell/mothercare-playmat-1.jpg",
      "/buy-sell/mothercare-playmat-2.jpg",
      "/buy-sell/mothercare-playmat-3.jpg",
    ],
    approvedAt: "2026-04-17",
  },
  {
    id: "baby-bath",
    title: "Baby Bath",
    price: "£5",
    description: "Baby bath seat.",
    category: "other",
    sellerName: "Jayney Teese",
    marketplaceUrl: "https://www.facebook.com/marketplace/item/1250077747034289/",
    imageUrl: "/buy-sell/baby-bath-1.jpg",
    imageUrls: [
      "/buy-sell/baby-bath-1.jpg",
      "/buy-sell/baby-bath-2.jpg",
      "/buy-sell/baby-bath-3.jpg",
    ],
    approvedAt: "2026-04-17",
  },
  {
    id: "najell-sleepcarrier",
    title: "Najell SleepCarrier",
    price: "£90",
    description: "Najell SleepCarrier in as-new condition.",
    category: "other",
    sellerName: "Stacey Gabay",
    marketplaceUrl: "https://www.facebook.com/marketplace/item/924774180472541/",
    imageUrl: "/buy-sell/najell-sleepcarrier-1.jpeg",
    imageUrls: [
      "/buy-sell/najell-sleepcarrier-1.jpeg",
      "/buy-sell/najell-sleepcarrier-2.jpeg",
      "/buy-sell/najell-sleepcarrier-3.jpeg",
      "/buy-sell/najell-sleepcarrier-4.jpeg",
    ],
    approvedAt: "2026-04-17",
  },
  {
    id: "babybjorn-carrier",
    title: "BabyBjorn carrier",
    price: "£35",
    description: "BabyBjorn carrier, used but in great condition.",
    category: "carriers",
    sellerName: "Maria Lombard",
    marketplaceUrl: "https://www.facebook.com/share/17Z24VxyQ6/",
    imageUrl: "/buy-sell/babybjorn-carrier.jpg",
    approvedAt: "2026-04-17",
  },
  {
    id: "babybjorn-carrier-laura-taylor",
    title: "BabyBjorn carrier",
    price: "£20",
    description: "BabyBjorn carrier in great, like-new condition.",
    category: "carriers",
    sellerName: "Laura Taylor",
    marketplaceUrl: "https://www.facebook.com/share/18c9kdcrh5/",
    imageUrl: "/buy-sell/babybjorn-carrier-laura-taylor.jpg",
    approvedAt: "2026-04-17",
  },
  {
    id: "jane-ergonomic-baby-carrier",
    title: "Jané Ergonomic Baby Carrier",
    price: "£30",
    description:
      "Jané ergonomic baby carrier in excellent, like-new condition. Only used a couple of times, with 3 positions, box, and full instruction booklet.",
    category: "carriers",
    sellerName: "Yamile Paz",
    marketplaceUrl: "https://www.facebook.com/share/1CM3XtXvD2/",
    imageUrl: "/buy-sell/jane-ergonomic-baby-carrier-1.jpg",
    imageUrls: [
      "/buy-sell/jane-ergonomic-baby-carrier-1.jpg",
      "/buy-sell/jane-ergonomic-baby-carrier-2.jpg",
      "/buy-sell/jane-ergonomic-baby-carrier-3.jpg",
      "/buy-sell/jane-ergonomic-baby-carrier-4.jpg",
    ],
    approvedAt: "2026-04-17",
  },
  {
    id: "redkite-baby-carrier",
    title: "RedKite Baby Carrier",
    price: "£20",
    description:
      "RedKite baby carrier in good used condition. Suitable from birth, with front parent-facing, outward-facing, and back-carry positions, wide padded shoulder and waist straps, and an easy-access front pocket.",
    category: "carriers",
    sellerName: "Ganga Thapa",
    marketplaceUrl: "https://www.facebook.com/share/1Cij5dMfpW/",
    imageUrl: "/buy-sell/redkite-baby-carrier-1.jpg",
    imageUrls: [
      "/buy-sell/redkite-baby-carrier-1.jpg",
      "/buy-sell/redkite-baby-carrier-2.jpg",
      "/buy-sell/redkite-baby-carrier-3.jpg",
      "/buy-sell/redkite-baby-carrier-4.jpg",
    ],
    approvedAt: "2026-04-17",
  },
  {
    id: "red-kite-ara-baby-carrier",
    title: "Red Kite ARA Baby Carrier",
    price: "£30",
    description:
      "New grey Red Kite ARA baby carrier in perfect condition. Gift that has never been used.",
    category: "carriers",
    sellerName: "Nick Nickz",
    marketplaceUrl: "https://www.facebook.com/share/1DcBAGqGK6/",
    imageUrl: "/buy-sell/red-kite-ara-baby-carrier-1.jpg",
    imageUrls: [
      "/buy-sell/red-kite-ara-baby-carrier-1.jpg",
      "/buy-sell/red-kite-ara-baby-carrier-2.jpg",
      "/buy-sell/red-kite-ara-baby-carrier-3.jpg",
      "/buy-sell/red-kite-ara-baby-carrier-4.jpg",
    ],
    approvedAt: "2026-04-17",
  },
  {
    id: "babybjorn-mesh-carrier",
    title: "BabyBjorn mesh carrier",
    price: "£50",
    description: "Hardly used BabyBjorn mesh carrier in like-new condition.",
    category: "carriers",
    sellerName: "Stephanie Manasco",
    marketplaceUrl: "https://www.facebook.com/share/1EFgbGY5yw/",
    imageUrl: "/buy-sell/babybjorn-mesh-carrier-1.jpg",
    imageUrls: [
      "/buy-sell/babybjorn-mesh-carrier-1.jpg",
      "/buy-sell/babybjorn-mesh-carrier-2.jpg",
    ],
    approvedAt: "2026-04-17",
  },
  {
    id: "ergobaby-360-omni-mesh-cool",
    title: "Ergobaby 360 Omni Mesh Cool",
    price: "£55",
    description:
      "Very sturdy Ergobaby Omni 360 mesh baby carrier in good used condition. Not used very often or for a while, and no longer has the purse.",
    category: "carriers",
    sellerName: "Jayne Brown",
    marketplaceUrl: "https://www.facebook.com/share/1EK4KA5UCQ/",
    imageUrl: "/buy-sell/ergobaby-360-omni-mesh-cool.jpg",
    approvedAt: "2026-04-17",
  },
  {
    id: "cuddlebug-baby-wrap-carrier",
    title: "CuddleBug Baby wrap up carrier",
    price: "£25",
    description: "CuddleBug baby wrap carrier, hardly used and as new.",
    category: "carriers",
    sellerName: "Maria Lombard",
    marketplaceUrl: "https://www.facebook.com/share/1Br8Z6x5Jj/",
    imageUrl: "/buy-sell/cuddlebug-baby-wrap-carrier.jpg",
    approvedAt: "2026-04-17",
  },
  {
    id: "manduca-baby-carrier",
    title: "Manduca baby carrier",
    price: "£15",
    description:
      "Manduca baby carrier in good used condition. Seller used it from around 3-4 months and can still carry a one-year-old in it.",
    category: "carriers",
    sellerName: "Marine Bienassis",
    marketplaceUrl: "https://www.facebook.com/share/1DbaZTs2yq/",
    imageUrl: "/buy-sell/manduca-baby-carrier.jpg",
    approvedAt: "2026-04-17",
  },
];

const buySellListingDurationMs = 30 * 24 * 60 * 60 * 1000;

export function getActiveBuySellItems(
  items: BuySellItem[],
  now = new Date()
) {
  return items.filter((item) => {
    const approvedAt = new Date(`${item.approvedAt}T00:00:00`);

    if (Number.isNaN(approvedAt.getTime())) return true;

    return now.getTime() - approvedAt.getTime() < buySellListingDurationMs;
  });
}

export function getBuySellCategoryLabel(category: BuySellCategory) {
  return (
    buySellCategories.find((option) => option.value === category)?.label ??
    "Other baby bits"
  );
}
