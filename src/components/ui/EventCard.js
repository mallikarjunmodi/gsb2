'use client'
import Image from 'next/image';
import { Calendar, MapPin, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function EventCard({ event }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const formattedDate = new Date(event?.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % event?.images?.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + event?.images?.length) % event?.images?.length);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
       { event?.images?.[currentImageIndex] ? <Image
          src={event?.images[currentImageIndex]}
          alt={`${event?.title} - Image ${currentImageIndex + 1}`}
          fill
          className="object-cover bg-gray-100"
        /> : <div className="h-48 w-full bg-gray-100"></div>}
        {event?.images?.length > 1 && (
          <>
            <button
              onClick={previousImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {event.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-6">
        { event?.category && <div className="flex items-center gap-2 mb-2">
          <Tag className="w-4 h-4 text-blue-600" />
          <span className="text-sm text-blue-600">{event?.category}</span>
        </div>}
        { event?.title && <h3 className="text-xl font-semibold mb-2">{event?.title}</h3>}
         <div className="space-y-2 mb-4">
          { event?.date && <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{formattedDate}</span>
          </div>}
          { event?.location && <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{event?.location}</span>
          </div>}
        </div>
        { event?.description && <p className="text-gray-600 mb-4">{event?.description}</p>}
        
        { event?.highlights && <div className="space-y-2">
          <h4 className="font-semibold text-gray-800">Event Highlights:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {event?.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>}
      </div>
    </div>
  );
} 