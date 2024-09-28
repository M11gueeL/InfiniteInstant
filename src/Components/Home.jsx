import React from 'react';
import ImageGallery from './ImageGallery';
import WelcomeComponent from './WelcomeComponent';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-indigo-600 pt-20">
      <WelcomeComponent />
      <ImageGallery />
    </div>
  );
};

export default Home;