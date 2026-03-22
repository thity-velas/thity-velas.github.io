import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import ProductsSection from "../components/landing/ProductsSection";
import AboutSection from "../components/landing/AboutSection";
import BenefitsSection from "../components/landing/BenefitsSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import NewsletterSection from "../components/landing/NewsletterSection";
import Footer from "../components/landing/Footer";

const HERO_IMAGE = "https://media.base44.com/images/public/69c037f2b5807be090403942/4a8caf658_generated_93c00a97.png";
const ABOUT_IMAGE = "https://media.base44.com/images/public/69c037f2b5807be090403942/1e096e471_generated_8a9becf1.png";

const PRODUCTS = [
  {
    name: "Flor de Sálvia",
    category: "Herbal",
    description: "Notas de sálvia branca e eucalipto com toque amadeirado.",
    price: "89,90",
    image: "https://media.base44.com/images/public/69c037f2b5807be090403942/7e3c0b885_generated_8eac234c.png",
  },
  {
    name: "Rosa Antiga",
    category: "Floral",
    description: "Pétalas de rosa, peônia e um leve toque de baunilha.",
    price: "94,90",
    image: "https://media.base44.com/images/public/69c037f2b5807be090403942/2ad2865fc_generated_31cd401e.png",
  },
  {
    name: "Âmbar & Lavanda",
    category: "Relaxante",
    description: "Lavanda francesa combinada com âmbar quente e aconchegante.",
    price: "99,90",
    image: "https://media.base44.com/images/public/69c037f2b5807be090403942/3547a3a75_generated_db772dd5.png",
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