
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  season: string;
}

interface EventsExcursionsProps {
  events: Event[];
  bestTimes: { season: string }[];
}

const EventsExcursions = ({ events, bestTimes }: EventsExcursionsProps) => {
  const recommendedSeasons = bestTimes.map(time => time.season);
  
  // Filter events by recommended seasons
  const recommendedEvents = events.filter(event => 
    recommendedSeasons.includes(event.season)
  );
  
  // Fallback to all events if no matches
  const displayEvents = recommendedEvents.length > 0 ? recommendedEvents : events;

  if (!displayEvents || displayEvents.length === 0) {
    return (
      <section className="py-10">
        <h2 className="text-3xl font-display mb-6">Events & Excursions</h2>
        <p className="text-lg text-gray-700">
          No events or excursions are currently available for this destination.
        </p>
      </section>
    );
  }

  return (
    <section className="py-10">
      <h2 className="text-3xl font-display mb-6">
        Events & Excursions 
        {recommendedSeasons.length > 0 && (
          <span className="text-lg font-normal text-gray-500 ml-2">
            recommended for {recommendedSeasons.join(' & ')}
          </span>
        )}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayEvents.map((event) => (
          <Card key={event.id} className="overflow-hidden h-full">
            <div 
              className="h-48 bg-cover bg-center" 
              style={{ backgroundImage: `url(${event.image})` }}
            />
            <CardHeader className="p-4 pb-0">
              <CardTitle className="text-xl">{event.title}</CardTitle>
              <div className="flex justify-between items-center mt-1">
                <span className="text-sky-600 font-bold">${event.price}</span>
                <span className="text-sm text-gray-500">{event.season}</span>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-2">
              <p className="text-gray-600">{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default EventsExcursions;
