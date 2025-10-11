import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Proprietária Residencial",
    text: "Trabalho impecável! A bancada da minha cozinha ficou sensacional. Equipe profissional e pontual.",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Arquiteto",
    text: "Parceria de confiança para todos os meus projetos comerciais. Qualidade excepcional e prazos respeitados.",
    rating: 5,
  },
  {
    name: "Ana Paula Costa",
    role: "Designer de Interiores",
    text: "A Dimar transformou o banheiro do meu cliente em uma verdadeira obra de arte. Recomendo sem dúvidas!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold text-primary mb-6 uppercase tracking-tight">
            O Que Dizem Nossos Clientes
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-elegant transition-all duration-300 bg-card">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-['Montserrat'] text-stone italic mb-6 leading-relaxed font-medium">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-['Montserrat'] font-bold text-primary">
                    {testimonial.name}
                  </p>
                  <p className="font-['Montserrat'] text-sm text-stone-light font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
