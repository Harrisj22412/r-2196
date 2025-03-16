
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import TravelNavbar from "@/components/travel/TravelNavbar";
import TravelFooter from "@/components/travel/TravelFooter";
import DestinationHero from "@/components/travel/DestinationHero";
import AboutSection from "@/components/travel/AboutSection";
import BestTimeToVisit from "@/components/travel/BestTimeToVisit";
import EventsExcursions from "@/components/travel/EventsExcursions";
import LoadingSpinner from "@/components/travel/LoadingSpinner";
import { fetchDestinationData } from "@/lib/api";

const Destination = () => {
  const { name } = useParams<{ name: string }>();
  
  const { data, isLoading, error } = useQuery({
    queryKey: ["destination", name],
    queryFn: () => fetchDestinationData(name || ""),
    enabled: !!name,
  });

  useEffect(() => {
    if (error) {
      toast.error("Failed to load destination data");
    }
  }, [error]);

  if (isLoading) return <LoadingSpinner />;

  if (!data || error) {
    return (
      <div className="min-h-screen flex flex-col">
        <TravelNavbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-3xl font-bold mb-4">Destination Not Found</h2>
            <p className="text-gray-600 mb-6">
              We couldn't find information about "{name}". Please try another destination.
            </p>
          </div>
        </div>
        <TravelFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <TravelNavbar />
      <DestinationHero 
        name={data.name} 
        image={data.flags?.svg || data.heroImage} 
      />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <AboutSection 
          description={data.description}
          capital={data.capital}
          region={data.region}
          subregion={data.subregion}
          population={data.population}
          languages={data.languages}
          currencies={data.currencies} 
        />
        <BestTimeToVisit 
          name={data.name}
          bestTimes={data.bestTimeToVisit} 
        />
        <EventsExcursions 
          events={data.events} 
          bestTimes={data.bestTimeToVisit} 
        />
      </div>
      <TravelFooter />
    </div>
  );
};

export default Destination;
