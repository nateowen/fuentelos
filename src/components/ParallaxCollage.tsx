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

const ParallaxCollage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const images: ParallaxImage[] = [
    {
      src: "/images/hero-slideshow/Beach.jpeg",
      alt: "Beach",
      width: 200,
      height: 150,
      speed: 0.2,
      className: "absolute top-25 left-4 md:top-75 md:left-60 shadow-lg"
    },
    {
      src: "/images/hero-slideshow/Cheers.JPG",
      alt: "Cheers",
      width: 200,
      height: 150,
      speed: 0.35,
      className: "absolute bottom-4 left-4 md:bottom-10 md:left-20 shadow-lg"
    },
    {
      src: "/images/hero-slideshow/dancing.jpeg",
      alt: "Dancing",
      width: 250,
      height: 100,
      speed: 0.2,
      className: "absolute top-20 right-4 md:top-75 md:right-40 shadow-lg"
    },
    {
      src: "/images/hero-slideshow/Characters.jpeg",
      alt: "Characters",
      width: 200,
      height: 150,
      speed: 0.4,
      className: "absolute bottom-25 right-4 md:bottom-10 md:right-20 shadow-lg"
    },
    {
      src: "/images/hero-slideshow/Graduation.jpg",
      alt: "Graduation",
      width: 220,
      height: 160,
      speed: 0.45,
      className: "absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 md:top-1/2 shadow-lg"
    },
    {
      src: "/images/hero-slideshow/kids.jpeg",
      alt: "Kids",
      width: 300,
      height: 200,
      speed: 0.7,
      className: "absolute bottom-4 right-4 md:bottom-0 md:right-90 shadow-lg"
    },
    {
      src: "/images/hero-slideshow/People by Pool.jpg",
      alt: "People by Pool",
      width: 240,
      height: 180,
      speed: 0.5,
      className: "absolute bottom-20 left-4 md:bottom-15 md:left-90 shadow-lg"
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
          className={`parallax-image rounded-2xl ${image.className}`}
          data-speed={image.speed}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width/1.15}
            height={image.height/1.15}
            className="object-cover rounded-2xl shadow-lg w-24 h-18 md:w-auto md:h-auto hover:scale-150 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default ParallaxCollage; 