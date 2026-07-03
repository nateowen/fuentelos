import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import BeveragesClient from "./client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("beveragesTitle"),
    description: t("beveragesDescription"),
    alternates: {
      canonical: locale === "en" ? "/beverages" : `/${locale}/beverages`,
      languages: {
        en: "/beverages",
        "es-ES": "/es/beverages",
        "x-default": "/beverages",
      },
    },
    openGraph: {
      title: t("beveragesTitle"),
      description: t("beveragesDescription"),
      images: ["/labels/Rose.png", "/labels/White.png"],
    },
  };
}

export default async function Beverages({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <BeveragesClient />;
}
