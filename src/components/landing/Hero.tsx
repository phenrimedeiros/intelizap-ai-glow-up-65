import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";
import { ContactModal } from "./ContactModal";
import { Sparkles, Play } from "lucide-react";
const heroMockup = "/lovable-uploads/2a6b87db-23ea-4237-b374-002d3e69f4d7.png";

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  const gradientId = useMemo(() => `g-${Math.random().toString(36).slice(2)}`,[]);
  const [modalOpen, setModalOpen] = useState<{ type: 'free' | 'contact' | null }>({ type: null });

  return (
    <section className={cn("relative overflow-hidden pt-16 pb-14 md:pt-24 md:pb-20", className)} aria-label="Herói Intelizap">
      {/* Ambient gradient blot */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 size-[620px] -translate-x-1/2 rounded-full opacity-30 blur-3xl" style={{ backgroundImage: "var(--gradient-primary)" }} />
      </div>

      <div className="container max-w-6xl mx-auto px-4 text-center">
        <p className="mb-3 inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm text-muted-foreground animate-fade-in">
          <Sparkles className="w-3 h-3 mr-1 text-neon-orange" />
          Plataforma de IA para atendimento
        </p>
        <h1 className="font-display text-4xl leading-tight md:text-6xl md:leading-[1.1] tracking-tight animate-fade-in">
          Automatize seu atendimento com
          <span className="block bg-gradient-primary bg-clip-text text-transparent float-animation"> 
            Inteligência Artificial
          </span>
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in [animation-delay:200ms]">
          Centralize todos os canais e automatize até <span className="text-brand font-semibold">80%</span> dos atendimentos com chatbots, IA generativa e métricas em tempo real.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in [animation-delay:400ms]">
          <Button 
            size="lg" 
            variant="hero" 
            className="hover-scale w-full sm:w-auto"
            asChild
          >
            <a href="https://chat.intelizap.app.br/signup" target="_blank" rel="noopener noreferrer">
              Começar grátis
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto hover:border-brand hover:text-brand transition-colors"
            onClick={() => setModalOpen({ type: 'contact' })}
          >
            Agende uma demonstração
          </Button>
        </div>

        <div className="mt-10 text-sm text-muted-foreground animate-fade-in [animation-delay:600ms]">
          Mais de <span className="text-brand font-semibold">1.000</span> empresas confiam · <span className="text-brand font-semibold">99,9%</span> uptime · Suporte humano + IA
        </div>

        {/* Hero Image */}
        <div className="mt-12 md:mt-16 relative max-w-5xl mx-auto animate-fade-in [animation-delay:800ms]">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-brand/20 to-brand-2/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <img 
              src={heroMockup}
              alt="Interface WhatsApp do Intelizap em ação"
              className="relative w-full h-auto rounded-2xl shadow-2xl border border-border/50 hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/10 to-transparent pointer-events-none" />
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-2xl" />
              <Button 
                size="lg" 
                variant="hero" 
                className="relative rounded-full w-20 h-20 p-0 shadow-2xl hover:scale-110 transition-all duration-300 bg-white/90 hover:bg-white text-brand hover:text-brand/80 border-2 border-white/20"
                onClick={() => setModalOpen({ type: 'contact' })}
              >
                <Play className="w-8 h-8 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative SVG lines (subtle) */}
      <svg aria-hidden className="absolute -bottom-24 left-1/2 -z-10 h-[420px] w-[1200px] -translate-x-1/2 opacity-20" viewBox="0 0 1200 420">
        <defs>
          <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--brand))" />
            <stop offset="100%" stopColor="hsl(var(--brand-2))" />
          </linearGradient>
        </defs>
        <path d="M0,360 C200,420 400,120 600,180 C800,240 1000,420 1200,240" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" className="pulse-soft" />
      </svg>
      
      <ContactModal 
        isOpen={modalOpen.type !== null} 
        onClose={() => setModalOpen({ type: null })} 
        type={modalOpen.type || 'free'} 
      />
    </section>
  );
}
