import { Clients } from "@/components/landing/Clients";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Industries } from "@/components/landing/Industries";
import { Navbar } from "@/components/landing/Navbar";
import { Problems } from "@/components/landing/Problems";
import { Process } from "@/components/landing/Process";
import { ProductStack } from "@/components/landing/ProductStack";
import { Solutions } from "@/components/landing/Solutions";
import { ThankYouPage } from "@/components/landing/ThankYouPage";
import { WhyCompton } from "@/components/landing/WhyCompton";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  if (typeof window !== "undefined" && window.location.pathname === "/thank-you") {
    return (
      <div className="min-h-screen bg-background">
        <ThankYouPage />
        <Toaster richColors position="top-center" />
      </div>
    );
  }

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
      <Toaster richColors position="top-center" />
    </div>
  );
}
