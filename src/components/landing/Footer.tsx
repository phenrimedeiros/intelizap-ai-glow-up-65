import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Send, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
export function Footer() {
  const [email, setEmail] = useState("");
  const {
    toast
  } = useToast();
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Inscrição realizada!",
        description: "Você receberá novidades sobre IA e atendimento em seu email."
      });
      setEmail("");
    }
  };
  return <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4 animate-fade-in">
            <Logo size="lg" />
            <p className="text-sm text-muted-foreground max-w-xs">
              Revolucione seu atendimento com IA avançada. Automatize, 
              analise e otimize todas as suas conversas em um só lugar.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-neon-orange/10 hover:text-neon-orange transition-all duration-300 hover:scale-110" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-neon-orange/10 hover:text-neon-orange transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-neon-orange/10 hover:text-neon-orange transition-all duration-300 hover:scale-110" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-neon-orange/10 hover:text-neon-orange transition-all duration-300 hover:scale-110" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Produtos */}
          <div className="space-y-4 animate-fade-in [animation-delay:100ms]">
            <h3 className="font-semibold text-base">Produtos</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-neon-orange transition-colors group">
                Chatbot IA 
                <ExternalLink className="inline-block ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-neon-orange transition-colors group">
                Omnichannel
                <ExternalLink className="inline-block ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-neon-orange transition-colors group">
                Analytics
                <ExternalLink className="inline-block ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-neon-orange transition-colors group">
                Automações
                <ExternalLink className="inline-block ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-neon-orange transition-colors group">
                Integrações
                <ExternalLink className="inline-block ml-1 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </nav>
          </div>

          {/* Empresa */}
          <div className="space-y-4 animate-fade-in [animation-delay:200ms]">
            <h3 className="font-semibold text-base">Empresa</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-neon-orange transition-colors">
                Sobre nós
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-neon-orange transition-colors">
                Carreiras
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-neon-orange transition-colors">
                Imprensa
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-neon-orange transition-colors">
                Blog
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-neon-orange transition-colors">
                Parceiros
              </a>
            </nav>
          </div>

          {/* Contato e Newsletter */}
          <div className="space-y-4 animate-fade-in [animation-delay:300ms]">
            <h3 className="font-semibold text-base">Fique por dentro</h3>
            <p className="text-sm text-muted-foreground">
              Receba novidades sobre IA e atendimento
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input type="email" placeholder="Seu email" value={email} onChange={e => setEmail(e.target.value)} className="text-sm" required />
              <Button type="submit" size="sm" className="w-full bg-neon-orange hover:bg-neon-orange/90 text-white">
                <Send className="h-3 w-3 mr-1" />
                Inscrever-se
              </Button>
            </form>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-neon-orange" />
                <span>contato@intelizap.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                
                
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-neon-orange" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in [animation-delay:400ms]">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Intelizap. Todos os direitos reservados.
          </div>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-neon-orange transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon-orange transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon-orange transition-colors">
              LGPD
            </a>
            <a href="#" className="text-muted-foreground hover:text-neon-orange transition-colors">
              Cookies
            </a>
          </div>
        </div>

        {/* Innovation Badge */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-orange/10 border border-neon-orange/20">
            <div className="w-2 h-2 rounded-full bg-neon-orange animate-pulse"></div>
            <span className="text-xs text-neon-orange font-medium">
              Feito com ❤️ para revolucionar seu atendimento
            </span>
          </div>
        </div>
      </div>
    </footer>;
}