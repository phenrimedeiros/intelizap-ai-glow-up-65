import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Básico",
    price: "R$ 97",
    period: "/mês",
    description: "Para pequenas empresas começando com automação",
    icon: Zap,
    features: [
      "Até 1.000 conversas/mês",
      "1 canal de atendimento",
      "Chatbot básico com IA",
      "Relatórios essenciais",
      "Suporte por email",
      "Integração WhatsApp"
    ],
    cta: "Começar grátis",
    popular: false,
    delay: "100ms"
  },
  {
    name: "Profissional",
    price: "R$ 197",
    period: "/mês",
    description: "Para empresas em crescimento que precisam de mais recursos",
    icon: Star,
    features: [
      "Até 5.000 conversas/mês",
      "Canais ilimitados",
      "IA avançada e treinamento personalizado",
      "Analytics completo e dashboards",
      "Suporte prioritário",
      "Automações avançadas",
      "Integrações com CRM",
      "API completa"
    ],
    cta: "Teste 14 dias grátis",
    popular: true,
    delay: "200ms"
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    description: "Para grandes empresas com necessidades específicas",
    icon: Crown,
    features: [
      "Conversas ilimitadas",
      "Canais e usuários ilimitados",
      "IA customizada para seu negócio",
      "Relatórios personalizados",
      "Suporte 24/7 dedicado",
      "Infraestrutura dedicada",
      "Consultoria especializada",
      "SLA garantido"
    ],
    cta: "Falar com vendas",
    popular: false,
    delay: "300ms"
  }
];

export function Pricing() {
  return (
    <section id="precos" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">
            Planos que <span className="text-brand">crescem</span> com seu negócio
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            Escolha o plano ideal para automatizar seu atendimento e aumentar suas vendas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <Badge className="bg-brand text-brand-foreground font-semibold px-3 py-1.5 whitespace-nowrap shadow-lg">
                    Mais Popular
                  </Badge>
                </div>
              )}
              <Card
                className={cn(
                  "relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-in group",
                  plan.popular && "border-brand shadow-lg scale-105 md:scale-110 bg-gradient-to-b from-background to-brand/5 mt-6",
                  `[animation-delay:${plan.delay}]`
                )}
              >

              <CardHeader className={cn("text-center pb-4", plan.popular && "pt-8")}>
                <div className="mx-auto w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center mb-4 group-hover:bg-brand/10 transition-colors">
                  <plan.icon className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1 mt-4">
                  <span className="text-4xl font-bold text-brand">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="pb-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-0">
                <Button
                  size="lg"
                  className={cn(
                    "w-full",
                    plan.popular
                      ? "bg-brand hover:bg-brand-2 text-brand-foreground"
                      : "variant-outline hover:bg-brand hover:text-brand-foreground border-brand/20"
                  )}
                  asChild
                >
                  <a
                    href={plan.name === "Enterprise" 
                      ? "#contato" 
                      : "https://chat.intelizap.app.br/signup"
                    }
                    target={plan.name === "Enterprise" ? "_self" : "_blank"}
                    rel={plan.name === "Enterprise" ? "" : "noopener noreferrer"}
                  >
                    {plan.cta}
                  </a>
                </Button>
              </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in [animation-delay:400ms]">
          <p className="text-sm text-muted-foreground mb-4">
            Todos os planos incluem período de teste gratuito • Sem taxa de setup • Cancele quando quiser
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-background/50 rounded-full px-6 py-3 backdrop-blur">
            <Check className="w-4 h-4 text-brand" />
            Suporte em português • Conformidade com LGPD
          </div>
        </div>
      </div>
    </section>
  );
}