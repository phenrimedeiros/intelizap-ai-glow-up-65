import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Users } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Gerente de Atendimento",
    company: "TechVarejo",
    image: "/lovable-uploads/157ed055-5d06-4818-aaa0-474126dd8d02.png",
    content: "Conseguimos reduzir 70% do tempo de resposta e nossos clientes estão muito mais satisfeitos. A IA realmente entende as perguntas!",
    rating: 5,
    stats: "70% menos tempo de resposta"
  },
  {
    name: "Carlos Santos", 
    role: "CEO",
    company: "StartupLogística",
    image: "/lovable-uploads/a3a0f7fb-33a7-429b-9901-8946eabaffc9.png",
    content: "Automatizamos 85% do nosso atendimento. Agora nossa equipe foca apenas nos casos mais complexos. ROI incrível!",
    rating: 5,
    stats: "85% de automação"
  },
  {
    name: "Ana Costa",
    role: "Diretora de CX",
    company: "EcommerceMax",
    image: "/lovable-uploads/405949d7-5c2d-4023-9d61-3f4b05d72c9c.png", 
    content: "O dashboard de métricas nos deu insights que nunca tivemos antes. Conseguimos identificar gargalos e melhorar processos.",
    rating: 5,
    stats: "NPS +40 pontos"
  }
];

const companies = [
  { name: "TechVarejo", size: "500+ funcionários" },
  { name: "StartupLogística", size: "50+ funcionários" },
  { name: "EcommerceMax", size: "200+ funcionários" },
  { name: "ConsultoriaDigital", size: "100+ funcionários" },
  { name: "RetailSolutions", size: "1000+ funcionários" }
];

const stats = [
  { number: "1.000+", label: "Empresas confiam" },
  { number: "99.9%", label: "Uptime garantido" },
  { number: "24/7", label: "Suporte disponível" },
  { number: "80%", label: "Automação média" }
];

export function SocialProof() {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Statistics */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-fade-in">
            Resultados que <span className="text-brand">comprovam</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center animate-fade-in [animation-delay:${(index + 1) * 100}ms]`}
              >
                <div className="text-3xl md:text-4xl font-bold text-brand mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-brand/10 text-brand border-brand/20">
              <Users className="w-3 h-3 mr-1" />
              Depoimentos
            </Badge>
            <h3 className="text-2xl md:text-3xl font-semibold animate-fade-in">
              O que nossos clientes dizem
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in [animation-delay:${(index + 1) * 200}ms]`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand text-brand" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-muted-foreground/30 mb-4" />
                  
                  <p className="text-muted-foreground mb-6">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} · {testimonial.company}
                      </div>
                    </div>
                  </div>
                  
                  <Badge variant="secondary" className="bg-brand/10 text-brand">
                    {testimonial.stats}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company logos */}
        <div className="text-center">
          <p className="text-muted-foreground mb-8 animate-fade-in">
            Empresas de todos os tamanhos confiam no Intelizap
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <div 
                key={index}
                className={`text-center animate-fade-in [animation-delay:${(index + 1) * 100}ms]`}
              >
                <div className="font-semibold text-lg">{company.name}</div>
                <div className="text-sm text-muted-foreground">{company.size}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}