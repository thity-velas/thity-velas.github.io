import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import ProductsSection from "../components/landing/ProductsSection";
import AboutSection from "../components/landing/AboutSection";
import BenefitsSection from "../components/landing/BenefitsSection";
// import TestimonialsSection from "../components/landing/TestimonialsSection";
// import NewsletterSection from "../components/landing/NewsletterSection";
import Footer from "../components/landing/Footer";

const HERO_IMAGE = "https://raw.githubusercontent.com/thity-velas/thity-velas.github.io/refs/heads/main/img/hero.png";
const ABOUT_IMAGE = "https://raw.githubusercontent.com/thity-velas/thity-velas.github.io/refs/heads/main/img/about.png";

const PRODUCTS = [
  {
    name: "Flor de Sálvia",
    highlight: true,
    category: "Herbal",
    description: "Notas de sálvia branca e eucalipto com toque amadeirado.",
    price: "89,90",
    image: "https://raw.githubusercontent.com/thity-velas/thity-velas.github.io/refs/heads/main/img/salvia.png",
    long_description: "A Flor de Sálvia é uma vela que combina a frescura da sálvia branca com o aroma revigorante do eucalipto, criando uma atmosfera limpa e energizante. Perfeita para momentos de meditação ou para renovar o ambiente da sua casa, esta vela traz um toque amadeirado que equilibra as notas herbais, proporcionando uma experiência olfativa única e relaxante.",
  },
  {
    name: "Rosa Antiga",
    highlight: true,
    category: "Floral",
    description: "Pétalas de rosa, peônia e um leve toque de baunilha.",
    price: "94,90",
    image: "https://raw.githubusercontent.com/thity-velas/thity-velas.github.io/refs/heads/main/img/rosa-antiga.png",
    long_description: "A Rosa Antiga é uma vela que captura a essência clássica e romântica das rosas, combinando notas de pétalas de rosa fresca com a suavidade da peônia e um toque sutil de baunilha. Esta fragrância floral é perfeita para criar um ambiente acolhedor e elegante, ideal para jantares especiais ou para adicionar um toque de sofisticação ao seu espaço.",
  },
  {
    name: "Âmbar & Lavanda",
    highlight: true,
    category: "Relaxante",
    description: "Lavanda francesa combinada com âmbar quente e aconchegante.",
    price: "99,90",
    image: "https://raw.githubusercontent.com/thity-velas/thity-velas.github.io/refs/heads/main/img/ambar-lavanda.png",
    long_description: "A vela Âmbar & Lavanda é a combinação perfeita para criar um ambiente relaxante e acolhedor. A lavanda francesa traz uma fragrância suave e calmante, enquanto o âmbar quente adiciona uma profundidade aconchegante à mistura. Ideal para momentos de descanso ou para transformar seu espaço em um refúgio de tranquilidade, esta vela é a escolha certa para quem busca equilíbrio e serenidade.",
  },
  {
    name: "Produto 4",
    highlight: false,
    category: "Relaxante",
    description: "Loren ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "99,90",
    image: "https://raw.githubusercontent.com/thity-velas/thity-velas.github.io/refs/heads/main/img/ambar-lavanda.png",
    long_description: "Loren ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Produto 5",
    highlight: false,
    category: "Relaxante",
    description: "Loren ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "99,90",
    image: "https://raw.githubusercontent.com/thity-velas/thity-velas.github.io/refs/heads/main/img/rosa-antiga.png",
    long_description: "Loren ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
      {/* <TestimonialsSection /> */}
      {/* <NewsletterSection /> */}
      <Footer />
    </div>
  );
}
