"use client";

import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LanguageSwitcher = ({ onNavigate }: { onNavigate?: () => void }) => {
  const pathname = usePathname();
  const activeLocale = useLocale();
  const t = useTranslations("Nav");

  return (
    <div className="flex items-center gap-2" aria-label={t("language")}>
      {routing.locales.map((locale, index) => (
        <span key={locale} className="flex items-center gap-2">
          {index > 0 && <span className="text-neutral/40">/</span>}
          <Link
            href={pathname}
            locale={locale}
            onClick={onNavigate}
            aria-current={locale === activeLocale ? "true" : undefined}
            className={`text-sm uppercase transition-colors ${
              locale === activeLocale
                ? "text-white-grape font-semibold"
                : "text-neutral hover:text-white-grape"
            }`}
          >
            {locale === "es" ? t("spanish") : t("english")}
          </Link>
        </span>
      ))}
    </div>
  );
};

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const t = useTranslations("Nav");
  const navItems = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("beverages"), href: "/beverages" },
    // { name: t("blog"), href: "/blog" },
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
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue border-b-4 border-light-blue hidden md:block shadow-lg">
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
                key={item.href}
                href={item.href}
                className="text-base text-neutral uppercase hover:text-white-grape transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <LanguageSwitcher />
            <a
              href="https://www.instagram.com/drinkfuentelos/" target="_blank" rel="noopener noreferrer"
              className="text-xl text-blue bg-white-grape font-fisterra tracking-wider rounded-full px-4 py-1 hover:scale-110 hover:bg-rose transition-all duration-300"
            >
              {t("followUs")}
            </a>
          </div>
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
            aria-label={t("toggleMenu")}
          >
            <span className={`block w-6 h-0.5 bg-neutral transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-neutral transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-neutral transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu - expands underneath header */}
        <div className={`overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-md text-neutral uppercase transition-colors text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex justify-center pt-6">
              <LanguageSwitcher onNavigate={() => setMobileOpen(false)} />
            </div>
            <div className="flex justify-center pt-6 pb-4">
              <a href="https://www.instagram.com/drinkfuentelos/" target="_blank" rel="noopener noreferrer"
                className="text-xl text-blue bg-white-grape font-fisterra tracking-wider rounded-full px-8 py-2 text-center"
              >
                {t("followUs")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
