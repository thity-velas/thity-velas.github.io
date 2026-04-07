import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Flame } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Produtos", href: "#produtos" },
  { label: "Sobre", href: "#sobre" },
  // { label: "Depoimentos", href: "#depoimentos" },
  // { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <Flame className="w-6 h-6 text-secondary" />
          <span className="font-heading text-2xl font-semibold tracking-wide text-foreground">
            Thity Velas Artesanais
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          {/* <a
            href="#produtos"
            className="font-body text-sm tracking-wide bg-primary text-primary-foreground px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Comprar Agora
          </a> */}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              {/* <a
                href="#produtos"
                onClick={() => setOpen(false)}
                className="font-body text-sm tracking-wide bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-center hover:opacity-90 transition-opacity"
              >
                Comprar Agora
              </a> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}