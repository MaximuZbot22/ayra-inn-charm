import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import { Reveal } from "./Reveal";

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
              <img src={g1} alt="Reception" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition duration-700" />
            </div>
            <div className="aspect-square">
              <img src={g2} alt="Bathroom detail" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition duration-700" />
            </div>
            <div className="aspect-square">
              <img src={g3} alt="Breakfast corner" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition duration-700" />
            </div>
            <div className="col-span-2 aspect-[2/1]">
              <img src={roomDeluxe} alt="Deluxe room" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition duration-700" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
