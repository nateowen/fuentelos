import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import "../globals.css";
import { routing } from "@/i18n/routing";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const keywordsByLocale: Record<string, string[]> = {
  en: [
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
  ],
  es: [
    "mosto espumoso sin alcohol",
    "mosto premium",
    "zumo de uva español",
    "mosto de uva Tempranillo",
    "mosto de uva Airén",
    "bebida para celebrar",
    "bebida sin alcohol",
    "mosto espumoso",
    "herencia española",
    "Castilla-La Mancha",
    "mosto natural",
    "sin azúcares añadidos",
  ],
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: {
      default: t("homeTitle"),
      template: "%s | Fuentelo's",
    },
    description: t("homeDescription"),
    keywords: keywordsByLocale[locale] ?? keywordsByLocale.en,
    authors: [{ name: "Fuentelo's" }],
    creator: "Fuentelo's",
    publisher: "Fuentelo's",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://fuentelos.com"),
    alternates: {
      canonical: locale === routing.defaultLocale ? "/" : `/${locale}`,
      languages: {
        en: "/",
        "es-ES": "/es",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      url:
        locale === routing.defaultLocale
          ? "https://fuentelos.com"
          : `https://fuentelos.com/${locale}`,
      siteName: "Fuentelo's",
      title: t("homeTitle"),
      description: t("homeDescription"),
      images: [
        {
          url: "/labels/White.png",
          width: 1200,
          height: 630,
          alt: "Fuentelo's Premium Sparkling Grape Juice",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("homeTitle"),
      description: t("homeDescription"),
      images: ["/labels/White.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering for this locale.
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
