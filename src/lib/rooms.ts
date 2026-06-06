// Ayra 2BHK
import bhk01 from "@/assets/rooms/ayra-2bhk/01-living.avif.asset.json";
import bhk02 from "@/assets/rooms/ayra-2bhk/02-bedroom-1.avif.asset.json";
import bhk03 from "@/assets/rooms/ayra-2bhk/03-bedroom-2.avif.asset.json";
import bhk04 from "@/assets/rooms/ayra-2bhk/04-dining-kitchen.avif.asset.json";
import bhk05 from "@/assets/rooms/ayra-2bhk/05-kitchen-detail.avif.asset.json";
import bhk06 from "@/assets/rooms/ayra-2bhk/06-bathroom-1.jpeg.asset.json";
import bhk07 from "@/assets/rooms/ayra-2bhk/07-bathroom-2.jpeg.asset.json";
import bhk08 from "@/assets/rooms/ayra-2bhk/08-exterior.jpeg.asset.json";

// Ayra Deluxe
import dlxBed1 from "@/assets/rooms/ayra-deluxe/bedroom-1.avif.asset.json";
import dlxBed2 from "@/assets/rooms/ayra-deluxe/bedroom-2.avif.asset.json";
import dlxBed3 from "@/assets/rooms/ayra-deluxe/bedroom-3.avif.asset.json";
import dlxBath1 from "@/assets/rooms/ayra-deluxe/bathroom-1.avif.asset.json";
import dlxBath2 from "@/assets/rooms/ayra-deluxe/bathroom-2.avif.asset.json";

// Ayra Deluxe II
import dlx2Bed1 from "@/assets/rooms/ayra-deluxe-ii/bedroom-1.avif.asset.json";
import dlx2Bed2 from "@/assets/rooms/ayra-deluxe-ii/bedroom-2.avif.asset.json";
import dlx2Bed3 from "@/assets/rooms/ayra-deluxe-ii/bedroom-3.avif.asset.json";
import dlx2Bath1 from "@/assets/rooms/ayra-deluxe-ii/bathroom-1.avif.asset.json";
import dlx2Bath2 from "@/assets/rooms/ayra-deluxe-ii/bathroom-2.avif.asset.json";

// Ayra Studio
import stdLiv1 from "@/assets/rooms/ayra-studio/living-1.jpeg.asset.json";
import stdLiv2 from "@/assets/rooms/ayra-studio/living-2.jpeg.asset.json";
import stdLiv3 from "@/assets/rooms/ayra-studio/living-3.avif.asset.json";
import stdBed1 from "@/assets/rooms/ayra-studio/bedroom-1.jpeg.asset.json";
import stdBed2 from "@/assets/rooms/ayra-studio/bedroom-2.avif.asset.json";
import stdBed3 from "@/assets/rooms/ayra-studio/bedroom-3.avif.asset.json";
import stdBed4 from "@/assets/rooms/ayra-studio/bedroom-4.avif.asset.json";
import stdWork1 from "@/assets/rooms/ayra-studio/workspace-1.jpeg.asset.json";
import stdWork2 from "@/assets/rooms/ayra-studio/workspace-2.jpeg.asset.json";
import stdBath1 from "@/assets/rooms/ayra-studio/bathroom-1.jpeg.asset.json";
import stdBath2 from "@/assets/rooms/ayra-studio/bathroom-2.jpeg.asset.json";
import stdAdd1 from "@/assets/rooms/ayra-studio/additional-1.jpeg.asset.json";

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
      { name: "Living room", images: [bhk01.url] },
      { name: "Bedroom", images: [bhk02.url, bhk03.url] },
      { name: "Kitchen & Dining", images: [bhk04.url, bhk05.url] },
      { name: "Bathroom", images: [bhk06.url, bhk07.url] },
      { name: "Exterior", images: [bhk08.url] },
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
      { name: "Bedroom", images: [dlxBed1.url, dlxBed2.url, dlxBed3.url] },
      { name: "Bathroom", images: [dlxBath1.url, dlxBath2.url] },
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
      { name: "Shared living room", images: [stdLiv1.url, stdLiv2.url, stdLiv3.url] },
      { name: "Bedroom", images: [stdBed1.url, stdBed2.url, stdBed3.url, stdBed4.url] },
      { name: "Shared workspace", images: [stdWork1.url, stdWork2.url] },
      { name: "Full bathroom", images: [stdBath1.url, stdBath2.url] },
      { name: "Additional photos", images: [stdAdd1.url] },
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
      { name: "Bedroom", images: [dlx2Bed1.url, dlx2Bed2.url, dlx2Bed3.url] },
      { name: "Bathroom", images: [dlx2Bath1.url, dlx2Bath2.url] },
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
