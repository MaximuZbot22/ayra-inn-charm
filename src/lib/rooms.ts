// Kept for backwards-compat with RoomsTeaser links: /rooms/{-$category}
export type CategorySlug = "standard" | "deluxe" | "family";

export type PhotoCategory = { name: string; images: string[] };

export type ListingSpace = {
  name: string;
  amenities: string[];
};

export type Listing = {
  slug: string;
  name: string;
  type: string;
  guests: number;
  bedrooms: number | null;
  beds: number;
  bathrooms: string;
  blurb: string;
  amenities: string[];
  unavailable?: string[];
  spaces?: ListingSpace[];
  photoTour: PhotoCategory[];
};

export const LISTINGS: Listing[] = [
  {
    slug: "ayra-2bhk",
    name: "Ayra 2BHK",
    type: "Entire rental unit in Kochi, India",
    guests: 5,
    bedrooms: 2,
    beds: 2,
    bathrooms: "2 baths",
    blurb:
      "A full 2-bedroom apartment with a spacious living room, dining area, and complete kitchen. Sleeps 5 — ideal for families or small groups travelling together.",
    amenities: [
      "Wifi",
      "Air conditioning",
      "Full kitchen",
      "TV",
      "Washing machine",
      "Free parking",
      "Hot water",
    ],
    spaces: [
      { name: "Living room", amenities: ["TV"] },
      { name: "Full kitchen", amenities: ["Crockery and cutlery", "Coffee", "Freezer"] },
      { name: "Dining area", amenities: ["Dining table"] },
      {
        name: "Bedroom 1",
        amenities: [
          "Queen bed",
          "Air conditioning",
          "Bed linen",
          "Clothes storage",
          "Hangers",
          "TV",
          "Room-darkening blinds",
        ],
      },
      {
        name: "Bedroom 2",
        amenities: [
          "Queen bed",
          "Air conditioning",
          "Bed linen",
          "Clothes storage",
          "Hangers",
          "Room-darkening blinds",
        ],
      },
      { name: "Full bathroom 1", amenities: ["Body soap", "Hot water", "Shampoo"] },
      { name: "Full bathroom 2", amenities: ["Body soap", "Hot water", "Shampoo"] },
    ],
    photoTour: [
      { name: "Living room", images: ["/assets/rooms/ayra-2bhk/01-living.avif"] },
      { name: "Bedroom", images: ["/assets/rooms/ayra-2bhk/02-bedroom-1.avif", "/assets/rooms/ayra-2bhk/03-bedroom-2.avif"] },
      { name: "Kitchen & Dining", images: ["/assets/rooms/ayra-2bhk/04-dining-kitchen.avif", "/assets/rooms/ayra-2bhk/05-kitchen-detail.avif"] },
      { name: "Bathroom", images: ["/assets/rooms/ayra-2bhk/06-bathroom-1.jpeg", "/assets/rooms/ayra-2bhk/07-bathroom-2.jpeg"] },
      { name: "Exterior", images: ["/assets/rooms/ayra-2bhk/08-exterior.jpeg"] },
    ],
  },
  {
    slug: "ayra-deluxe",
    name: "Ayra Deluxe",
    type: "Entire rental unit in Kochi, India",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: "1 bath",
    blurb:
      "Relax in this comfortable private room featuring a queen-size bed, air conditioning, and an attached bathroom. Ideal for solo travellers or couples seeking a clean, peaceful, and convenient stay.",
    amenities: [
      "Wifi",
      "Dedicated workspace",
      "TV",
      "Washing machine",
      "Air conditioning",
      "Exterior security cameras on property",
    ],
    unavailable: ["Carbon monoxide alarm", "Smoke alarm"],
    photoTour: [
      { name: "Bedroom", images: ["/assets/rooms/ayra-deluxe/bedroom-1.avif", "/assets/rooms/ayra-deluxe/bedroom-2.avif", "/assets/rooms/ayra-deluxe/bedroom-3.avif"] },
      { name: "Bathroom", images: ["/assets/rooms/ayra-deluxe/bathroom-1.avif", "/assets/rooms/ayra-deluxe/bathroom-2.avif"] },
    ],
  },
  {
    slug: "ayra-studio",
    name: "Ayra Studio",
    type: "Room in Kochi, India · Shared bathroom",
    guests: 2,
    bedrooms: null,
    beds: 1,
    bathrooms: "Shared bath",
    blurb:
      "A comfortable, modern studio room with a cozy bed, air conditioning, high-speed Wi-Fi, Smart TV, and a dedicated workspace. Perfect for business travellers, couples, and solo guests looking for a clean, peaceful stay.",
    amenities: [
      "Wifi",
      "Dedicated workspace",
      "Free parking on premises",
      "TV",
      "Washing machine",
      "Air conditioning",
      "Exterior security cameras on property",
    ],
    unavailable: ["Carbon monoxide alarm", "Smoke alarm"],
    photoTour: [
      { name: "Shared living room", images: ["/assets/rooms/ayra-studio/living-1.jpeg", "/assets/rooms/ayra-studio/living-2.jpeg", "/assets/rooms/ayra-studio/living-3.avif"] },
      { name: "Bedroom", images: ["/assets/rooms/ayra-studio/bedroom-1.jpeg", "/assets/rooms/ayra-studio/bedroom-2.avif", "/assets/rooms/ayra-studio/bedroom-3.avif", "/assets/rooms/ayra-studio/bedroom-4.avif"] },
      { name: "Shared workspace", images: ["/assets/rooms/ayra-studio/workspace-1.jpeg", "/assets/rooms/ayra-studio/workspace-2.jpeg"] },
      { name: "Full bathroom", images: ["/assets/rooms/ayra-studio/bathroom-1.jpeg", "/assets/rooms/ayra-studio/bathroom-2.jpeg"] },
      { name: "Additional photos", images: ["/assets/rooms/ayra-studio/additional-1.jpeg"] },
    ],
  },
  {
    slug: "ayra-deluxe-ii",
    name: "Ayra Deluxe II",
    type: "Entire rental unit in Kochi, India",
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: "1 bath",
    blurb:
      "Relax in this comfortable private room featuring a queen-size bed, air conditioning, and an attached bathroom. Ideal for solo travellers or couples seeking a clean, peaceful, and convenient stay.",
    amenities: [
      "Wifi",
      "Dedicated workspace",
      "TV",
      "Washing machine",
      "Air conditioning",
      "Exterior security cameras on property",
    ],
    unavailable: ["Carbon monoxide alarm", "Smoke alarm"],
    photoTour: [
      { name: "Bedroom", images: ["/assets/rooms/ayra-deluxe-ii/bedroom-1.avif", "/assets/rooms/ayra-deluxe-ii/bedroom-2.avif", "/assets/rooms/ayra-deluxe-ii/bedroom-3.avif"] },
      { name: "Bathroom", images: ["/assets/rooms/ayra-deluxe-ii/bathroom-1.avif", "/assets/rooms/ayra-deluxe-ii/bathroom-2.avif"] },
    ],
  },
];

/** Flatten photoTour to a single image array (for cards/carousels). */
export function allImages(listing: Listing): string[] {
  return listing.photoTour.flatMap((c) => c.images);
}

/** First image of each category, then fill from remaining. Used for hero gallery. */
export function coverImages(listing: Listing, count = 5): string[] {
  const firsts = listing.photoTour.map((c) => c.images[0]).filter(Boolean);
  const rest = listing.photoTour.flatMap((c) => c.images.slice(1));
  return [...firsts, ...rest].slice(0, count);
}

export function findListing(slug: string): Listing | undefined {
  return LISTINGS.find((l) => l.slug === slug);
}

