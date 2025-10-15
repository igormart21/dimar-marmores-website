import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-granite.jpg";
import whatsappIcon from "@/assets/whatsapp-icon.webp";

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
        <h1 className="font-['Montserrat'] text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-3 md:mb-4 tracking-tight uppercase">
          Di Mármores
        </h1>
        <p className="font-['Montserrat'] text-lg sm:text-xl md:text-2xl lg:text-3xl text-accent mb-4 md:mb-6 font-bold uppercase tracking-wide">
          Mármores e Granitos Premium
        </p>
        <p className="font-['Montserrat'] text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-6 md:mb-8 max-w-2xl mx-auto font-light px-2">
          Especialistas em mármores e granitos. Bancadas, escadas, fachadas, revestimentos e túmulos com o melhor preço da região.
        </p>
        <Button 
          variant="hero" 
          size="lg" 
          onClick={handleWhatsApp}
          className="text-sm md:text-lg px-4 md:px-6"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 md:w-6 md:h-6 mr-2 flex-shrink-0" />
          <span className="hidden md:inline">Solicitar Orçamento</span>
          <span className="md:hidden">Orçamento</span>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
