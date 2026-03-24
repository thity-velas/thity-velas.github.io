import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import ProductsSection from "../components/landing/ProductsSection";
import AboutSection from "../components/landing/AboutSection";
import BenefitsSection from "../components/landing/BenefitsSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import NewsletterSection from "../components/landing/NewsletterSection";
import Footer from "../components/landing/Footer";

const HERO_IMAGE = "https://raw.githubusercontent.com/thity-velas/thity-velas.github.io/refs/heads/main/img/hero.png";
const ABOUT_IMAGE = "https://raw.githubusercontent.com/thity-velas/thity-velas.github.io/refs/heads/main/img/about.png";

const PRODUCTS = [
  {
    name: "Flor de Sálvia",
    category: "Herbal",
    description: "Notas de sálvia branca e eucalipto com toque amadeirado.",
    price: "89,90",
    image: "https://raw.githubusercontent.com/thity-velas/thity-velas.github.io/refs/heads/main/img/salvia.png",
  },
  {
    name: "Rosa Antiga",
    category: "Floral",
    description: "Pétalas de rosa, peônia e um leve toque de baunilha.",
    price: "94,90",
    image: "https://raw.githubusercontent.com/thity-velas/thity-velas.github.io/refs/heads/main/img/rosa-antiga.png",
  },
  {
    name: "Âmbar & Lavanda",
    category: "Relaxante",
    description: "Lavanda francesa combinada com âmbar quente e aconchegante.",
    price: "99,90",
    image: "https://raw.githubusercontent.com/thity-velas/thity-velas.github.io/refs/heads/main/img/ambar-lavanda.png",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection heroImage={HERO_IMAGE} />
      <ProductsSection products={PRODUCTS} />
      <AboutSection aboutImage={ABOUT_IMAGE} />
      <BenefitsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
