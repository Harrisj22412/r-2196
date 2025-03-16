
import { useState } from "react";
import { Menu, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const TravelNavbar = () => {
  return (
    <nav className="absolute w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-display text-sky-600">Travely</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-sky-600 transition-colors">Home</Link>
            <a href="#destinations" className="text-gray-700 hover:text-sky-600 transition-colors">Destinations</a>
            <a href="#about" className="text-gray-700 hover:text-sky-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-sky-600 transition-colors">Contact</a>
            <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white">
              Sign In
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <Link to="/" className="text-lg">Home</Link>
                  <a href="#destinations" className="text-lg">Destinations</a>
                  <a href="#about" className="text-lg">About</a>
                  <a href="#contact" className="text-lg">Contact</a>
                  <Button className="w-full border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white">Sign In</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TravelNavbar;
