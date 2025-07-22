import type { Metadata } from "next";
import BeveragesClient from "./client";

export const metadata: Metadata = {
  title: "Our Beverages | Fuentelo's Rosé & White Sparkling Grape Juice",
  description: "Explore Fuentelo's premium non-alcoholic sparkling grape juices: Rosé from Tempranillo grapes and White from Airén grapes. 100% natural, zero added sugars, perfect for celebrations.",
  keywords: [
    "Fuentelo's Rosé",
    "Fuentelo's White",
    "sparkling grape juice flavors",
    "Tempranillo grape juice",
    "Airén grape juice",
    "non-alcoholic rosé",
    "non-alcoholic white wine alternative",
    "sparkling juice nutrition",
    "celebration beverages",
    "premium grape juice"
  ],
  openGraph: {
    title: "Our Beverages | Fuentelo's Rosé & White Sparkling Grape Juice",
    description: "Explore Fuentelo's premium non-alcoholic sparkling grape juices: Rosé from Tempranillo grapes and White from Airén grapes.",
    images: ['/labels/Rose.png', '/labels/White.png'],
  },
};

export default function Beverages() {
  return <BeveragesClient />;
} 