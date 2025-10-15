import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.webp";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5566984101627?text=Olá! Gostaria de solicitar um orçamento.", "_blank");
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-elegant`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <h1 
            className="font-['Montserrat'] text-xl sm:text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wide cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Di Mármores
          </h1>

          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("sobre")}
              className="font-['Montserrat'] text-foreground hover:text-accent transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection("servicos")}
              className="font-['Montserrat'] text-foreground hover:text-accent transition-colors font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection("projetos")}
              className="font-['Montserrat'] text-foreground hover:text-accent transition-colors font-medium"
            >
              Projetos
            </button>
            <button 
              onClick={() => scrollToSection("contato")}
              className="font-['Montserrat'] text-foreground hover:text-accent transition-colors font-medium"
            >
              Contato
            </button>
            <Button variant="whatsapp" onClick={handleWhatsApp} className="text-xs md:text-sm px-3 md:px-4">
              <img src={whatsappIcon} alt="WhatsApp" className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 flex-shrink-0" />
              <span className="hidden md:inline">WhatsApp</span>
            </Button>
          </div>

          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-3 bg-white border-t border-gray-100">
            <button 
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left font-['Montserrat'] text-foreground hover:text-accent transition-colors font-medium py-2 px-2"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection("servicos")}
              className="block w-full text-left font-['Montserrat'] text-foreground hover:text-accent transition-colors font-medium py-2 px-2"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection("projetos")}
              className="block w-full text-left font-['Montserrat'] text-foreground hover:text-accent transition-colors font-medium py-2 px-2"
            >
              Projetos
            </button>
            <button 
              onClick={() => scrollToSection("contato")}
              className="block w-full text-left font-['Montserrat'] text-foreground hover:text-accent transition-colors font-medium py-2 px-2"
            >
              Contato
            </button>
            <div className="px-2">
              <Button variant="whatsapp" onClick={handleWhatsApp} className="w-full text-sm py-3">
                <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="truncate">Falar com a Di Mármores pelo WhatsApp</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
