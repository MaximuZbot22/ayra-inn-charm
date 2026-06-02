import roomStandard from "@/assets/room-standard.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomFamily from "@/assets/room-family.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

export type CategorySlug = "standard" | "deluxe" | "family";

export type Room = {
  id: string;
  name: string;
  description: string;
  amenities: string[];
  images: string[];
};

export type RoomCategory = {
  slug: CategorySlug;
  name: string;
  subtitle: string;
  cover: string;
  startingPrice: string;
  blurb: string;
  rooms: Room[];
};

const standardImgs = [roomStandard, gallery1, gallery2, gallery3];
const deluxeImgs = [roomDeluxe, gallery2, gallery3, gallery1];
const familyImgs = [roomFamily, gallery3, gallery1, gallery2];

export const ROOM_CATEGORIES: RoomCategory[] = [
  {
    slug: "standard",
    name: "Standard Rooms",
    subtitle: "Executive Room",
    cover: roomStandard,
    startingPrice: "₹1,200",
    blurb: "Single bedroom with attached bathroom. Clean, quiet, and ready 24/7.",
    rooms: Array.from({ length: 4 }, (_, i) => ({
      id: `standard-${i + 1}`,
      name: `Executive Room ${i + 1}`,
      description:
        "A comfortable single room with a queen bed, air conditioning, and a private attached bathroom. Ideal for short stays and solo travellers.",
      amenities: ["Queen Bed", "Air Conditioning", "Free WiFi", "Attached Bathroom", "TV"],
      images: standardImgs,
    })),
  },
  {
    slug: "deluxe",
    name: "Deluxe Suites",
    subtitle: "Executive Suite",
    cover: roomDeluxe,
    startingPrice: "₹1,800",
    blurb: "Open-plan suite with a separate sitting area and bedroom space.",
    rooms: Array.from({ length: 3 }, (_, i) => ({
      id: `deluxe-${i + 1}`,
      name: `Executive Suite ${i + 1}`,
      description:
        "Spacious open-plan suite with a comfortable sitting area, king-size bed, and premium linens. Great for longer stays or couples.",
      amenities: ["King Bed", "Sitting Area", "Air Conditioning", "Free WiFi", "Work Desk", "Tea/Coffee"],
      images: deluxeImgs,
    })),
  },
  {
    slug: "family",
    name: "Family Apartment",
    subtitle: "2BHK · Sleeps up to 7",
    cover: roomFamily,
    startingPrice: "₹3,500",
    blurb: "Full 2BHK apartment with 2 bedrooms, a hall, and a kitchen. Perfect for families.",
    rooms: [
      {
        id: "family-1",
        name: "2BHK Apartment",
        description:
          "A complete 2-bedroom apartment with a spacious hall and full kitchen. Sleeps up to 7 guests comfortably — ideal for families or small groups travelling together.",
        amenities: [
          "2 Bedrooms",
          "Living Hall",
          "Full Kitchen",
          "Sleeps 7",
          "Air Conditioning",
          "Free WiFi",
          "2 Bathrooms",
        ],
        images: familyImgs,
      },
    ],
  },
];

export const CATEGORY_SLUGS: CategorySlug[] = ["standard", "deluxe", "family"];

export function getCategory(slug: string | undefined): RoomCategory | undefined {
  return ROOM_CATEGORIES.find((c) => c.slug === slug);
}
