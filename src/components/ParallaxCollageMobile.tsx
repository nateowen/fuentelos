'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface ParallaxImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  speed: number;
  className?: string;
}

const ParallaxCollageMobile = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const images: ParallaxImage[] = [
    {
      src: "/images/hero-slideshow/Beach.jpeg",
      alt: "Beach",
      width: 120,
      height: 90,
      speed: 0.15,
      className: "absolute top-60 left-2 shadow-lg"
    },
    {
      src: "/images/hero-slideshow/Cheers.JPG",
      alt: "Cheers",
      width: 100,
      height: 75,
      speed: 0.25,
      className: "absolute bottom-30 left-2 shadow-lg"
    },
    {
      src: "/images/hero-slideshow/dancing.jpeg",
      alt: "Dancing",
      width: 140,
      height: 60,
      speed: 0.2,
      className: "absolute top-65 right-2 shadow-lg"
    },
    {
      src: "/images/hero-slideshow/Characters.jpeg",
      alt: "Characters",
      width: 110,
      height: 85,
      speed: 0.3,
      className: "absolute bottom-60 right-2 shadow-lg"
    },
    {
      src: "/images/hero-slideshow/Graduation.jpg",
      alt: "Graduation",
      width: 130,
      height: 95,
      speed: 0.35,
      className: "absolute top-130 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg"
    },
    {
      src: "/images/hero-slideshow/kids.jpeg",
      alt: "Kids",
      width: 160,
      height: 110,
      speed: 0.4,
      className: "absolute bottom-25 right-5 shadow-lg"
    },
    {
      src: "/images/hero-slideshow/People by Pool.jpg",
      alt: "People by Pool",
      width: 150,
      height: 110,
      speed: 0.25,
      className: "absolute bottom-5 left-15 shadow-lg"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrolled = window.pageYOffset;
      const images = containerRef.current.querySelectorAll('.parallax-image');
      
      images.forEach((img, index) => {
        const speed = images[index].getAttribute('data-speed');
        if (speed) {
          const yPos = -(scrolled * parseFloat(speed));
          (img as HTMLElement).style.transform = `translateY(${yPos}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`parallax-image rounded-xl ${image.className}`}
          data-speed={image.speed}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="object-cover rounded-xl shadow-lg transition-transform w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default ParallaxCollageMobile; 