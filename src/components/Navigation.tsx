"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const router = useTransitionRouter();
  const pathname = usePathname();

  function triggerPageTransition() {
    document.documentElement.animate([
        {
          clipPath: "circle(0% at 50% 50%)",
        },
        {
          clipPath: "circle(150% at 50% 50%)",
        },
      ],
      {
        duration: 2000,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  const handleNavigation = (path: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === path) {
      e.preventDefault();
      return;
    }
    router.push(path, {
      onTransitionReady: triggerPageTransition,
    })
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Beverages", href: "/beverages" },
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
      <div className="fixed top-0 left-0 right-0 z-50 mx-12 bg-light-blue hidden md:block rounded-b-3xl shadow-lg">
        <div className="py-4 px-8 flex items-center justify-between">
          {/* FUENTELO'S Link */}
          <Link 
            href="/"
            className="font-fisterra text-3xl lg:text-4xl text-neutral transition-colors"
            onClick={handleNavigation("/")}
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
                onClick={handleNavigation(item.href)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link 
            href="/"
            className="text-base text-white-grape border-2 border-white-grape font-black rounded-full px-4 py-1 hover:bg-white-grape hover:text-light-blue hover:border-white-grape transition-colors"
          >
            LINKTREE
          </Link>
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
        <div className={`overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pb-8">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;