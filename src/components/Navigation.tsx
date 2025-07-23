"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Beverages", href: "/beverages" },
    { name: "Blog", href: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav>
      {/* Desktop Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 mx-12 bg-light-blue border-b-3 border-x-3 border-blue hidden md:block rounded-b-3xl shadow-lg">
        <div className="py-4 px-8 flex items-center justify-between">
          {/* FUENTELO'S Link */}
          <Link 
            href="/"
            className="font-fisterra text-3xl lg:text-4xl text-neutral transition-colors"
          >
            Fuentelo&apos;s
          </Link>

          {/* Navigation Items */}
          <div className="flex flex-row gap-12">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-base text-neutral hover:text-white-grape transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <a 
            href="https://www.instagram.com/drinkfuentelos/" target="_blank" rel="noopener noreferrer"
            className="text-xl text-white-grape border-1 border-white-grape font-fisterra tracking-wider rounded-full px-4 py-1 hover:bg-white-grape hover:text-light-blue hover:border-white-grape transition-colors"
          >
            FOLLOW US
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-blue md:hidden rounded-b-2xl shadow-lg transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        {/* Header portion */}
        <div className="p-4 flex justify-between items-center">
          {/* FUENTELO'S Link */}
          <Link 
            href="/"
            className="font-fisterra text-2xl text-neutral transition-colors"
          >
            Fuentelo&apos;s
          </Link>

          {/* Hamburger Icon */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-6 h-0.5 bg-neutral transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-neutral transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-neutral transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu - expands underneath header */}
        <div className={`overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="text-lg text-neutral transition-colors text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex justify-center pt-8 pb-4">
              <a href="https://www.instagram.com/drinkfuentelos/" target="_blank" rel="noopener noreferrer"
                className="text-xl text-white-grape border-1 border-white-grape font-fisterra tracking-wider rounded-full px-8 py-2 text-center"
              >
                FOLLOW US
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;