
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PropertyGrid from "@/components/PropertyGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, MapPin, Home, BadgeDollarSign } from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const Properties = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-5xl font-display text-estate-800 mb-6">Our Properties</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Discover our curated collection of luxury properties in the most desirable locations.
          </p>
          
          {/* Search/Filter Section */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input placeholder="Search properties..." className="pl-10" />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input placeholder="Location" className="pl-10" />
            </div>
            <div className="relative">
              <Home className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input placeholder="Property type" className="pl-10" />
            </div>
            <div className="relative">
              <BadgeDollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input placeholder="Price range" className="pl-10" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Property Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-600">Showing 8 properties</p>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select className="text-sm border rounded-md p-1">
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
          
          <PropertyGrid />
          
          {/* Pagination */}
          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Properties;
