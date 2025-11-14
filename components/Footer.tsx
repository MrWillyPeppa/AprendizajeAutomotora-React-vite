
import React from 'react';
import { Facebook, Instagram, Twitter } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <a href="#" className="text-3xl font-black tracking-tighter text-white hover:text-brand-red transition-colors inline-block mb-4">
              New<span className="text-brand-red">Kar</span>
            </a>
            <p className="text-gray-400 text-sm">Innovación, potencia y un servicio que rompe esquemas. Únete a la nueva era del automovilismo.</p>
          </div>
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Av. Innovación 123, Santiago</li>
              <li>contacto@newkar.cl</li>
              <li>+56 9 1234 5678</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-4">Síguenos</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors"><Twitter className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} NewKar Automotora. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
