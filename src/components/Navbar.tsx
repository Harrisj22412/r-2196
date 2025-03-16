
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute w-full z-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-display text-white">Elite Real Estate</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/properties" className="text-white hover:text-white/80 transition-colors">Properties</Link>
            <a href="#about" className="text-white hover:text-white/80 transition-colors">About</a>
            <a href="#testimonials" className="text-white hover:text-white/80 transition-colors">Testimonials</a>
            <a href="#contact" className="text-white hover:text-white/80 transition-colors">Contact</a>
            <Button variant="outline" className="text-black border-white bg-white hover:bg-white/90">
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <Link to="/properties" className="text-lg">Properties</Link>
                  <a href="#about" className="text-lg">About</a>
                  <a href="#testimonials" className="text-lg">Testimonials</a>
                  <a href="#contact" className="text-lg">Contact</a>
                  <Button className="w-full text-black bg-white hover:bg-white/90">Get Started</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
