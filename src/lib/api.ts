
import { toast } from "sonner";
import { fetchCountryByName } from "./countriesAPI";

// Define interface for destination data
export interface DestinationData {
  name: string;
  heroImage: string;
  description: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  bestTimeToVisit: {
    season: string;
    months: string;
    temperature: string;
    rainfall: string;
  }[];
  events: {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    season: string;
  }[];
  // New fields from REST Countries API
  capital?: string[];
  region?: string;
  subregion?: string;
  population?: number;
  languages?: Record<string, string>;
  currencies?: Record<string, {
    name: string;
    symbol: string;
  }>;
  flags?: {
    png: string;
    svg: string;
    alt?: string;
  };
  borders?: string[];
}

// Unsplash API for images
const fetchUnsplashImage = async (query: string): Promise<string> => {
  try {
    // Note: In a real app, you would use your Unsplash API key
    // For now, we'll return placeholder images based on the query
    // This simulates the Unsplash API response
    const response = await fetch(`https://source.unsplash.com/1600x900/?${encodeURIComponent(query)}`);
    return response.url;
  } catch (error) {
    console.error("Error fetching image:", error);
    return "https://images.unsplash.com/photo-1488085061387-422e29b40080";
  }
};

// Wikipedia API for description
const fetchWikipediaDescription = async (query: string): Promise<string> => {
  try {
    // Wikipedia API endpoint
    const endpoint = "https://en.wikipedia.org/api/rest_v1/page/summary/";
    const response = await fetch(`${endpoint}${encodeURIComponent(query)}`);
    const data = await response.json();
    
    if (data.extract) {
      return data.extract;
    }
    throw new Error("No Wikipedia data found");
  } catch (error) {
    console.error("Error fetching Wikipedia data:", error);
    return `${query} is a beautiful destination waiting to be explored. Discover its unique charm and attractions.`;
  }
};

// Simulated geocoding API (in a real app, you'd use OpenCage or similar)
const fetchGeocodingData = async (query: string): Promise<{latitude: number, longitude: number}> => {
  try {
    // This is a simulation - in a real app, you'd make an API call to OpenCage or similar
    // For demo purposes, we'll return mock coordinates for common destinations
    const mockCoordinates: Record<string, {latitude: number, longitude: number}> = {
      "paris": { latitude: 48.8566, longitude: 2.3522 },
      "tokyo": { latitude: 35.6762, longitude: 139.6503 },
      "new york": { latitude: 40.7128, longitude: -74.0060 },
      "london": { latitude: 51.5074, longitude: -0.1278 },
      "sydney": { latitude: -33.8688, longitude: 151.2093 },
      "rome": { latitude: 41.9028, longitude: 12.4964 },
      "cairo": { latitude: 30.0444, longitude: 31.2357 },
      "rio de janeiro": { latitude: -22.9068, longitude: -43.1729 },
      "bangkok": { latitude: 13.7563, longitude: 100.5018 },
      "bali": { latitude: -8.3405, longitude: 115.0920 },
    };
    
    const key = query.toLowerCase();
    
    if (mockCoordinates[key]) {
      return mockCoordinates[key];
    }
    
    // If not found in our mock data, generate some random coordinates
    return {
      latitude: Math.random() * 180 - 90, // -90 to 90
      longitude: Math.random() * 360 - 180, // -180 to 180
    };
  } catch (error) {
    console.error("Error with geocoding:", error);
    // Default coordinates (middle of the Atlantic Ocean)
    return { latitude: 0, longitude: 0 };
  }
};

// Generate best time to visit based on coordinates
const generateBestTimeToVisit = (name: string, latitude: number): {
  season: string;
  months: string;
  temperature: string;
  rainfall: string;
}[] => {
  // Northern hemisphere
  if (latitude > 0) {
    return [
      {
        season: "Spring",
        months: "April to June",
        temperature: "15°C to 25°C (59°F to 77°F)",
        rainfall: "Low to moderate"
      },
      {
        season: "Fall",
        months: "September to November",
        temperature: "15°C to 25°C (59°F to 77°F)",
        rainfall: "Low to moderate"
      }
    ];
  } 
  // Southern hemisphere
  else if (latitude < 0) {
    return [
      {
        season: "Spring",
        months: "September to November",
        temperature: "15°C to 25°C (59°F to 77°F)",
        rainfall: "Low to moderate"
      },
      {
        season: "Fall",
        months: "March to May",
        temperature: "15°C to 25°C (59°F to 77°F)",
        rainfall: "Low to moderate"
      }
    ];
  }
  // Equatorial region
  else {
    return [
      {
        season: "Dry Season",
        months: "January to March",
        temperature: "25°C to 30°C (77°F to 86°F)",
        rainfall: "Low"
      },
      {
        season: "Cool Season",
        months: "July to September",
        temperature: "20°C to 28°C (68°F to 82°F)",
        rainfall: "Moderate"
      }
    ];
  }
};

// Generate mock events and excursions data
const generateMockEvents = (name: string, bestTimes: {season: string}[]): any[] => {
  const seasons = ["Spring", "Summer", "Fall", "Winter", "Dry Season", "Wet Season", "Cool Season"];
  const eventTypes = [
    "Walking Tour",
    "Food Tasting",
    "Historical Tour",
    "Adventure Expedition",
    "Cultural Experience",
    "Museum Visit",
    "Nature Excursion",
    "Boat Tour",
    "Cooking Class",
    "Photography Tour"
  ];
  
  const events = [];
  
  // Generate 6 events
  for (let i = 0; i < 6; i++) {
    // Choose a season, prioritizing recommended seasons
    const season = bestTimes.length > 0 && i < bestTimes.length * 2
      ? bestTimes[i % bestTimes.length].season
      : seasons[Math.floor(Math.random() * seasons.length)];
    
    // Choose an event type
    const eventType = eventTypes[Math.floor(Math.random() * eventTypes.length)];
    
    // Generate a price between $20 and $200
    const price = Math.floor(Math.random() * 181) + 20;
    
    events.push({
      id: i + 1,
      title: `${name} ${eventType}`,
      description: `Experience the best of ${name} with this amazing ${eventType.toLowerCase()}.`,
      image: `https://source.unsplash.com/600x400/?${encodeURIComponent(name + ' ' + eventType.split(' ')[0])}`,
      price,
      season
    });
  }
  
  return events;
};

// Main function to fetch all destination data
export const fetchDestinationData = async (name: string): Promise<DestinationData> => {
  try {
    // Step 1: Fetch country data from REST Countries API
    const countryData = await fetchCountryByName(name);
    
    if (!countryData) {
      throw new Error(`Country data not found for ${name}`);
    }
    
    // Step 2: Fetch the unsplash image for the hero
    const heroImage = countryData.flags?.svg || 
                      await fetchUnsplashImage(`${name} landmark`);
    
    // Step 3: Create description from country data
    const description = `${name} is a country located in ${countryData.subregion || countryData.region}. 
    The capital city is ${countryData.capital?.join(', ') || 'unknown'} and it has a population of 
    ${countryData.population?.toLocaleString() || 'unknown'} people. 
    ${Object.keys(countryData.languages || {}).length > 0 
      ? `The spoken language(s) include ${Object.values(countryData.languages || {}).join(', ')}.` 
      : ''}`;
    
    // Step 4: Get coordinates from country data
    const coordinates = {
      latitude: countryData.latlng[0],
      longitude: countryData.latlng[1]
    };
    
    // Step 5: Generate best time to visit based on coordinates
    const bestTimeToVisit = generateBestTimeToVisit(name, coordinates.latitude);
    
    // Step 6: Generate mock events based on destination and best times
    const events = generateMockEvents(name, bestTimeToVisit);
    
    // Return the combined destination data
    return {
      name,
      heroImage,
      description,
      coordinates,
      bestTimeToVisit,
      events,
      // Add new fields from REST Countries API
      capital: countryData.capital,
      region: countryData.region,
      subregion: countryData.subregion,
      population: countryData.population,
      languages: countryData.languages,
      currencies: countryData.currencies,
      flags: countryData.flags,
      borders: countryData.borders
    };
  } catch (error) {
    console.error("Error fetching destination data:", error);
    toast.error(`Failed to load information for ${name}`);
    throw error;
  }
};
