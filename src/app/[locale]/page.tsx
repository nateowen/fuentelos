"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import MissionSlideshow from "@/components/MissionSlideshow";
import ParallaxCollage from "@/components/ParallaxCollage";
import ParallaxCollageMobile from "@/components/ParallaxCollageMobile";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <div className="min-h-screen flex flex-col">
      <div className="revealer hidden md:block"></div>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center bg-white-grape-light h-screen overflow-visible">
        <div className="flex flex-col items-center max-w-7xl pt-24 bg-white-grape-light px-4">
          <div className="flex items-center justify-center w-full pb-6 md:pb-20">
            <div className="hidden md:block">
              <Image src="/labels/White.png" alt={t("whiteLabelAlt")} width={200} height={200} className="rounded-full object-cover" />
            </div>
            <div className="flex-1 text-center">
              <h1 className="font-fisterra text-4xl sm:text-5xl md:text-6xl text-blue mb-2 px-2">
                {t("heroTitle")}
              </h1>
            </div>
            <div className="hidden md:block">
              <Image src="/labels/Rose.png" alt={t("roseLabelAlt")} width={200} height={200} className="rounded-full object-cover" />
            </div>
          </div>

          <div className="hidden md:block">
            <ParallaxCollage />
          </div>
          <div className="block md:hidden">
            <ParallaxCollageMobile />
          </div>

        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full bg-white-grape-light py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-fisterra text-3xl sm:text-4xl md:text-5xl text-blue mb-2 md:mb-4">{t("missionTitle")}</h2>
          <p className="text-sm md:text-base text-blue max-w-3xl mb-2">
            {t("missionLead")}
          </p>
          <p className="text-sm md:text-base text-blue max-w-3xl mb-8 md:mb-10">
            {t("missionBody")}
          </p>
          <div className="mb-5">
            <MissionSlideshow />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full bg-white-grape-light py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center font-fisterra text-3xl sm:text-4xl md:text-5xl text-blue mb-6 md:mb-4">{t("processTitle")}</h2>
          <div className="flex flex-col gap-12 md:gap-16">
            {/* HARVEST */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
              <div className="flex-1 text-left mb-6 md:mb-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-fisterra mb-2 text-green">{t("harvestTitle")}</h3>
                <p className="text-sm md:text-base text-light-blue">
                  {t("harvestBody")}
                </p>
              </div>
              <div className="flex-shrink-0 md:ml-8">
                <Image src="/icons/Pruning Shears.svg" alt="Harvest icon" width={80} height={80} className="md:w-[120px] md:h-[120px]" />
              </div>
            </div>
            {/* JUICE */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
              <div className="flex-1 text-left mb-6 md:mb-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-fisterra mb-2 text-white-grape">{t("juiceTitle")}</h3>
                <p className="text-sm md:text-base text-light-blue">
                  {t("juiceBody")}
                </p>
              </div>
              <div className="flex-shrink-0 md:ml-8">
                <Image src="/icons/AirenGrapes.svg" alt="Juice icon" width={80} height={80} className="md:w-[120px] md:h-[120px]" />
              </div>
            </div>
            {/* CARBONATE AND BOTTLE */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
              <div className="flex-1 text-left mb-6 md:mb-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-fisterra mb-2 text-rose">{t("carbonateTitle")}</h3>
                <p className="text-sm md:text-base text-light-blue">
                  {t("carbonateBody")}
                </p>
              </div>
              <div className="flex-shrink-0 md:ml-8">
                <Image src="/icons/RoseBottle.svg" alt="Rose Bottle icon" width={80} height={80} className="md:w-[120px] md:h-[120px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-white-grape-light to-neutral h-12"></section>

      {/* Non-Alcoholic Joys Section */}
      <section className="w-full bg-neutral py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-fisterra text-3xl sm:text-4xl md:text-5xl text-blue mb-4 md:mb-4">{t("joysTitle")}</h2>
            <p className="text-light-blue text-sm md:text-base">
              {t("joysBody")}
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="w-24 h-24 md:w-full md:h-72">
              <Image src="/icons/JoysIcons.svg" alt="Sparkling Grape Juice Essentials" width={288} height={288} className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
