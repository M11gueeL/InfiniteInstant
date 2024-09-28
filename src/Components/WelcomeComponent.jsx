import React, { useState, useEffect } from 'react';

const WelcomeComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simula una carga de 2 segundos

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-4 animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 animate-slideDown">
          Bienvenido a <span className="text-yellow-300">Infinite Instant</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-8 animate-slideUp">
          Explora un universo infinito de imágenes cautivadoras
        </p>
        
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl animate-fadeIn transition-all duration-500 hover:bg-opacity-20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Descubre. Inspírate. Comparte.
          </h2>
          
          <p className="text-lg text-gray-200 mb-6">
            Infinite Instant es tu portal a una galería de imágenes diversa y en constante crecimiento. Desde paisajes impresionantes hasta arte abstracto, nuestra colección abarca todos los géneros imaginables.
          </p>
          
          <ul className="text-left text-gray-200 mb-8">
            {['Millones de imágenes de alta calidad', 'Categorías para todos los gustos e intereses', 'Actualización diaria con nuevo contenido'].map((item, index) => (
              <li key={index} className="mb-2 flex items-center animate-fadeInLeft" style={{animationDelay: `${index * 0.2}s`}}>
                <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          
          <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 animate-pulse">
            Comenzar a explorar
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;