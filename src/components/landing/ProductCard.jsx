import React from "react";
import { motion } from "framer-motion";

export default function ProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl bg-muted mb-5 aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button className="w-full font-body text-sm tracking-wide bg-background/90 backdrop-blur-sm text-foreground py-3 rounded-full hover:bg-background transition-colors">
            Ver Detalhes
          </button>
        </div>
      </div>
      <div className="px-1">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-secondary mb-1.5">
          {product.category}
        </p>
        <h3 className="font-heading text-xl font-medium text-foreground mb-1">
          {product.name}
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-2">
          {product.description}
        </p>
        <p className="font-heading text-lg font-semibold text-foreground">
          R$ {product.price}
        </p>
      </div>
    </motion.div>
  );
}