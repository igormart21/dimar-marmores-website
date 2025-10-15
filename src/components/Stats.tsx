import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Award, Star } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    number: "10+",
    label: "Anos de Experiência",
    description: "No mercado de mármore e granito",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: Users,
    number: "500+",
    label: "Clientes Satisfeitos",
    description: "Projetos entregues com excelência",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: Award,
    number: "1000+",
    label: "Projetos Realizados",
    description: "Bancadas, escadas e revestimentos",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: Star,
    number: "5.0",
    label: "Avaliação Média",
    description: "Satisfação dos nossos clientes",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
            Números que Comprovam Nossa Excelência
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-4" />
          <p className="font-['Montserrat'] text-xl text-white/90 max-w-3xl mx-auto font-medium">
            Resultados que falam por si só
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/10 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-['Montserrat']">
                  {stat.number}
                </div>
                <h3 className="font-['Montserrat'] text-xl font-bold text-white mb-2">
                  {stat.label}
                </h3>
                <p className="font-['Montserrat'] text-white/80 font-medium">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
