import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.webp";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    project: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const whatsappMessage = `*Nova Solicitação de Orçamento*\n\nNome: ${formData.name}\nTelefone: ${formData.phone}\nTipo de Projeto: ${formData.project || "Não especificado"}\n\nMensagem:\n${formData.message}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/5566984101627?text=${encodedMessage}`, "_blank");
    
    toast.success("Redirecionando para o WhatsApp...");
    setFormData({ name: "", phone: "", project: "", message: "" });
  };

  return (
    <section id="contato" className="py-20 bg-marble-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold text-primary mb-6 uppercase tracking-tight">
            Solicite Seu Orçamento
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="font-['Montserrat'] text-2xl font-bold text-primary mb-4">
              Entre em Contato
            </h3>
            <p className="font-['Montserrat'] text-accent font-bold text-lg mb-6 uppercase">
              Melhor Preço da Região!
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent mt-1" />
                <div>
                  <p className="font-['Montserrat'] font-bold text-primary">Telefone / WhatsApp</p>
                  <p className="font-['Montserrat'] text-stone font-medium">(66) 98410-1627</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent mt-1" />
                <div>
                  <p className="font-['Montserrat'] font-bold text-primary">E-mail</p>
                  <p className="font-['Montserrat'] text-stone font-medium">contato@dimarmoreegranito.com.br</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent mt-1" />
                <div>
                  <p className="font-['Montserrat'] font-bold text-primary">Endereço</p>
                  <p className="font-['Montserrat'] text-stone font-medium">Avenida Brasil QD 2 Lote 19<br />Setor Aeroporto - Porto Alegre do Norte, MT</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="font-['Montserrat']">Nome *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Seu nome completo"
                required
                className="font-['Montserrat']"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="font-['Montserrat']">Telefone *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(11) 99999-9999"
                required
                className="font-['Montserrat']"
              />
            </div>
            <div>
              <Label htmlFor="project" className="font-['Montserrat']">Tipo de Projeto</Label>
              <Input
                id="project"
                value={formData.project}
                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                placeholder="Ex: Bancada de cozinha"
                className="font-['Montserrat']"
              />
            </div>
            <div>
              <Label htmlFor="message" className="font-['Montserrat']">Mensagem *</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Descreva seu projeto..."
                rows={5}
                required
                className="font-['Montserrat']"
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 mr-2" />
              Falar com a Di Mármores pelo WhatsApp
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
