import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { InfoBar } from "@/components/landing/InfoBar";
import { RoomsTeaser } from "@/components/landing/RoomsTeaser";
import { Amenities } from "@/components/landing/Amenities";
import { Gallery } from "@/components/landing/Gallery";
import { About } from "@/components/landing/About";
import { Location } from "@/components/landing/Location";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayra Inn — Comfortable Rooms in Kochi, Kerala" },
      {
        name: "description",
        content:
          "Clean, comfortable rooms in Kochi for travellers, families and short stays. Reception open 24/7. Call to check availability today.",
      },
      { property: "og:title", content: "Ayra Inn — Comfortable Rooms in Kochi" },
      {
        property: "og:description",
        content:
          "Clean, comfortable rooms in Kochi for travellers, families and short stays. Reception open 24/7.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          name: "Ayra Inn",
          description:
            "Clean, comfortable rooms in Kochi for travellers, families and short stays. Reception open 24/7.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kochi",
            addressRegion: "Kerala",
            addressCountry: "IN",
          },
          telephone: "+919876543210",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <InfoBar />
        <Rooms />
        <Amenities />
        <Gallery />
        <About />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
