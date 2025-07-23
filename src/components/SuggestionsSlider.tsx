"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const servingImages = [
  { src: "/images/serving-suggestions/Assorted Hummus.jpg", title: "Assorted Hummus" },
  { src: "/images/serving-suggestions/Assorted Tapas.jpg", title: "Assorted Tapas" },
  { src: "/images/serving-suggestions/Charcuterie.jpg", title: "Charcuterie" },
  { src: "/images/serving-suggestions/Cheese.jpg", title: "Cheese" },
  { src: "/images/serving-suggestions/Cheeses.jpg", title: "Cheeses" },
  { src: "/images/serving-suggestions/Citrus.jpg", title: "Citrus" },
  { src: "/images/serving-suggestions/Fruits.jpg", title: "Fruits" },
  { src: "/images/serving-suggestions/Ice Cream.jpg", title: "Ice Cream" },
  { src: "/images/serving-suggestions/Mozzarella.jpg", title: "Mozzarella" },
  { src: "/images/serving-suggestions/Pizza.jpg", title: "Pizza" },
  { src: "/images/serving-suggestions/Prawns.jpg", title: "Prawns" },
  { src: "/images/serving-suggestions/Pretzels and Grapes.jpg", title: "Pretzels and Grapes" },
  { src: "/images/serving-suggestions/Red Velvet.jpg", title: "Red Velvet" },
  { src: "/images/serving-suggestions/Salmon.jpg", title: "Salmon" },
  { src: "/images/serving-suggestions/Sardine.jpg", title: "Sardine" },
  { src: "/images/serving-suggestions/Scallop.jpg", title: "Scallop" },
];

const config = {
  SCROLL_SPEED: 1.75,
  LERP_FACTOR: 0.05,
  MAX_VELOCITY: 150,
};

const totalSlideCount = servingImages.length;

interface SliderState {
  currentX: number;
  targetX: number;
  slideWidth: number;
  isDragging: boolean;
  startX: number;
  lastX: number;
  lastMouseX: number;
  lastScrollTime: number;
  isMoving: boolean;
  velocity: number;
  lastCurrentX: number;
  dragDistance: number;
  hasActuallyDragged: boolean;
  isMobile: boolean;
}

export default function SuggestionsSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const [_isInitialized, setIsInitialized] = useState(false);

  const stateRef = useRef<SliderState>({
    currentX: 0,
    targetX: 0,
    slideWidth: 390,
    isDragging: false,
    startX: 0,
    lastX: 0,
    lastMouseX: 0,
    lastScrollTime: Date.now(),
    isMoving: false,
    velocity: 0,
    lastCurrentX: 0,
    dragDistance: 0,
    hasActuallyDragged: false,
    isMobile: false,
  });

  const checkMobile = () => {
    stateRef.current.isMobile = window.innerWidth <= 1000;
  };

  const createSlideElement = (index: number) => {
    const slide = document.createElement('div');
    slide.className = 'slide';

    if (stateRef.current.isMobile) {
      slide.style.width = "250px";
      slide.style.height = "325px";
    }

    const imageContainer = document.createElement('div');
    imageContainer.className = 'slide-image';

    const img = document.createElement('img');
    const dataIndex = index % totalSlideCount;
    img.src = servingImages[dataIndex].src;
    img.alt = servingImages[dataIndex].title;

    const overlay = document.createElement('div');
    overlay.className = 'slide-overlay';

    const title = document.createElement('p');
    title.className = 'project-title';
    title.textContent = servingImages[dataIndex].title;

    const arrow = document.createElement('div');
    arrow.className = 'project-arrow';
    arrow.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 17L17 7M17 7H7M17 7V17"/>
      </svg>
    `;

    overlay.appendChild(title);
    overlay.appendChild(arrow);
    imageContainer.appendChild(img);
    slide.appendChild(imageContainer);
    slide.appendChild(overlay);

    return slide;
  };

  const initializeSlides = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    
    track.innerHTML = '';
    slidesRef.current = [];

    checkMobile();
    stateRef.current.slideWidth = stateRef.current.isMobile ? 215 : 390;

    const copies = 6;
    const totalSlides = totalSlideCount * copies;
    
    for (let i = 0; i < totalSlides; i++) {
      const slide = createSlideElement(i);
      track.appendChild(slide);
      slidesRef.current.push(slide);
    }

    const startOffset = - (totalSlideCount * stateRef.current.slideWidth * 2);
    stateRef.current.currentX = startOffset;
    stateRef.current.targetX = startOffset;
  }, []);

  const updateSlidePositions = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    
    const state = stateRef.current;
    const sequenceWidth = totalSlideCount * state.slideWidth;

    if (state.currentX > -sequenceWidth * 1) {
      state.currentX -= sequenceWidth;
      state.targetX -= sequenceWidth;
    } else if (state.currentX < -sequenceWidth * 4) {
      state.currentX += sequenceWidth;
      state.targetX += sequenceWidth;
    }

    track.style.transform = `translate3d(${state.currentX}px, 0, 0)`;
  }, []);

  const updateParallax = useCallback(() => {
    const viewportCenter = window.innerWidth / 2;

    slidesRef.current.forEach((slide) => {
      const img = slide.querySelector('img') as HTMLImageElement;
      if (!img) return;

      const slideRect = slide.getBoundingClientRect();

      if (slideRect.right < -500 || slideRect.left > window.innerWidth + 500) {
        return;
      }

      const slideCenter = slideRect.left + slideRect.width / 2;
      const distanceFromCenter = slideCenter - viewportCenter;
      const parallaxOffset = distanceFromCenter * -0.25;

      img.style.transform = `translateX(${parallaxOffset}px) scale(2.25)`;
    });
  }, []);

  const updateMovingState = useCallback(() => {
    const state = stateRef.current;
    state.velocity = Math.abs(state.currentX - state.lastCurrentX);
    state.lastCurrentX = state.currentX;

    const isSlowEnough = state.velocity < 0.1;
    const noInteractions = Date.now() - state.lastScrollTime > 200;
    state.isMoving = state.hasActuallyDragged || isSlowEnough || !noInteractions;

    document.documentElement.style.setProperty('--slider-moving', state.isMoving ? '1' : '0');
  }, []);

  const animate = useCallback(() => {
    const state = stateRef.current;
    state.currentX += (state.targetX - state.currentX) * config.LERP_FACTOR;

    updateMovingState();
    updateSlidePositions();
    updateParallax();

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [updateMovingState, updateSlidePositions, updateParallax]);

  const handleWheel = useCallback((e: WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      return;
    }

    e.preventDefault();
    const state = stateRef.current;
    state.lastScrollTime = Date.now();

    const scrollDelta = e.deltaY * config.SCROLL_SPEED;
    state.targetX -= Math.max(Math.min(scrollDelta, config.MAX_VELOCITY), -config.MAX_VELOCITY);
  }, []);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const state = stateRef.current;
    state.isDragging = true;
    state.startX = e.touches[0].clientX;
    state.lastX = state.targetX;
    state.dragDistance = 0;
    state.hasActuallyDragged = false;
    state.lastScrollTime = Date.now();
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    const state = stateRef.current;
    if (!state.isDragging) return;

    const deltaX = (e.touches[0].clientX - state.startX) * 1.5;
    state.targetX = state.lastX + deltaX;
    state.dragDistance = Math.abs(deltaX);

    if (state.dragDistance > 5) {
      state.hasActuallyDragged = true;
    }

    state.lastScrollTime = Date.now();
  }, []);

  const handleTouchEnd = useCallback(() => {
    const state = stateRef.current;
    state.isDragging = false;
    setTimeout(() => {
      state.hasActuallyDragged = false;
    }, 100);
  }, []);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    e.preventDefault();
    const state = stateRef.current;
    state.isDragging = true;
    state.startX = e.clientX;
    state.lastMouseX = e.clientX;
    state.lastX = state.targetX;
    state.dragDistance = 0;
    state.hasActuallyDragged = false;
    state.lastScrollTime = Date.now();
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const state = stateRef.current;
    if (!state.isDragging) return;

    e.preventDefault();
    const deltaX = (e.clientX - state.lastMouseX) * 2;
    state.targetX += deltaX;
    state.lastMouseX = e.clientX;
    state.dragDistance += Math.abs(deltaX);

    if (state.dragDistance > 5) {
      state.hasActuallyDragged = true;
    }

    state.lastScrollTime = Date.now();
  }, []);

  const handleMouseUp = useCallback(() => {
    const state = stateRef.current;
    state.isDragging = false;
    setTimeout(() => {
      state.hasActuallyDragged = false;
    }, 100);
  }, []);

  const handleResize = useCallback(() => {
    initializeSlides();
  }, [initializeSlides]);

  const initializeEventListeners = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener('wheel', handleWheel, { passive: false });
    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchmove', handleTouchMove);
    slider.addEventListener('touchend', handleTouchEnd);
    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseleave', handleMouseUp);
    slider.addEventListener('dragstart', (e) => e.preventDefault());
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    window.addEventListener('resize', handleResize);

    return () => {
      slider.removeEventListener('wheel', handleWheel);
      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchmove', handleTouchMove);
      slider.removeEventListener('touchend', handleTouchEnd);
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseleave', handleMouseUp);
      slider.removeEventListener('dragstart', (e) => e.preventDefault());
      
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);

      window.removeEventListener('resize', handleResize);
    };
  }, [handleWheel, handleTouchStart, handleTouchMove, handleTouchEnd, handleMouseDown, handleMouseMove, handleMouseUp, handleResize]);

  const initializeSlider = useCallback(() => {
    initializeSlides();
    const cleanup = initializeEventListeners();
    animate();
    setIsInitialized(true);
    return cleanup;
  }, [initializeSlides, initializeEventListeners, animate]);

  useEffect(() => {
    const cleanup = initializeSlider();
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      cleanup?.();
    };
  }, [initializeSlider]);

  return (
    <div className="slider" ref={sliderRef}>
      <div className="slider-track" ref={trackRef}>
        {/* The slides will be dynamically created and inserted here */}
      </div>
    </div>
  );
} 