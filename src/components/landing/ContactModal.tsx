import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MessageCircle } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'free' | 'contact';
}

export function ContactModal({ isOpen, onClose, type }: ContactModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: type === 'free' ? "Conta gratuita criada!" : "Mensagem enviada!",
      description: type === 'free' 
        ? "Você receberá as instruções de acesso por email em alguns minutos."
        : "Nossa equipe entrará em contato em até 24 horas.",
    });
    onClose();
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] animate-scale-in">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {type === 'free' ? (
              <>
                <div className="p-1 rounded bg-brand/10 text-brand">
                  <MessageCircle className="h-4 w-4" />
                </div>
                Começar grátis
              </>
            ) : (
              <>
                <div className="p-1 rounded bg-brand/10 text-brand">
                  <Phone className="h-4 w-4" />
                </div>
                Falar com consultor
              </>
            )}
          </DialogTitle>
          <DialogDescription>
            {type === 'free' 
              ? "Preencha os dados abaixo para criar sua conta gratuita no Intelizap."
              : "Nossa equipe especializada está pronta para ajudar você."
            }
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="name">Nome *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="mt-1"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="company">Empresa</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className="mt-1"
            />
          </div>
          
          {type === 'contact' && (
            <div>
              <Label htmlFor="message">Mensagem</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder="Conte-nos sobre suas necessidades..."
                className="mt-1 resize-none"
                rows={3}
              />
            </div>
          )}
          
          <div className="flex gap-3 pt-2">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancelar
            </Button>
            <Button 
              type="submit" 
              className={`flex-1 ${type === 'contact' ? 'bg-brand hover:bg-brand/90 text-brand-foreground' : ''}`}
            >
              {type === 'free' ? 'Criar conta' : 'Enviar mensagem'}
            </Button>
          </div>
        </form>
        
        {type === 'contact' && (
          <div className="pt-4 border-t space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand" />
              <span>contato@intelizap.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand" />
              <span>(11) 99999-9999</span>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}