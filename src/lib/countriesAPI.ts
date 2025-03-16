
// CountriesAPI.ts - Collection of functions for interacting with the REST Countries API

export interface Country {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  region: string;
  subregion: string;
  population: number;
  languages: Record<string, string>;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  currencies: Record<string, {
    name: string;
    symbol: string;
  }>;
  borders?: string[];
  latlng: number[];
}

/**
 * Fetches all countries from the REST Countries API
 */
export const fetchAllCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) {
      throw new Error(`Failed to fetch countries: ${response.status}`);
    }
    const data: Country[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching country data:', error);
    throw error;
  }
};

/**
 * Fetches a specific country by name
 */
export const fetchCountryByName = async (name: string): Promise<Country | null> => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(name)}`);
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch country: ${response.status}`);
    }
    const data: Country[] = await response.json();
    return data[0] || null;
  } catch (error) {
    console.error(`Error fetching country data for ${name}:`, error);
    throw error;
  }
};

/**
 * Fetches a list of countries by region
 */
export const fetchCountriesByRegion = async (region: string): Promise<Country[]> => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/region/${encodeURIComponent(region)}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch countries by region: ${response.status}`);
    }
    const data: Country[] = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching countries for region ${region}:`, error);
    throw error;
  }
};
