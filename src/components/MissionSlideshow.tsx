'use client';

import Image from 'next/image';

const MISSION_IMAGES = [
  {
    src: '/images/mission-slideshow/Celebrations.jpeg',
    title: 'Celebrations',
    description: 'Whether it\'s a birthday, a wedding toast, or a holiday dinner, our sparkling grape juice brings a festive sparkle to your special moments—without the alcohol. Raise a glass and savor the joy of celebration with everyone at the table, from kids to grandparents.'
  },
  {
    src: '/images/mission-slideshow/Gatherings.jpg',
    title: 'Gatherings',
    description: 'From backyard barbecues to Sunday brunches, our juice is made to be shared. It\'s a crowd-pleaser that fits in effortlessly at any get-together, making everyone feel included and welcome. No complicated choices—just something everyone can enjoy.'
  },
  {
    src: '/images/mission-slideshow/Relaxing.jpg',
    title: 'Relaxing',
    description: 'Whether you\'re lounging by the beach, watching the sunset from a cabin porch, or enjoying a quiet afternoon picnic in the park, our sparkling grape juice is the perfect companion. Refreshing and alcohol-free, it\'s a way to treat yourself while staying present in the beauty around you.'
  },
  {
    src: '/images/mission-slideshow/NightsIn.jpg',
    title: 'Nights In',
    description: 'Movie night, game night, or just a quiet evening on the couch—our sparkling juice turns a simple night in into something a little more special. Pop a bottle, pour it into your favorite glass, and make the everyday feel like an occasion.'
  },
];

export default function MissionSlideshow() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
        {MISSION_IMAGES.map((image, index) => (
          <div
            key={index}
            className="relative h-48 sm:h-56 md:h-80 overflow-hidden rounded-4xl shadow-xl"
          >
            <Image
              src={image.src}
              alt={`Mission image ${index + 1}`}
              fill
              className="object-cover"
              priority={index < 2}
            />
            {/* Title overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group">
              <div className="text-white font-fisterra text-xl sm:text-2xl md:text-4xl rounded-lg px-4 backdrop-blur-lg">
                {image.title}
              </div>
              {/* <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-md transition-opacity">
                <p className="text-white font-futura text-xs sm:text-sm md:text-lg text-center px-4 md:px-6 max-w-xs leading-relaxed">
                  {image.description}
                </p>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 