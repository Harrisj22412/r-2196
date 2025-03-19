
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import UserMenu from "../UserMenu";

const TravelNavbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-teal-600">
            Viator
          </Link>
          
          <div className="relative w-full max-w-md mx-4 hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              className="pl-10 pr-4 py-2 rounded-full" 
              placeholder="Search destinations..." 
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <Link to="/auth">
                <Button variant="ghost">Sign In</Button>
              </Link>
            </div>
            <UserMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TravelNavbar;
