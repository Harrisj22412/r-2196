
interface BestTimeProps {
  name: string;
  bestTimes: {
    season: string;
    months: string;
    temperature: string;
    rainfall: string;
  }[];
}

const BestTimeToVisit = ({ name, bestTimes }: BestTimeProps) => {
  if (!bestTimes || bestTimes.length === 0) {
    return (
      <section className="py-10">
        <h2 className="text-3xl font-display mb-6">Best Time to Visit</h2>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <p className="text-lg text-gray-700">
            Information about the best time to visit {name} is currently unavailable.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10">
      <h2 className="text-3xl font-display mb-6">Best Time to Visit</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bestTimes.map((time, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-sky-600 text-white p-4">
              <h3 className="text-xl font-bold">{time.season}</h3>
              <p className="text-sm">{time.months}</p>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <p className="text-gray-700">
                  <span className="font-semibold">Temperature:</span> {time.temperature}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Rainfall:</span> {time.rainfall}
                </p>
              </div>
              <p className="text-gray-600 italic">
                Perfect for exploring the sights and enjoying outdoor activities.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestTimeToVisit;
