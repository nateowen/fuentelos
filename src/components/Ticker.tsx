"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/images/hero-slideshow/Cheers.JPG", alt: "Cheers" },
  { src: "/images/hero-slideshow/dancing.jpeg", alt: "Dancing" },
  { src: "/images/hero-slideshow/Graduation.jpg", alt: "Graduation" },
  { src: "/images/hero-slideshow/kids.jpeg", alt: "Kids" },
  { src: "/images/hero-slideshow/People by Pool.jpg", alt: "People by Pool" },
];

export default function Ticker() {
  const trackRef = useRef<HTMLDivElement>(null);
  const speed = 0.025; // px per ms

  useEffect(() => {
    let start: number | null = null;
    let frame: number;
    let x = 0;
    const animate = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      x = (elapsed * speed) % (trackRef.current?.scrollWidth ? trackRef.current.scrollWidth / 2 : 1);
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${x}px)`;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className="relative w-full h-[300px] md:h-[340px] max-w-4xl overflow-hidden flex items-center justify-center rounded-2xl"
    >
      <div
        ref={trackRef}
        className="flex items-center gap-32 ticker-track"
        style={{ willChange: "transform" }}
      >
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden min-w-[380px] h-[240px] md:min-w-[420px] md:h-[280px]"
            style={{ marginLeft: i % images.length === 0 ? 0 : -60, zIndex: 10 - (i % images.length) }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 90vw, 420px"
              priority={i < images.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
} 