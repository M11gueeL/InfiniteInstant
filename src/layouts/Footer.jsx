import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-yellow-300 px-6 py-8">
      <section className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          <div className="mb-4 md:mb-0 max-w-md">
            <h1 className="text-3xl font-bold">Infinite Instant</h1>
            <p className="text-white text-1xl mt-2">
              Tu portal a una galería de imágenes diversa y en constante crecimiento. Desde paisajes impresionantes hasta arte abstracto, nuestra colección abarca todos los géneros imaginables.         
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-center">
            <h1 className="text-3xl font-bold mb-2">Social</h1>
            <ul className="flex space-x-4 text-xl text-white">
              <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
              <li><a href="#" ><i className="fa-brands fa-facebook"></i></a></li>
              <li><a href="#" ><i className="fa-brands fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12">
          <hr className="border-t border-white opacity-30 mb-4" />
          <div className="text-center">
            <p className="text-white text-sm">© Copyright 2024. Desarrollado por Miguelangel Monasterio</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
