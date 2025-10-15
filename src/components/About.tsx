import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Missão",
    description: "Transformar ambientes com materiais nobres, combinando qualidade superior e preços acessíveis.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: Eye,
    title: "Visão",
    description: "Ser reconhecida como a melhor empresa de mármore e granito da região, referência em qualidade e atendimento.",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: Heart,
    title: "Valores",
    description: "Qualidade, transparência, compromisso e satisfação do cliente são os pilares do nosso trabalho.",
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    icon: Users,
    title: "Compromisso",
    description: "Atendimento personalizado, instalação profissional e garantia total em todos os nossos produtos.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
];

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-slate-50 to-stone-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-16">
            <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold text-primary mb-6 uppercase tracking-tight">
              Sobre a Di Mármores
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
            <p className="font-['Montserrat'] text-xl text-stone leading-relaxed mb-6 font-medium max-w-4xl mx-auto">
              Com mais de 10 anos de experiência no mercado, a Di Mármores se consolidou como referência em mármores e granitos, 
              oferecendo soluções premium com o melhor custo-benefício da região. Trabalhamos com os melhores tipos de mármore e granito.
            </p>
            
            {/* História da empresa */}
            <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                Nossa História
              </h3>
              <p className="text-lg leading-relaxed text-stone-600 mb-4">
                <span className="font-semibold text-primary">2011 - Goiânia:</span> A Di Mármores nasceu em Goiânia, 
                iniciando sua jornada no mercado de mármores e granitos com a missão de oferecer qualidade e excelência.
              </p>
              <p className="text-lg leading-relaxed text-stone-600 mb-4">
                <span className="font-semibold text-primary">2016 - Porto Alegre do Norte:</span> Acreditando no potencial 
                da região, a Di Mármores se mudou para Porto Alegre do Norte, sendo a primeira marmoraria a se instalar na cidade, 
                trazendo inovação e qualidade para a região.
              </p>
              <p className="text-lg leading-relaxed text-stone-600">
                <span className="font-semibold text-primary">Hoje:</span> Consolidada como referência em mármores e granitos, 
                continuamos inovando e oferecendo o melhor custo-benefício da região, sempre com foco na satisfação dos nossos clientes.
              </p>
            </div>
          </div>

          {/* Valores da empresa */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <value.icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <h3 className="font-['Montserrat'] text-xl font-bold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="font-['Montserrat'] text-stone leading-relaxed font-medium text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Texto adicional */}
          <div className="text-center">
            <p className="font-['Montserrat'] text-lg text-stone leading-relaxed font-medium max-w-4xl mx-auto">
              Especializados em projetos residenciais e comerciais com mármores e granitos, oferecemos atendimento personalizado, 
              instalação profissional e garantia total em todos os nossos produtos e serviços em mármore e granito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;