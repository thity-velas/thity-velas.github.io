import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection({ heroImage }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Velas artesanais aromáticas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-secondary mb-6"
          >
            Velas artesanais & aromáticas
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-foreground mb-6"
          >
            Ilumine seus
            <br />
            <span className="italic font-light text-primary">momentos</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg"
          >
            Cada vela é cuidadosamente feita de forma artesanal com cera de coco natural e óleos essenciais puros, 
            trazendo aroma e aconchego para o seu lar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#produtos"
              className="font-body text-sm tracking-wide bg-primary text-primary-foreground px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Explorar Coleção
            </a>
            <a
              href="#sobre"
              className="font-body text-sm tracking-wide border border-foreground/20 text-foreground px-8 py-3.5 rounded-full hover:bg-foreground/5 transition-colors"
            >
              Nossa História
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}