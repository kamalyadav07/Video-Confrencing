import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problems } from "@/components/landing/Problems";
import { Solutions } from "@/components/landing/Solutions";
import { Industries } from "@/components/landing/Industries";
import { ProductStack } from "@/components/landing/ProductStack";
import { WhyCompton } from "@/components/landing/WhyCompton";
import { Process } from "@/components/landing/Process";
import { Clients } from "@/components/landing/Clients";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Compton — Smart Meeting Room & Video Conferencing Solutions" },
      {
        name: "description",
        content:
          "End-to-end video conferencing & smart meeting room solutions for enterprises, corporates & government. 5000+ rooms deployed across India. Get a free consultation.",
      },
      { property: "og:title", content: "Compton — Smart Meeting Room Solutions" },
      {
        property: "og:description",
        content: "Transform meeting rooms into smart collaboration hubs. Trusted by Nestle, Bajaj & more.",
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
        <Problems />
        <Solutions />
        <Industries />
        <ProductStack />
        <WhyCompton />
        <Process />
        <Clients />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
