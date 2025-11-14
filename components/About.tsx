
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 animate-fade-in-up">
          <img 
            src="https://picsum.photos/seed/about/800/700" 
            alt="Interior de automotora NewKar"
            className="rounded-lg shadow-2xl shadow-brand-red/10"
          />
        </div>
        <div className="md:w-1/2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
            Más que autos, <span className="text-brand-red">Máquinas</span>
          </h2>
          <p className="mt-6 text-gray-400 leading-relaxed">
            En NewKar, no solo vendemos autos. Curamos una colección de máquinas que representan la cima de la ingeniería, el diseño y la pura emoción de conducir. Nuestra filosofía es simple: si no nos acelera el pulso, no está en nuestro showroom.
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Creemos en un futuro audaz, donde cada vehículo es una declaración de intenciones. Te invitamos a ser parte de esta revolución sobre ruedas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
