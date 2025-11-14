
import React from 'react';
import { Testimonial } from '../types';

const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Javier Rodríguez',
    quote: 'La atención en NewKar fue de otro nivel. Encontraron exactamente la bestia que buscaba. ¡Totalmente recomendados!',
    avatarUrl: 'https://picsum.photos/seed/avatar1/100/100',
  },
  {
    id: 2,
    name: 'Valentina Soto',
    quote: 'El proceso fue transparente y muy profesional. Su catálogo es impresionante, puro poder y estilo. Feliz con mi nuevo auto.',
    avatarUrl: 'https://picsum.photos/seed/avatar2/100/100',
  },
  {
    id: 3,
    name: 'Matías González',
    quote: 'Si buscas algo único y con carácter, este es el lugar. La experiencia post-venta ha sido igual de buena. Un 10/10.',
    avatarUrl: 'https://picsum.photos/seed/avatar3/100/100',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">Nuestros <span className="text-brand-red">Pilotos</span></h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">La experiencia de quienes ya aceleran con NewKar.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_TESTIMONIALS.map((testimonial, index) => (
            <div key={testimonial.id} className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 border-2 border-brand-red" />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">Cliente Verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
