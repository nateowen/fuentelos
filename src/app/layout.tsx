import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  title: {
    default: "Fuentelo's | Premium Non-Alcoholic Sparkling Grape Juice",
    template: "%s | Fuentelo's"
  },
  description: "Celebrate every moment with Fuentelo's premium non-alcoholic sparkling grape juice. Made from Spanish Tempranillo and Airén grapes, perfect for celebrations, gatherings, and special occasions. 100% natural, zero added sugars.",
  keywords: [
    "non-alcoholic sparkling grape juice",
    "premium grape juice",
    "Spanish grape juice",
    "Tempranillo grape juice",
    "Airén grape juice",
    "celebration drink",
    "alcohol-free beverage",
    "sparkling juice",
    "premium non-alcoholic drink",
    "Spanish heritage",
    "Castilla-La Mancha",
    "natural grape juice",
    "zero added sugars",
    "celebration drink"
  ],
  authors: [{ name: "Fuentelo's" }],
  creator: "Fuentelo's",
  publisher: "Fuentelo's",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fuentelos.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fuentelos.com',
    siteName: "Fuentelo's",
    title: "Fuentelo's | Premium Non-Alcoholic Sparkling Grape Juice",
    description: "Celebrate every moment with Fuentelo's premium non-alcoholic sparkling grape juice. Made from Spanish Tempranillo and Airén grapes.",
    images: [
      {
        url: '/labels/White.png',
        width: 1200,
        height: 630,
        alt: "Fuentelo's Premium Sparkling Grape Juice",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fuentelo's | Premium Non-Alcoholic Sparkling Grape Juice",
    description: "Celebrate every moment with Fuentelo's premium non-alcoholic sparkling grape juice.",
    images: ['/labels/White.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <StructuredData />
        </head>
        <body
          className="antialiased"
        >
          <Navigation />
          <main>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
