
interface DestinationHeroProps {
  name: string;
  image: string;
}

const DestinationHero = ({ name, image }: DestinationHeroProps) => {
  return (
    <div className="relative h-[500px] mt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative h-full flex items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-display text-white text-center px-4">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default DestinationHero;
