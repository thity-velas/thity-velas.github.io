import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Carolina",
    role: "Cliente desde 2022",
    text: "As velas da Lumière transformaram a atmosfera da minha casa. A fragrância de lavanda é simplesmente incrível e dura por semanas!",
    rating: 5,
  },
  {
    name: "Mariana Silva",
    role: "Cliente desde 2021",
    text: "Presenteei minha mãe e ela amou! A qualidade é impecável e a embalagem é lindíssima. Virou nosso presente favorito.",
    rating: 5,
  },
  {
    name: "Fernanda Oliveira",
    role: "Cliente desde 2023",
    text: "Melhor vela artesanal que já comprei. O aroma é suave e natural, perfeito para momentos de meditação e relaxamento.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-secondary mb-4">
            Depoimentos
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
            O que dizem nossos <span className="italic">clientes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative bg-background rounded-2xl p-8 border border-border/60"
            >
              <Quote className="w-8 h-8 text-primary/15 mb-4" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <div>
                <p className="font-heading text-base font-medium text-foreground">
                  {testimonial.name}
                </p>
                <p className="font-body text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}