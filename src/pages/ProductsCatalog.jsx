import { motion } from "framer-motion";
import Navbar from "../components/landing/Navbar";
import ProductCard from "../components/landing/ProductCard";
import Footer from "../components/landing/Footer";
import { PRODUCTS } from "../data/products";

export default function ProductsCatalog() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-secondary mb-4">
              Catálogo
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
              Todas as <span className="italic">Velas</span>
            </h2>
            <p className="font-body text-sm text-muted-foreground max-w-md mx-auto">
              Explore nossa coleção completa de fragrâncias artesanais feitas com ingredientes naturais selecionados.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {PRODUCTS.map((product, index) => (
              <ProductCard key={product.name} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
