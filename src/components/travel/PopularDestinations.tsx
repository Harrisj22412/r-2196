
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const destinations = [
  {
    id: 1,
    name: "Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1973",
    description: "The City of Light",
  },
  {
    id: 2,
    name: "Tokyo",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1974",
    description: "Where tradition meets innovation",
  },
  {
    id: 3,
    name: "New York",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070",
    description: "The city that never sleeps",
  },
  {
    id: 4,
    name: "Bali",
    image: "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=1925",
    description: "Island of the Gods",
  },
];

const PopularDestinations = () => {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-display text-center mb-12">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Link key={destination.id} to={`/destination/${destination.name}`}>
              <Card className="overflow-hidden h-full transform transition-transform hover:scale-105">
                <div 
                  className="h-52 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${destination.image})` }}
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                  <p className="text-gray-600">{destination.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
