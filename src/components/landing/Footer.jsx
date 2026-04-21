import React from "react";
import { Flame, Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          {/* <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-5 h-5 text-secondary" />
              <span className="font-heading text-xl font-semibold text-foreground">Thity Velas</span>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Velas artesanais aromáticas feitas com amor e ingredientes naturais.
            </p>
          </div> */}

          {/* Links */}
          {/* <div>
            <h4 className="font-heading text-base font-medium text-foreground mb-4">Navegação</h4>
            <div className="flex flex-col gap-2.5">
              {["Início", "Produtos", "Sobre Nós"].map((link) => (
                <a key={link} href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-base font-medium text-foreground mb-4">Informações</h4>
            <div className="flex flex-col gap-2.5">
              {["Política de Privacidade", "Termos de Uso", "Trocas e Devoluções", "FAQ"].map((link) => (
                <a key={link} href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div> */}

          {/* Social */}
          <div>
            <h4 className="font-heading text-base font-medium text-foreground mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/thityvelas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all"
              >
                <Instagram className="w-4 h-4 text-muted-foreground" />
              </a>
              {/* {[Facebook, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all"
                >
                  <Icon className="w-4 h-4 text-muted-foreground" />
                </a>
              ))} */}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border/40 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 Thity Velas Artesanais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}