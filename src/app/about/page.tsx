import type { Metadata } from "next";
import AboutClient from "./client";

export const metadata: Metadata = {
  title: "About Fuentelo's | Our Spanish Heritage & Legacy",
  description: "Discover Fuentelo's story rooted in Spain's winemaking heritage. Learn about our family legacy, Castilla-La Mancha vineyards, and commitment to crafting premium non-alcoholic sparkling grape juice.",
  keywords: [
    "Fuentelo's story",
    "Spanish heritage",
    "Castilla-La Mancha",
    "family legacy",
    "Spanish vineyards",
    "Tempranillo grapes",
    "Airén grapes",
    "mosto",
    "Spanish tradition"
  ],
  openGraph: {
    title: "About Fuentelo's | Our Spanish Heritage & Legacy",
    description: "Discover Fuentelo's story rooted in Spain's winemaking heritage. Learn about our family legacy and commitment to crafting premium non-alcoholic sparkling grape juice.",
    images: ['/images/Abuelos.jpg'],
  },
};

export default function About() {
  return <AboutClient />;
} 