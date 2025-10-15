import { MessageCircle } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.webp";

const FloatingWhatsApp = () => {
  const handleClick = () => {
    window.open("https://wa.me/5566984101627?text=Olá! Gostaria de solicitar um orçamento.", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-7 h-7" />
    </button>
  );
};

export default FloatingWhatsApp;
