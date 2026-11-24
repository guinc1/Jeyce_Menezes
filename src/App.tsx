import { About } from "@/components/About";
import { Approach } from "@/components/Approach";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Formation } from "@/components/Formation";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { WelcomePopup } from "@/components/WelcomePopup";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Analytics } from "@vercel/analytics/react";

export function App() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Formation />
      <Approach />
      <Services />
      <Testimonials />
      <Manifesto />
      {/* Feed do Instagram desativado por enquanto — para reativar, reimportar
          InstagramFeed, recolocar aqui, voltar o link no Navbar e o Contato para "08". */}
      <Contact />
      <Footer />
      <WhatsAppFloat />
      <WelcomePopup />
      <Analytics />
    </main>
  );
}
