import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Fuentelo's",
  description: "Fuentelo's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
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
