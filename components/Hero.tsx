
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/carhero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase">
          Conduce el <span className="text-brand-red">Futuro</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
          Siente el poder. Descubre vehículos que redefinen la carretera con un estilo rudo e innovador.
        </p>
        <a 
          href="#vehicles" 
          className="mt-8 inline-block bg-brand-red text-white font-bold uppercase tracking-wider px-10 py-4 rounded-sm border-2 border-transparent hover:bg-transparent hover:border-brand-red transition-all duration-300 transform hover:scale-105"
        >
          Ver Inventario
        </a>
      </div>
    </section>
  );
};

export default Hero;
