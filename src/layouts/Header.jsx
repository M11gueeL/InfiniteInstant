import React from 'react';

const Header = () => {
  
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-gray-900 sm:text-xl font-bold hover:text-purple-600 transition duration-300">Infinite Instant</h1>   
      </div>
    </header>
  );
};

export default Header;