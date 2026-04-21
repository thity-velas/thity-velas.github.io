import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import ProductsSection from "../components/landing/ProductsSection";
import AboutSection from "../components/landing/AboutSection";
// import BenefitsSection from "../components/landing/BenefitsSection";
// import TestimonialsSection from "../components/landing/TestimonialsSection";
// import NewsletterSection from "../components/landing/NewsletterSection";
import Footer from "../components/landing/Footer";
import { PRODUCTS } from "../data/products";

const HERO_IMAGE = "https://raw.githubusercontent.com/thity-velas/thity-velas.github.io/refs/heads/main/img/hero.png";
const ABOUT_IMAGE = "https://raw.githubusercontent.com/thity-velas/thity-velas.github.io/refs/heads/main/img/nossa-essencia.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection heroImage={HERO_IMAGE} />
      <ProductsSection products={PRODUCTS} />
      <AboutSection aboutImage={ABOUT_IMAGE} />
      {/* <BenefitsSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <NewsletterSection /> */}
      <Footer />
    </div>
  );
}
