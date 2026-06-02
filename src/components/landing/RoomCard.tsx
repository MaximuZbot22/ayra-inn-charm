import { Phone, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SITE } from "@/lib/site";
import type { Room } from "@/lib/rooms";

export function RoomCard({ room }: { room: Room }) {
  return (
    <AccordionItem
      value={room.id}
      className="rounded-xl border border-border/60 bg-card px-4 sm:px-5"
    >
      <AccordionTrigger className="py-4 hover:no-underline">
        <div className="flex flex-1 items-center gap-4 text-left">
          <img
            src={room.images[0]}
            alt=""
            className="h-14 w-14 rounded-lg object-cover"
            loading="lazy"
          />
          <div>
            <div className="font-display text-lg font-semibold text-foreground">
              {room.name}
            </div>
            <div className="text-xs text-muted-foreground">
              Tap to view photos
            </div>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pb-5">
        <div className="space-y-5">
          <Carousel className="w-full">
            <CarouselContent>
              {room.images.map((src, i) => (
                <CarouselItem key={i}>
                  <div className="overflow-hidden rounded-xl aspect-[16/10] bg-muted">
                    <img
                      src={src}
                      alt={`${room.name} photo ${i + 1}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>

          <p className="text-sm text-muted-foreground">{room.description}</p>

          <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground sm:grid-cols-3">
            {room.amenities.map((a) => (
              <li key={a} className="flex items-center gap-2">
                <Check size={14} className="text-primary shrink-0" />
                {a}
              </li>
            ))}
          </ul>

          <a
            href={SITE.phoneHref}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-deep"
          >
            <Phone size={15} /> Call to Book
          </a>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

export function RoomCardList({ rooms }: { rooms: Room[] }) {
  return (
    <Accordion type="multiple" className="space-y-3">
      {rooms.map((r) => (
        <RoomCard key={r.id} room={r} />
      ))}
    </Accordion>
  );
}
