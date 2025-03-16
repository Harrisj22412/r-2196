
interface AboutSectionProps {
  description: string;
  capital?: string[];
  region?: string;
  subregion?: string;
  population?: number;
  languages?: Record<string, string>;
  currencies?: Record<string, {
    name: string;
    symbol: string;
  }>;
}

const AboutSection = ({ 
  description, 
  capital, 
  region, 
  subregion, 
  population, 
  languages, 
  currencies 
}: AboutSectionProps) => {
  return (
    <section id="about" className="py-10">
      <h2 className="text-3xl font-display mb-6">About</h2>
      <div className="bg-white rounded-lg p-6 shadow-md">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {description || "Information about this destination is currently unavailable."}
        </p>
        
        {(capital || region || population || languages || currencies) && (
          <div className="mt-4 border-t pt-4">
            <h3 className="text-xl font-semibold mb-3">Country Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {capital && capital.length > 0 && (
                <div>
                  <span className="font-medium">Capital:</span> {capital.join(', ')}
                </div>
              )}
              
              {region && (
                <div>
                  <span className="font-medium">Region:</span> {region}
                  {subregion && ` (${subregion})`}
                </div>
              )}
              
              {population !== undefined && (
                <div>
                  <span className="font-medium">Population:</span> {population.toLocaleString()}
                </div>
              )}
              
              {languages && Object.keys(languages).length > 0 && (
                <div>
                  <span className="font-medium">Languages:</span> {Object.values(languages).join(', ')}
                </div>
              )}
              
              {currencies && Object.keys(currencies).length > 0 && (
                <div>
                  <span className="font-medium">Currencies:</span> {
                    Object.entries(currencies).map(([code, curr]) => 
                      `${curr.name} (${curr.symbol})`
                    ).join(', ')
                  }
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
