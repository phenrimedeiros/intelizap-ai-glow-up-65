import { useEffect } from "react";
import { Hero } from "@/components/landing/Hero";
import { FeatureCard } from "@/components/landing/FeatureCard";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Pricing } from "@/components/landing/Pricing";
import { Footer } from "@/components/landing/Footer";
import { PlatformShowcase } from "@/components/landing/PlatformShowcase";
import { SocialProof } from "@/components/landing/SocialProof";
import { Logo } from "@/components/ui/logo";
import { Bot, MessageSquare, BarChart3, ShieldCheck, Clock, Plug } from "lucide-react";

function setMeta(name: string, content: string) {
  const el = document.querySelector(`meta[name="${name}"]`);
  if (el) el.setAttribute("content", content);
  else {
    const m = document.createElement("meta");
    m.setAttribute("name", name);
    m.setAttribute("content", content);
    document.head.appendChild(m);
  }
}

const Index = () => {
  useEffect(() => {
    document.title = "Intelizap · IA para Atendimento Omnichannel";
    setMeta("description", "Plataforma de atendimento omnichannel com IA: WhatsApp, chatbot, automações e métricas para seu time.");
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 border-b backdrop-blur supports-[backdrop-filter]:bg-background/75 animate-fade-in">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <a href="https://www.intelizap.app.br" target="_blank" rel="noopener noreferrer">
            <Logo className="cursor-pointer" />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#recursos" className="text-muted-foreground hover:text-neon-orange transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-neon-orange after:transition-all hover:after:w-full">Recursos</a>
            <a href="#como-funciona" className="text-muted-foreground hover:text-neon-orange transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-neon-orange after:transition-all hover:after:w-full">Como funciona</a>
            <a href="#precos" className="text-muted-foreground hover:text-neon-orange transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-neon-orange after:transition-all hover:after:w-full">Preços</a>
            <a href="#contato" className="text-muted-foreground hover:text-neon-orange transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-neon-orange after:transition-all hover:after:w-full">Contato</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />

        <section id="recursos" className="py-10 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-2xl md:text-3xl font-semibold animate-fade-in">
              Por que escolher o <span className="text-brand">Intelizap</span>?
            </h2>
            <p className="mt-2 text-center text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
              Tudo que você precisa para automatizar e otimizar seu atendimento.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <FeatureCard 
                title="IA Avançada" 
                description="Assistentes capazes de entender e responder com linguagem natural, treinados com base no seu negócio." 
                icon={Bot} 
                className="[animation-delay:100ms]"
              />
              <FeatureCard 
                title="Multi‑canais" 
                description="WhatsApp, Facebook, Instagram, Telegram e muito mais em uma única plataforma." 
                icon={MessageSquare} 
                className="[animation-delay:200ms]"
              />
              <FeatureCard 
                title="Analytics Completo" 
                description="Métricas de atendimento, velocidade e satisfação com dashboards em tempo real." 
                icon={BarChart3} 
                className="[animation-delay:300ms]"
              />
              <FeatureCard 
                title="Segurança Total" 
                description="Conformidade com a LGPD e criptografia ponta‑a‑ponta para proteger suas conversas." 
                icon={ShieldCheck} 
                className="[animation-delay:400ms]"
              />
              <FeatureCard 
                title="Disponível 24/7" 
                description="Automatize fluxos e garanta atendimento contínuo, sem interrupções." 
                icon={Clock} 
                className="[animation-delay:500ms]"
              />
              <FeatureCard 
                title="Integração Fácil" 
                description="API simples e integrações prontas com os principais sistemas do mercado." 
                icon={Plug} 
                className="[animation-delay:600ms]"
              />
            </div>
          </div>
        </section>

        <PlatformShowcase />

        <HowItWorks />

        <SocialProof />

        <Pricing />
      </main>

      <Footer />
    </>
  );
};

export default Index;
