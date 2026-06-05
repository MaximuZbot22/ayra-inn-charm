import roomStandard from "@/assets/room-standard.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomFamily from "@/assets/room-family.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

// Ayra 2BHK — real photos
import bhkLiving from "@/assets/rooms/ayra-2bhk/01-living.avif.asset.json";
import bhkBedroom1 from "@/assets/rooms/ayra-2bhk/02-bedroom-1.avif.asset.json";
import bhkBedroom2 from "@/assets/rooms/ayra-2bhk/03-bedroom-2.avif.asset.json";
import bhkDining from "@/assets/rooms/ayra-2bhk/04-dining-kitchen.avif.asset.json";
import bhkKitchen from "@/assets/rooms/ayra-2bhk/05-kitchen-detail.avif.asset.json";
import bhkBath1 from "@/assets/rooms/ayra-2bhk/06-bathroom-1.jpeg.asset.json";
import bhkBath2 from "@/assets/rooms/ayra-2bhk/07-bathroom-2.jpeg.asset.json";
import bhkExterior from "@/assets/rooms/ayra-2bhk/08-exterior.jpeg.asset.json";

const ayra2bhkImages = [
  bhkLiving.url,
  bhkBedroom1.url,
  bhkBedroom2.url,
  bhkDining.url,
  bhkKitchen.url,
  bhkBath1.url,
  bhkBath2.url,
  bhkExterior.url,
];

// Kept for backwards-compat with RoomsTeaser links: /rooms/{-$category}
export type CategorySlug = "standard" | "deluxe" | "family";

export type ListingSpace = {
  name: string;
  amenities: string[];
};

export type Listing = {
  slug: string;
  name: string;
  type: string; // e.g. "Entire rental unit in Kochi, India"
  guests: number;
  bedrooms: number | null;
  beds: number;
  bathrooms: string; // "2 baths" or "Shared bath"
  blurb: string;
  amenities: string[];
  unavailable?: string[];
  spaces?: ListingSpace[];
  images: string[];
};

// TEMP placeholders — swap in real photos from the Dropbox folders.
const placeholderPool = [roomStandard, roomDeluxe, roomFamily, gallery1, gallery2, gallery3];

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
    images: [roomFamily, gallery1, gallery2, gallery3, roomStandard, roomDeluxe],
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
    images: [roomDeluxe, gallery2, gallery3, gallery1],
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
    images: [roomStandard, gallery1, gallery3, gallery2],
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
    images: [roomDeluxe, gallery3, gallery2, gallery1],
  },
];

void placeholderPool;
