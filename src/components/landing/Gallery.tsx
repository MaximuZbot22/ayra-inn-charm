import { Reveal } from "./Reveal";
import { findListing } from "@/lib/rooms";

const bhk = findListing("ayra-2bhk")!;
const deluxe = findListing("ayra-deluxe")!;
const studio = findListing("ayra-studio")!;

// Featured shots pulled from real listing photo tours
const featured = bhk.photoTour.find((c) => c.name === "Living room")?.images[0] ?? bhk.photoTour[0].images[0];
const bedroomDeluxe = deluxe.photoTour[0].images[0];
const studioLiving = studio.photoTour[0].images[0];
const exterior =
  bhk.photoTour.find((c) => c.name === "Exterior")?.images[0] ??
  bhk.photoTour[bhk.photoTour.length - 1].images[0];

export function Gallery() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium">
              Gallery
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold text-foreground">
              A look around Ayra Inn.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 [&>div]:overflow-hidden [&>div]:rounded-2xl [&>div]:bg-secondary">
            <div className="col-span-2 row-span-2 aspect-square md:aspect-auto">
              <img src={featured} alt="Ayra 2BHK living room" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition duration-700" />
            </div>
            <div className="aspect-square">
              <img src={bedroomDeluxe} alt="Ayra Deluxe bedroom" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition duration-700" />
            </div>
            <div className="aspect-square">
              <img src={studioLiving} alt="Ayra Studio living area" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition duration-700" />
            </div>
            <div className="col-span-2 aspect-[2/1]">
              <img src={exterior} alt="Ayra Inn exterior" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition duration-700" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
