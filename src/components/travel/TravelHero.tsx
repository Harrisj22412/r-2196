
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface TravelHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
}

const TravelHero = ({ searchQuery, setSearchQuery, handleSearch }: TravelHeroProps) => {
  return (
    <div className="relative min-h-[600px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1974')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 container mx-auto px-4 max-w-6xl py-24 mt-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-display text-white mb-6 leading-tight">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Explore the world's most beautiful destinations and create unforgettable memories
          </p>
          
          <form onSubmit={handleSearch} className="relative max-w-xl mx-auto">
            <Input
              type="text"
              placeholder="Search destinations..."
              className="pl-12 pr-6 py-6 w-full border-none text-lg rounded-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Button 
              type="submit" 
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-sky-600 hover:bg-sky-700"
            >
              Search
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TravelHero;
