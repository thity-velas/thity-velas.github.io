import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Obrigado! Você receberá nossas novidades em breve.");
    setEmail("");
  };

  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-secondary mb-4">
            Newsletter
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
            Fique por <span className="italic">dentro</span>
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-10">
            Receba novidades sobre lançamentos, promoções exclusivas e dicas de bem-estar diretamente no seu e-mail.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 rounded-full px-6 bg-muted border-border/60 font-body text-sm placeholder:text-muted-foreground/60"
            />
            <button
              type="submit"
              className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-wide flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
              Inscrever
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}