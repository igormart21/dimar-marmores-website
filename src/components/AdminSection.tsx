const AdminSection = () => {
  return (
    <section className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Conheça o Administrador
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Por trás da Di Mármores está Dimar, um profissional dedicado com anos de experiência 
            no mercado de mármores e granitos, sempre comprometido com a excelência e satisfação dos clientes.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Foto do administrador */}
              <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 p-12 flex items-center justify-center">
                <div className="relative">
                  {/* Moldura redonda com efeito de sombra */}
                  <div className="w-80 h-80 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full p-2 shadow-2xl">
                      <div className="w-full h-full bg-white rounded-full p-2 shadow-inner">
                        <img 
                          src="/src/assets/dimar-admin.png" 
                          alt="Dimar - Administrador da Di Mármores"
                          className="w-full h-full object-cover rounded-full shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Informações do administrador */}
              <div className="p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-primary mb-4 uppercase tracking-wide">
                    Dimar
                  </h3>
                  <p className="text-xl text-accent font-semibold mb-6">
                    Administrador e Fundador
                  </p>
                  <p className="text-lg text-stone-600 leading-relaxed mb-6">
                    Com mais de uma década de experiência no mercado de mármores e granitos, 
                    Dimar é o responsável por transformar a Di Mármores em uma referência 
                    de qualidade e confiança na região.
                  </p>
                  <p className="text-base text-stone-500 leading-relaxed">
                    Sua paixão pela excelência e atenção aos detalhes garantem que cada projeto 
                    seja executado com o mais alto padrão de qualidade, sempre priorizando 
                    a satisfação e confiança dos clientes.
                  </p>
                </div>

                {/* Citação */}
                <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border-l-4 border-accent">
                  <p className="text-lg text-stone-700 italic leading-relaxed">
                    "Nossa missão é transformar sonhos em realidade através da beleza 
                    e durabilidade dos mármores e granitos, sempre com excelência e transparência."
                  </p>
                  <p className="text-sm text-stone-500 mt-3 font-semibold">
                    — Dimar, Fundador da Di Mármores
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminSection;