
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TravelNavbar from "@/components/travel/TravelNavbar";
import TravelHero from "@/components/travel/TravelHero";
import TravelFooter from "@/components/travel/TravelFooter";
import PopularDestinations from "@/components/travel/PopularDestinations";

const TravelHome = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/destination/${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <TravelNavbar />
      <TravelHero 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        handleSearch={handleSearch} 
      />
      <PopularDestinations />
      <TravelFooter />
    </div>
  );
};

export default TravelHome;
