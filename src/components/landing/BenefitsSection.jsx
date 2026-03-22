import React from "react";
import { motion } from "framer-motion";
import { Droplets, Clock, Recycle, Gift } from "lucide-react";

const benefits = [
  {
    icon: Droplets,
    title: "Cera de Soja",
    description: "Queima limpa e duradoura, sem fuligem ou toxinas no ambiente.",
    number: "01",
  },
  {
    icon: Clock,
    title: "+50h de Queima",
    description: "Nossas velas oferecem até 50 horas de fragrância contínua.",
    number: "02",
  },
  {
    icon: Recycle,
    title: "Eco-Friendly",
    description: "Embalagens sustentáveis e ingredientes de fontes renováveis.",
    number: "03",
  },
  {
    icon: Gift,
    title: "Presente Ideal",
    description: "Embalagens especiais para presentear quem você ama.",
    number: "04",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-secondary mb-4">
            Diferenciais
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
            Por que escolher a <span className="italic">Lumière</span>?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl border border-border/60 hover:border-primary/30 hover:bg-muted/30 transition-all duration-500 group"
            >
              <span className="font-heading text-5xl font-light text-muted/80 absolute top-4 right-6 group-hover:text-primary/10 transition-colors">
                {benefit.number}
              </span>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-medium text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}