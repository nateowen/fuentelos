"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const servingImages = [
  "/images/serving-suggestions/Assorted Hummus.jpg",
  "/images/serving-suggestions/Assorted Tapas.jpg",
  "/images/serving-suggestions/Charcuterie.jpg",
  "/images/serving-suggestions/Cheese.jpg",
  "/images/serving-suggestions/Cheeses.jpg",
  "/images/serving-suggestions/Citrus.jpg",
  "/images/serving-suggestions/Fruits.jpg",
  "/images/serving-suggestions/Ice Cream.jpg",
  "/images/serving-suggestions/Mozzarella.jpg",
  "/images/serving-suggestions/Pizza.jpg",
  "/images/serving-suggestions/Prawns.jpg",
  "/images/serving-suggestions/Pretzels and Grapes.jpg",
  "/images/serving-suggestions/Red Velvet.jpg",
  "/images/serving-suggestions/Salmon.jpg",
  "/images/serving-suggestions/Sardine.jpg",
  "/images/serving-suggestions/Scallop.jpg",
];

export default function ServingSuggestionsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % servingImages.length);
    }, 4500); // Change image every 4.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-neutral">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-fisterra text-blue mb-4">
          PERFECT PAIRINGS
        </h2>
        <p className="text-center text-blue/90 text-base mb-12 max-w-2xl mx-auto">
          Discover the perfect accompaniments for your Fuentelo&apos;s experience. 
          From artisanal cheeses to fresh fruits, these pairings enhance every sip.
        </p>
        
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="flex transition-transform duration-1000 ease-in-out"
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {servingImages.map((image, index) => (
              <div key={index} className="min-w-full flex-shrink-0">
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
                  <Image
                    src={image}
                    alt={`Serving suggestion ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1200px"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {servingImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-neutral scale-110' 
                    : 'bg-neutral/50 hover:bg-neutral/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Previous/Next Buttons */}
          <button
            onClick={() => setCurrentIndex((prev) => 
              prev === 0 ? servingImages.length - 1 : prev - 1
            )}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-neutral/80 hover:bg-neutral text-blue p-2 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={() => setCurrentIndex((prev) => 
              (prev + 1) % servingImages.length
            )}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-neutral/80 hover:bg-neutral text-blue p-2 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 