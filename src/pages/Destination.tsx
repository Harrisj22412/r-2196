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
import ImageUploader from "@/components/travel/ImageUploader";
import { fetchDestinationData, callImageAnalysisAPI } from "@/lib/api";

const Destination = () => {
  const { name } = useParams<{ name: string }>();
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
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

  const handleImageAnalysis = async (imageUrl: string) => {
    setIsAnalyzing(true);
    try {
      const result = await callImageAnalysisAPI(imageUrl, name || "Unknown destination");
      setAiSuggestions(result.suggestions);
      toast.success("Image analyzed successfully!");
    } catch (error) {
      console.error("Error analyzing image:", error);
      toast.error("Failed to analyze image. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

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
        image={data.heroImage} 
      />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <AboutSection description={data.description} />
        <BestTimeToVisit 
          name={data.name}
          bestTimes={data.bestTimeToVisit} 
        />
        <ImageUploader 
          onImageAnalyzed={handleImageAnalysis} 
          isAnalyzing={isAnalyzing}
          destination={data.name}
        />
        {aiSuggestions.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-display mb-4">AI-Suggested Excursions</h2>
            <div className="space-y-3">
              {aiSuggestions.map((suggestion, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
                  <p className="text-gray-800">{suggestion}</p>
                </div>
              ))}
            </div>
          </div>
        )}
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
