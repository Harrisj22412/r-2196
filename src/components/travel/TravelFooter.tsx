
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const TravelFooter = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Travely</h3>
            <p className="text-gray-400 mb-4">
              Discover the world with us. We help you find the perfect destination for your next adventure.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><a href="#destinations" className="text-gray-400 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Destinations</h4>
            <ul className="space-y-2">
              <li><Link to="/destination/Paris" className="text-gray-400 hover:text-white transition-colors">Paris, France</Link></li>
              <li><Link to="/destination/Tokyo" className="text-gray-400 hover:text-white transition-colors">Tokyo, Japan</Link></li>
              <li><Link to="/destination/New York" className="text-gray-400 hover:text-white transition-colors">New York, USA</Link></li>
              <li><Link to="/destination/Bali" className="text-gray-400 hover:text-white transition-colors">Bali, Indonesia</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-sky-400" />
                <span className="text-gray-400">123 Travel Street, City</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-sky-400" />
                <span className="text-gray-400">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-sky-400" />
                <span className="text-gray-400">info@travely.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Travely. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default TravelFooter;
