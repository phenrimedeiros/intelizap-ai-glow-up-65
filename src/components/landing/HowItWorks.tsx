import { CheckCircle, MessageSquare, Bot, BarChart3, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Conecte seus canais",
    description: "WhatsApp, Instagram, Facebook, Telegram e muito mais em uma única plataforma centralizada.",
    delay: "100ms"
  },
  {
    number: "02", 
    icon: Bot,
    title: "Configure seu chatbot IA",
    description: "Treine a inteligência artificial com informações do seu negócio para respostas personalizadas.",
    delay: "200ms"
  },
  {
    number: "03",
    icon: Settings,
    title: "Automatize atendimentos",
    description: "Crie fluxos inteligentes que resolvem dúvidas e qualificam leads automaticamente.",
    delay: "300ms"
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Analise resultados",
    description: "Acompanhe métricas de performance, satisfação e conversão em tempo real.",
    delay: "400ms"
  }
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">
            Como funciona o <span className="text-brand">Intelizap</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            Em 4 passos simples, transforme seu atendimento com inteligência artificial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "relative group animate-fade-in",
                `[animation-delay:${step.delay}]`
              )}
            >
              <div className="text-center">
                <div className="relative mx-auto w-16 h-16 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand to-brand-2 opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="absolute inset-2 rounded-full bg-background border border-brand/30 group-hover:border-brand/50 transition-colors flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-brand" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-neon-orange text-background text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-brand transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-brand/50 to-transparent" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in [animation-delay:500ms]">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 rounded-full px-6 py-3">
            <CheckCircle className="w-4 h-4 text-neon-orange" />
            Configuração completa em menos de 10 minutos
          </div>
        </div>
      </div>
    </section>
  );
}