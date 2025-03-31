'use client';
import { events } from '@/cms/events';
import EventCard from '@/components/ui/EventCard';

export default function EventsPage() {

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Past Events</h1>
      {events.length === 0 ? (
        <p className="text-center text-gray-600">No past events to display.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
} 