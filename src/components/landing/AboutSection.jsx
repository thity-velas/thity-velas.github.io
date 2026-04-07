import React from "react";
import { motion } from "framer-motion";
import { Leaf, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Cera de soja pura e óleos essenciais sem aditivos químicos.",
  },
  {
    icon: Heart,
    title: "Feito à Mão",
    description: "Cada vela é produzida artesanalmente com atenção a cada detalhe.",
  },
  {
    icon: Sparkles,
    title: "Fragrâncias Exclusivas",
    description: "Combinações únicas de aromas criadas por nossos especialistas.",
  },
];

export default function AboutSection({ aboutImage }) {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src={aboutImage}
                alt="Processo artesanal de fabricação de velas"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent block */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/15 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-secondary mb-4">
              Nossa Essência
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-6">
              Arte em cada <span className="italic">chama</span>
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-10">
              Na Thity Velas, acreditamos que uma vela é muito mais do que uma fonte de luz. 
              É um convite ao relaxamento, uma experiência sensorial que transforma espaços 
              e momentos. Desde 2018, criamos velas artesanais com ingredientes naturais 
              selecionados, combinando tradição e inovação em cada peça.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-medium text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}