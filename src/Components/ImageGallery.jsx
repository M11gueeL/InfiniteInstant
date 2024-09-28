import { imageData } from './imageData.js';

const ImageCard = ({ image }) => (
  <div className="bg-gray-100 md:rounded-lg shadow-md overflow-hidden">
    <img src={image.imageUrl} alt={image.nameImage} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{image.nameImage}</h2>
      <p className="text-gray-600 mb-2">{image.description}</p>
      <div className="text-sm text-gray-500">
        <p>Dimensiones: {image.width}x{image.height}</p>
        <p>Formato: {image.format}</p>
        <p>Tamaño: {image.size}</p>
      </div>
    </div>
  </div>
);

const ImageGallery = () => (
  <div className="container mx-auto md:px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
      {imageData.map(image => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  </div>
);

export default ImageGallery;