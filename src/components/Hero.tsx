import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-granite.jpg";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5566984101627?text=Olá! Gostaria de solicitar um orçamento.", "_blank");
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-['Montserrat'] text-5xl md:text-7xl font-bold text-primary-foreground mb-4 tracking-tight uppercase">
          DI Mármore & Granito
        </h1>
        <p className="font-['Montserrat'] text-2xl md:text-3xl text-accent mb-6 font-bold uppercase tracking-wide">
          Melhor Preço da Região
        </p>
        <p className="font-['Montserrat'] text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-light">
          Excelência em mármore e granito, transformando ambientes com elegância e precisão
        </p>
        <Button 
          variant="hero" 
          size="lg" 
          onClick={handleWhatsApp}
          className="text-lg"
        >
          <MessageCircle className="mr-2" />
          Solicitar Orçamento
        </Button>
      </div>
    </section>
  );
};

export default Hero;
