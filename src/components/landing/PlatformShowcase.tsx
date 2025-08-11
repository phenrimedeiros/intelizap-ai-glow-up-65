import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { MessageSquare, BarChart3, Bot, Zap } from "lucide-react";
import chatDemo from "/lovable-uploads/895c15e3-d9db-42b3-8efd-2f4c73b669aa.png";
import analyticsDemo from "@/assets/graficos-demo.png";
import omnichanelDemo from "/lovable-uploads/e1a6368a-cae1-40b5-90d8-808590975652.png";
import orcamentoDemo from "/lovable-uploads/05aa580b-0b36-4481-ac51-f23a1b407fe2.png";

const showcaseItems = [
  {
    id: "chat",
    title: "IA Conversacional",
    description: "Chatbots inteligentes que entendem contexto e respondem naturalmente",
    icon: Bot,
    image: chatDemo,
    features: ["Processamento de linguagem natural", "Contexto de conversas", "Respostas personalizadas"]
  },
  {
    id: "analytics", 
    title: "Métricas em Tempo Real",
    description: "Dashboards completos para acompanhar performance e satisfação",
    icon: BarChart3,
    image: orcamentoDemo,
    features: ["Tempo de resposta", "Taxa de resolução", "Satisfação do cliente"]
  },
  {
    id: "multichannel",
    title: "Omnichannel Unificado", 
    description: "Todos os canais de atendimento centralizados em uma plataforma",
    icon: MessageSquare,
    image: omnichanelDemo,
    features: ["WhatsApp Business", "Facebook Messenger", "Instagram Direct"]
  }
];

export function PlatformShowcase() {
  const [activeTab, setActiveTab] = useState("chat");

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-neon-orange/10 text-neon-orange border-neon-orange/20">
            <Zap className="w-3 h-3 mr-1" />
            Veja em Ação
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold animate-fade-in">
            Conheça nossa <span className="text-brand">plataforma</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            Interface intuitiva e poderosa para transformar seu atendimento ao cliente
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-8">
            {showcaseItems.map((item) => (
              <TabsTrigger 
                key={item.id} 
                value={item.id}
                className="flex items-center gap-2 data-[state=active]:bg-brand data-[state=active]:text-brand-foreground"
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{item.title.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {showcaseItems.map((item) => (
            <TabsContent key={item.id} value={item.id} className="animate-fade-in">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-lg bg-brand/10 text-brand">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6">
                    {item.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {item.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-neon-orange" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button size="lg" variant="hero" className="hover-scale">
                    Experimentar grátis
                  </Button>
                </div>

                <div className="order-1 lg:order-2">
                  <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-background to-muted/50">
                    <CardContent className="p-0">
                      <img 
                        src={item.image} 
                        alt={`Interface da ${item.title}`}
                        className="w-full h-auto rounded-lg"
                        loading="lazy"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
