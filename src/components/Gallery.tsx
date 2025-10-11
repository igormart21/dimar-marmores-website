import bathroomImg from "@/assets/project-bathroom.jpg";
import stairsImg from "@/assets/project-stairs.jpg";
import facadeImg from "@/assets/project-facade.jpg";
import kitchenImg from "@/assets/project-kitchen.jpg";
import officeImg from "@/assets/project-office.jpg";
import fireplaceImg from "@/assets/project-fireplace.jpg";

const projects = [
  { image: bathroomImg, title: "Banheiro Premium" },
  { image: stairsImg, title: "Escadaria em Mármore" },
  { image: facadeImg, title: "Fachada Comercial" },
  { image: kitchenImg, title: "Cozinha Gourmet" },
  { image: officeImg, title: "Recepção Corporativa" },
  { image: fireplaceImg, title: "Lareira em Mármore" },
];

const Gallery = () => {
  return (
    <section id="projetos" className="py-20 bg-marble-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-['Montserrat'] text-4xl md:text-5xl font-bold text-primary mb-6 uppercase tracking-tight">
            Galeria de Projetos
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-card-hover hover:shadow-elegant transition-all duration-300"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="font-['Montserrat'] text-2xl font-bold text-primary-foreground uppercase tracking-wide">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
