import { useState } from "react";
import { motion } from "framer-motion";

/**
 * @typedef {Object} Product
 * @property {string} image
 * @property {string} name
 * @property {string} category
 * @property {string} long_description
 * @property {string} description
 * @property {string|number} price
 */

/**
 * @param {{ product: Product, index: number }} props
 */
export default function ProductCard({ product, index }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group cursor-pointer"
      style={{ perspective: "1200px" }}
    >
      {/* Card container — aspect ratio kept the same as original */}
      <div
        className="relative aspect-[3/4] w-full rounded-2xl mb-5"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl bg-muted"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <button
              onClick={() => setFlipped(true)}
              className="w-full font-body text-sm tracking-wide bg-background/90 backdrop-blur-sm text-foreground py-3 rounded-full hover:bg-background transition-colors"
            >
              Ver Detalhes
            </button>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl bg-background border border-foreground/10 flex flex-col justify-between p-6"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-secondary mb-2">
              {product.category}
            </p>
            <h3 className="font-heading text-2xl font-medium text-foreground mb-4">
              {product.name}
            </h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {product.long_description}
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <p className="font-heading text-xl font-semibold text-foreground">
              R$ {product.price}
            </p>
            <button
              onClick={() => setFlipped(false)}
              className="w-full font-body text-sm tracking-wide border border-foreground/20 text-foreground py-3 rounded-full hover:bg-foreground/5 transition-colors"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>

      {/* Info below the card — hidden when flipped */}
      <div
        className="px-1 transition-opacity duration-300"
        style={{ opacity: flipped ? 0 : 1, pointerEvents: flipped ? "none" : "auto" }}
      >
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
