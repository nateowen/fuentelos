import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import AboutClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("aboutTitle"),
    description: t("aboutDescription"),
    alternates: {
      canonical: locale === "en" ? "/about" : `/${locale}/about`,
      languages: {
        en: "/about",
        "es-ES": "/es/about",
        "x-default": "/about",
      },
    },
    openGraph: {
      title: t("aboutTitle"),
      description: t("aboutDescription"),
      images: ["/images/Abuelos.jpg"],
    },
  };
}

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutClient />;
}
