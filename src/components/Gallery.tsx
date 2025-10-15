// Imports removidos - não são mais necessários
// import bathroomImg from "@/assets/project-bathroom.jpg";
// import stairsImg from "@/assets/project-stairs.jpg";
// import facadeImg from "@/assets/project-facade.jpg";
// import kitchenImg from "@/assets/project-kitchen.jpg";
// import officeImg from "@/assets/project-office.jpg";
// import fireplaceImg from "@/assets/project-fireplace.jpg";

// Imagens do Banheiro Premium
import bathroomPremium1 from "@/assets/bathroom-premium-1.jpg";
import bathroomPremium2 from "@/assets/bathroom-premium-2.jpg";
import bathroomPremium3 from "@/assets/bathroom-premium-3.jpg";
import bathroomPremium4 from "@/assets/bathroom-premium-4.jpg";
import bathroomPremium5 from "@/assets/bathroom-premium-5.jpg";
import bathroomPremium6 from "@/assets/bathroom-premium-6.jpg";
import bathroomPremium7 from "@/assets/bathroom-premium-7.jpg";
import bathroomPremium8 from "@/assets/bathroom-premium-8.jpg";
import bathroomPremium9 from "@/assets/bathroom-premium-9.jpg";
import bathroomPremium10 from "@/assets/bathroom-premium-10.jpg";
import bathroomPremium11 from "@/assets/bathroom-premium-11.jpg";

// Imagens da Cozinha Gourmet
import kitchenGourmet1 from "@/assets/kitchen-gourmet-1.jpg";
import kitchenGourmet2 from "@/assets/kitchen-gourmet-2.jpg";
import kitchenGourmet3 from "@/assets/kitchen-gourmet-3.jpg";
import kitchenGourmet4 from "@/assets/kitchen-gourmet-4.jpg";
import kitchenGourmet5 from "@/assets/kitchen-gourmet-5.jpg";
import kitchenGourmet6 from "@/assets/kitchen-gourmet-6.jpg";
import kitchenGourmet7 from "@/assets/kitchen-gourmet-7.jpg";
import kitchenGourmet8 from "@/assets/kitchen-gourmet-8.jpg";
import kitchenGourmet9 from "@/assets/kitchen-gourmet-9.jpg";
import kitchenGourmet10 from "@/assets/kitchen-gourmet-10.jpg";
import kitchenGourmet11 from "@/assets/kitchen-gourmet-11.jpg";

// Imagens de BANCADAS
import bancadas1 from "@/assets/bancadas-1.jpg";
import bancadas2 from "@/assets/bancadas-2.jpg";

// Imagens de PISCINAS
import piscinas1 from "@/assets/piscinas-1.jpg";

// Imagens de PERSONALIZADOS
import personalizados1 from "@/assets/personalizados-1.jpg";

// Imagens de TÚMULOS
import tumulos1 from "@/assets/tumulos-1.jpg";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

// Imagens do carrossel do Banheiro Premium
const bathroomPremiumImages = [
  bathroomPremium1,
  bathroomPremium2,
  bathroomPremium3,
  bathroomPremium4,
  bathroomPremium5,
  bathroomPremium6,
  bathroomPremium7,
  bathroomPremium8,
  bathroomPremium9,
  bathroomPremium10,
  bathroomPremium11,
];

// Imagens do carrossel da Cozinha Gourmet
const kitchenGourmetImages = [
  kitchenGourmet1,
  kitchenGourmet2,
  kitchenGourmet3,
  kitchenGourmet4,
  kitchenGourmet5,
  kitchenGourmet6,
  kitchenGourmet7,
  kitchenGourmet8,
  kitchenGourmet9,
  kitchenGourmet10,
  kitchenGourmet11,
];

// Imagens do carrossel de BANCADAS
const bancadasImages = [
  bancadas1,
  bancadas2,
];

// Imagens do carrossel de PISCINAS
const piscinasImages = [
  piscinas1,
];

// Imagens do carrossel de PERSONALIZADOS
const personalizadosImages = [
  personalizados1,
];

// Imagens do carrossel de TÚMULOS
const tumulosImages = [
  tumulos1,
];

const projects = [
  { 
    type: "carousel", 
    title: "Banheiro Premium", 
    images: bathroomPremiumImages 
  },
  { 
    type: "carousel", 
    title: "Cozinha Gourmet", 
    images: kitchenGourmetImages 
  },
  { 
    type: "carousel", 
    title: "BANCADAS", 
    images: bancadasImages 
  },
  { 
    type: "carousel", 
    title: "PISCINAS", 
    images: piscinasImages 
  },
  { 
    type: "carousel", 
    title: "PERSONALIZADOS", 
    images: personalizadosImages 
  },
  { 
    type: "carousel", 
    title: "TÚMULOS", 
    images: tumulosImages 
  },
];

// Componente de carrossel com auto-scroll
const AutoScrollCarousel = ({ images, title }: { images: string[], title: string }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!api) return;

    let autoplay: NodeJS.Timeout;

    const startAutoplay = () => {
      if (isPlaying) {
        autoplay = setInterval(() => {
          api.scrollNext();
        }, 3000);
      }
    };

    const stopAutoplay = () => {
      clearInterval(autoplay);
    };

    startAutoplay();

    const handlePointerDown = () => {
      stopAutoplay();
      setIsPlaying(false);
    };

    const handlePointerUp = () => {
      setIsPlaying(true);
    };

    api.on("pointerDown", handlePointerDown);
    api.on("pointerUp", handlePointerUp);

    return () => {
      clearInterval(autoplay);
      api.off("pointerDown", handlePointerDown);
      api.off("pointerUp", handlePointerUp);
    };
  }, [api, isPlaying]);

  return (
    <div className="relative overflow-hidden rounded-lg shadow-card-hover hover:shadow-elegant transition-all duration-300">
      {/* Título acima do carrossel */}
      <div className="absolute top-4 left-4 z-10">
        <h3 className="font-['Montserrat'] text-xl font-bold text-white uppercase tracking-wide bg-black/50 px-3 py-1 rounded-md backdrop-blur-sm">
          {title}
        </h3>
      </div>
      
      <Carousel 
        className="w-full" 
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, imgIndex) => (
            <CarouselItem key={imgIndex}>
              <div className="relative">
                <img 
                  src={image} 
                  alt={`${title} - Imagem ${imgIndex + 1}`}
                  className="w-full h-80 object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-white/80 hover:bg-white text-gray-800 border-gray-300" />
        <CarouselNext className="right-2 bg-white/80 hover:bg-white text-gray-800 border-gray-300" />
      </Carousel>
    </div>
  );
};

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
            <div key={index}>
              {project.type === "carousel" ? (
                <AutoScrollCarousel 
                  images={project.images} 
                  title={project.title} 
                />
              ) : (
                <div className="group relative overflow-hidden rounded-lg shadow-card-hover hover:shadow-elegant transition-all duration-300">
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
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
