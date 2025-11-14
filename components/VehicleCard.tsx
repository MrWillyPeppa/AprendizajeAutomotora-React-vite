
import React from 'react';
import { Vehicle } from '../types';
import { GasPump, Gauge, GitCommit } from './Icons';

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden group hover:border-brand-red transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-brand-red/20">
      <div className="relative overflow-hidden">
        <img src={vehicle.imageUrl} alt={`${vehicle.name} ${vehicle.model}`} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" />
        <div className="absolute top-4 left-4 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{vehicle.year}</div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white tracking-tight">{vehicle.name} <span className="text-brand-red">{vehicle.model}</span></h3>
        <p className="text-xl font-semibold text-gray-300 mt-2 mb-4">${vehicle.price.toLocaleString()}</p>
        
        <div className="grid grid-cols-3 gap-4 text-center border-t border-b border-gray-700 py-4 mb-6">
          <div className="flex flex-col items-center">
            <GasPump className="w-6 h-6 text-brand-red mb-1" />
            <span className="text-xs text-gray-400">Motor</span>
            <span className="text-sm font-semibold text-white">{vehicle.specs.engine}</span>
          </div>
          <div className="flex flex-col items-center">
            <GitCommit className="w-6 h-6 text-brand-red mb-1" />
            <span className="text-xs text-gray-400">Transmisión</span>
            <span className="text-sm font-semibold text-white">{vehicle.specs.transmission}</span>
          </div>
          <div className="flex flex-col items-center">
            <Gauge className="w-6 h-6 text-brand-red mb-1" />
            <span className="text-xs text-gray-400">Potencia</span>
            <span className="text-sm font-semibold text-white">{vehicle.specs.horsepower} HP</span>
          </div>
        </div>

        <button className="w-full bg-gray-800 text-white font-bold uppercase text-sm py-3 rounded-md hover:bg-brand-red transition-colors duration-300">
          Más Detalles
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;
