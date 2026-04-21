import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function ProductsSection({ products }) {
  return (
    <section id="produtos" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-secondary mb-4">
            Coleção
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            Nossos <span className="italic">Favoritos</span>
          </h2>
          <p className="font-body text-sm text-muted-foreground max-w-md mx-auto">
            Fragrâncias únicas criadas com ingredientes naturais selecionados para transformar qualquer ambiente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {products.filter((p) => p.highlight).map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <Link
            to="/catalogo"
            className="font-body text-sm tracking-wide border border-foreground/20 text-foreground px-8 py-3.5 rounded-full hover:bg-foreground/5 transition-colors inline-block"
          >
            Ver Mais
          </Link>
        </motion.div>
      </div>
    </section>
  );
}