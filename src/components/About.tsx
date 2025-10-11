const About = () => {
  return (
    <section id="sobre" className="py-20 bg-marble-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold text-primary mb-6 uppercase tracking-tight">
            Sobre a DI Mármore & Granito
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="font-['Montserrat'] text-lg text-stone leading-relaxed mb-6 font-medium">
            Com mais de 10 anos de experiência no mercado, a DI Mármore & Granito se consolidou como referência em soluções 
            premium de mármore e granito com o melhor custo-benefício da região. Nossa missão é transformar ambientes com materiais nobres, 
            combinando qualidade superior e preços acessíveis.
          </p>
          <p className="font-['Montserrat'] text-lg text-stone leading-relaxed font-medium">
            Especializados em projetos residenciais e comerciais, oferecemos atendimento personalizado, 
            garantia de qualidade e compromisso com prazos. Cada projeto é único e recebe nossa total dedicação 
            para superar expectativas com o melhor preço da região.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
