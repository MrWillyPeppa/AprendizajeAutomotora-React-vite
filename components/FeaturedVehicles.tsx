
import React from 'react';
import { Vehicle } from '../types';
import VehicleCard from './VehicleCard';
import { GasPump, Gauge, GitCommit } from './Icons';

const MOCK_VEHICLES: Vehicle[] = [
  {
    id: 1,
    name: 'Cyber Stallion',
    model: 'X2040',
    year: 2024,
    price: 85000,
    specs: { engine: 'Eléctrico Dual', transmission: 'Automática', horsepower: 670 },
    imageUrl: 'https://picsum.photos/seed/car1/800/600',
  },
  {
    id: 2,
    name: 'Apex Predator',
    model: 'GT-R',
    year: 2023,
    price: 120000,
    specs: { engine: 'V8 Twin-Turbo', transmission: 'Secuencial', horsepower: 720 },
    imageUrl: 'https://picsum.photos/seed/car2/800/600',
  },
  {
    id: 3,
    name: 'Urban Nomad',
    model: 'V-Class',
    year: 2024,
    price: 65000,
    specs: { engine: 'Híbrido 2.5L', transmission: 'Automática', horsepower: 300 },
    imageUrl: 'https://picsum.photos/seed/car3/800/600',
  },
    {
    id: 4,
    name: 'Nightshade',
    model: 'Spectre',
    year: 2023,
    price: 95000,
    specs: { engine: 'V6 Supercargado', transmission: 'Manual', horsepower: 450 },
    imageUrl: 'https://picsum.photos/seed/car4/800/600',
  },
];


const FeaturedVehicles: React.FC = () => {
  return (
    <section id="vehicles" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">Vehículos <span className="text-brand-red">Destacados</span></h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">Nuestro inventario seleccionado con lo último en diseño y potencia.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {MOCK_VEHICLES.map((vehicle, index) => (
                <div key={vehicle.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                    <VehicleCard vehicle={vehicle} />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;
