
import { useEffect, useState } from "react";

interface DestinationHeroProps {
  name: string;
  image: string;
}

const DestinationHero = ({ name, image }: DestinationHeroProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  // For Paris, we'll use a specific image from Unsplash
  const parisImage = name.toLowerCase() === 'paris' 
    ? 'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&w=1400&q=80'
    : image;
    
  useEffect(() => {
    const img = new Image();
    img.onload = () => setIsImageLoaded(true);
    img.src = parisImage;
  }, [parisImage]);

  return (
    <div className="relative h-[500px] mt-16">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        style={{ 
          backgroundImage: `url(${parisImage})`,
          opacity: isImageLoaded ? 1 : 0
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      {!isImageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className="relative h-full flex items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-display text-white text-center px-4">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default DestinationHero;
