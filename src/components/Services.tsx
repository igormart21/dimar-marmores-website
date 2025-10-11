import { Card, CardContent } from "@/components/ui/card";
import { Home, Layers, Building2, Scissors } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Bancadas de Cozinha e Banheiro",
    description: "Superfícies premium em mármore e granito com acabamento impecável para cozinhas e banheiros sofisticados.",
  },
  {
    icon: Layers,
    title: "Escadas e Soleiras",
    description: "Revestimento de escadas e soleiras com materiais nobres, garantindo durabilidade e elegância.",
  },
  {
    icon: Building2,
    title: "Revestimentos e Fachadas",
    description: "Soluções completas para fachadas comerciais e residenciais com granito de alta resistência.",
  },
  {
    icon: Scissors,
    title: "Corte e Acabamento Sob Medida",
    description: "Serviço personalizado de corte, polimento e instalação adaptado às necessidades do seu projeto.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold text-primary mb-6 uppercase tracking-tight">
            Nossos Serviços
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
