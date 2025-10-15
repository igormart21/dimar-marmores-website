import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Shield, Truck, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Materiais selecionados e acabamento impecável garantindo durabilidade e beleza excepcionais.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Clock,
    title: "Entrega Rápida",
    description: "Prazos cumpridos com eficiência, respeitando o cronograma do seu projeto.",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Shield,
    title: "Garantia Total",
    description: "Garantia estendida em todos os nossos produtos e serviços para sua tranquilidade.",
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    icon: Truck,
    title: "Instalação Completa",
    description: "Serviço completo de instalação com equipe especializada e equipamentos modernos.",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Consultoria especializada para encontrar a solução perfeita para seu projeto.",
    color: "text-pink-500",
    bgColor: "bg-pink-50",
  },
  {
    icon: Zap,
    title: "Melhor Preço da Região",
    description: "Preços competitivos sem comprometer a qualidade dos materiais e serviços.",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold text-primary mb-6 uppercase tracking-tight">
            POR QUE ESCOLHER A DI MÁRMORES?
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-4" />
          <p className="font-['Montserrat'] text-xl text-stone max-w-3xl mx-auto font-medium">
            Nossos diferenciais que fazem a diferença no seu projeto
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <feature.icon className={`w-10 h-10 ${feature.color}`} />
                </div>
                <h3 className="font-['Montserrat'] text-2xl font-bold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="font-['Montserrat'] text-stone leading-relaxed font-medium">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
