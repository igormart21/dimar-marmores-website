import { Card, CardContent } from "@/components/ui/card";
import { Home, Layers, Building2, Scissors } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Bancadas em Mármore e Granito",
    description: "Bancadas de cozinha e banheiro em mármores e granitos premium com acabamento impecável e durabilidade excepcional.",
  },
  {
    icon: Layers,
    title: "Escadas e Soleiras",
    description: "Revestimento de escadas e soleiras em mármore e granito, garantindo elegância e resistência ao desgaste.",
  },
  {
    icon: Building2,
    title: "Revestimentos e Fachadas",
    description: "Fachadas comerciais e residenciais em granito e mármore, oferecendo beleza e proteção duradoura.",
  },
  {
    icon: Scissors,
    title: "Corte e Acabamento em Mármore",
    description: "Serviço especializado de corte, polimento e instalação de mármores e granitos sob medida para seu projeto.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold text-primary mb-6 uppercase tracking-tight">
            Serviços em Mármores e Granitos
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-['Montserrat'] text-xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="font-['Montserrat'] text-stone leading-relaxed font-medium">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
