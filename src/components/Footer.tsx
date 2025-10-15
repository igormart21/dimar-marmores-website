import { MessageCircle, Instagram } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.webp";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-['Montserrat'] text-2xl font-bold mb-4 uppercase tracking-wide">
              Di Mármores
            </h3>
            <p className="font-['Montserrat'] text-primary-foreground/80 leading-relaxed">
              Especialistas em mármores e granitos. Melhor preço da região em mármore e granito. 
              Transformando ambientes com elegância e qualidade desde 2014.
            </p>
          </div>
          
          <div>
            <h4 className="font-['Montserrat'] font-semibold mb-4 uppercase tracking-wide">
              Contato
            </h4>
            <div className="space-y-2 font-['Montserrat'] text-primary-foreground/80">
              <p>Tel/WhatsApp: (66) 98410-1627</p>
              <p>E-mail: contato@dimarmoreegranito.com.br</p>
              <p>Av. Brasil QD 2 Lt 19 - St. Aeroporto</p>
              <p>Porto Alegre do Norte, MT</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-['Montserrat'] font-semibold mb-4 uppercase tracking-wide">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/5566984101627" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com/dimarmoreegranito" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors"
              >
                <Instagram className="w-5 h-5 text-accent-foreground" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center font-['Montserrat'] text-sm text-primary-foreground/60">
          <p>CNPJ: 12.345.678/0001-90</p>
          <p className="mt-2">&copy; 2025 Di Mármores. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
