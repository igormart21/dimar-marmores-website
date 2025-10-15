import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Ruler, Hammer, CheckCircle } from "lucide-react";

const processSteps = [
  {
    step: "01",
    icon: MessageCircle,
    title: "Consulta Inicial",
    description: "Conversamos sobre suas necessidades, preferências e orçamento para entender seu projeto.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    step: "02", 
    icon: Ruler,
    title: "Medição e Orçamento",
    description: "Fazemos a medição precisa do local e elaboramos um orçamento detalhado sem compromisso.",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    step: "03",
    icon: Hammer,
    title: "Fabricação e Instalação",
    description: "Fabricamos seu produto com precisão e realizamos a instalação com equipe especializada.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Entrega e Garantia",
    description: "Entregamos seu projeto pronto e oferecemos garantia completa para sua tranquilidade.",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold text-primary mb-6 uppercase tracking-tight">
            Como Funciona Nosso Processo
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-4" />
          <p className="font-['Montserrat'] text-xl text-stone max-w-3xl mx-auto font-medium">
            Da ideia ao resultado final, acompanhamos cada etapa do seu projeto
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Linha conectora */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-accent to-transparent z-0" />
              )}
              
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white relative z-10">
                <CardContent className="p-8 text-center">
                  {/* Número do passo */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Ícone */}
                  <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 mt-4`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  
                  {/* Conteúdo */}
                  <h3 className="font-['Montserrat'] text-xl font-bold text-primary mb-4">
                    {step.title}
                  </h3>
                  <p className="font-['Montserrat'] text-stone leading-relaxed font-medium">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
