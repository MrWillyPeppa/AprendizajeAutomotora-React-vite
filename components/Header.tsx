
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg shadow-brand-red/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-3xl font-black tracking-tighter text-white hover:text-brand-red transition-colors">
            New<span className="text-brand-red">Kar</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#vehicles" className="text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-brand-red transition-colors">Vehículos</a>
            <a href="#about" className="text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-brand-red transition-colors">Nosotros</a>
            <a href="#testimonials" className="text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-brand-red transition-colors">Clientes</a>
          </nav>
          <a href="#footer" className="hidden md:inline-block bg-brand-red text-white font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-sm hover:bg-white hover:text-brand-red transition-all transform hover:scale-105">
            Contacto
          </a>
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
