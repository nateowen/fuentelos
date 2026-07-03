"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import NutritionFacts from "@/components/NutritionFacts";
import SuggestionsSlider from "@/components/SuggestionsSlider";

const roseNutrition = [
  { label: "Calories", value: "110", dailyValue: "0%" },
  { label: "Total Fat", value: "0g", dailyValue: "0%" },
  { label: "Cholesterol", value: "0mg", dailyValue: "0%" },
  { label: "Sodium", value: "0mg", dailyValue: "0%" },
  { label: "Total Carbohydrate", value: "27g", dailyValue: "10%" },
  { label: " ", value: "Total Sugars 27g", dailyValue: "10%", bold: false },
  { label: "", value: "Includes 0g Added Sugars", dailyValue: "0%", bold: false },
  { label: "Protein", value: "Less than 1g" },
];
const whiteNutrition = [
  { label: "Calories", value: "110", dailyValue: "10%" },
  { label: "Total Fat", value: "0g", dailyValue: "0%" },
  { label: "Cholesterol", value: "0mg", dailyValue: "0%" },
  { label: "Sodium", value: "0mg", dailyValue: "0%" },
  { label: "Total Carbohydrate", value: "28g", dailyValue: "9%" },
  { label: " ", value: "Total Sugars 28g", dailyValue: "10%", bold: false },
  { label: "", value: "Includes 0g Added Sugars", dailyValue: "0%", bold: false },
  { label: "Includes 0g Added Sugars", value: "0%" },
  { label: "Protein", value: "Less than 1g" },
];

export default function BeveragesClient() {
  const t = useTranslations("Beverages");
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-flavor-rose via-white-grape-light to-white-grape-light">
      <div className="max-w-6xl mx-auto px-4  overflow-hidden md:overflow-visible">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-fisterra text-blue pt-24 pb-12 tracking-normal">{t("title")}</h1>

        {/* ROSÉ SECTION */}
        <section className="relative px-2 md:px-6 pb-12 md:pb-24">
          {/* Decorative Rose Top Right */}
          <div className="absolute right-0 rotate-30 top-0 w-32 md:w-64 pointer-events-none select-none hidden md:block">
            <Image src="/icons/Rose2.svg" alt="Rose" width={256} height={256} />
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:gap-8">
            {/* Left: Heading, Label, Blurbs */}
            <div className="flex-1">
              <div className="flex flex-row justify-center md:justify-start items-center gap-4 md:gap-6 pb-10">
                <h2 className="text-5xl md:text-[160px] font-fisterra text-rose leading-none">{t("roseHeading")}</h2>
                <Image src="/labels/Rose.png" alt={t("roseLabelAlt")} width={120} height={120} className="rounded-full md:w-[200px] md:h-[200px]" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 py-6 md:py-8 px-0 md:px-6 text-blue/90 text-base text-left">
                <div className="flex flex-col items-center justify-between gap-2 text-center">
                  <span>{t("roseBlurb1")}</span>
                  <Image src="/icons/Bubbles.svg" alt="Bubbles" width={80} height={80} className="md:w-[120px] md:h-[120px]" />
                </div>
                <div className="flex flex-col items-center justify-between gap-2 text-center">
                  <span>{t("roseBlurb2")}</span>
                  <Image src="/icons/PoppedChampagne.svg" alt="Popped Champagne" width={100} height={100} className="md:w-[140px] md:h-[140px]" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-around w-full items-center gap-6 md:gap-10">
                {/* Product Facts Box */}
                <div className="items-center h-full rounded-3xl w-full md:w-full border-2 border-rose text-center p-4 md:p-6 text-xs sm:text-sm md:text-xl font-fisterra text-rose grid grid-cols-2 gap-1">
                  <div className="space-y-1">
                    <div>{t("factJuice")}</div>
                    <div>{t("factCarbonateWater")}</div>
                    <div>{t("factZeroSugars")}</div>
                    <div>{t("factNoPreservatives")}</div>
                    <div>{t("factNoColors")}</div>
                    <div>{t("factNoSweeteners")}</div>
                  </div>
                  <div className="space-y-1">
                    <div>{t("factNoAlcohol")}</div>
                    <div>{t("factVolume")}</div>
                    <div>{t("factTempranillo")}</div>
                    <div>{t("factNotConcentrate")}</div>
                    <div className="text-lg sm:text-2xl md:text-3xl mt-2">{t("factSparkle")}</div>
                  </div>
                </div>
                {/* Nutrition Facts */}
                <div className="flex flex-col items-center md:items-end justify-center">
                  <NutritionFacts nutrition={roseNutrition} variant="rose" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHITE SECTION */}
        <section className="relative px-2 md:px-6">
          {/* Decorative Cherry Blossom Top Right */}
          <div className="absolute right-8 top-[-20] w-32 md:w-64 pointer-events-none select-none hidden md:block">
            <Image src="/icons/CherryBlossom.svg" alt="Cherry Blossom" width={256} height={256} />
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:gap-8">
            {/* Left: Heading, Label, Blurbs */}
            <div className="flex-1">
              <div className="flex flex-row items-center justify-center md:justify-start gap-4 md:gap-6 mb-4">
                <h2 className="text-5xl md:text-[160px] font-fisterra text-white-grape leading-none">{t("whiteHeading")}</h2>
                <Image src="/labels/White.png" alt={t("whiteLabelAlt")} width={120} height={120} className="rounded-full md:w-[200px] md:h-[200px]" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 py-6 md:py-8 px-0 md:px-6 text-blue/90 text-base text-left">
                <div className="flex flex-col items-center justify-between gap-2 text-center">
                  <span>{t("whiteBlurb1")}</span>
                  <Image src="/icons/Flower.svg" alt="Flower" width={70} height={70} className="md:w-[100px] md:h-[100px]" />
                </div>
                <div className="flex flex-col items-center justify-between gap-2 text-center">
                  <span>{t("whiteBlurb2")}</span>
                  <Image src="/icons/IcedBeverage.svg" alt="Iced Beverage" width={80} height={80} className="md:w-[120px] md:h-[120px]" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-around w-full items-center gap-6 md:gap-10">
                {/* Product Facts Box */}
                <div className="items-center h-full rounded-3xl w-full md:w-full border-2 border-white-grape text-center p-4 md:p-6 text-xs sm:text-sm md:text-xl font-fisterra text-white-grape grid grid-cols-2 gap-1">
                  <div className="space-y-1">
                    <div>{t("factJuice")}</div>
                    <div>{t("factCarbonatedWater")}</div>
                    <div>{t("factZeroSugars")}</div>
                    <div>{t("factNoPreservatives")}</div>
                    <div>{t("factNoColors")}</div>
                    <div>{t("factNoSweeteners")}</div>
                  </div>
                  <div className="space-y-1">
                    <div>{t("factNoAlcohol")}</div>
                    <div>{t("factVolume")}</div>
                    <div>{t("factAiren")}</div>
                    <div>{t("factNotConcentrate")}</div>
                    <div className="text-lg sm:text-2xl md:text-3xl mt-2">{t("factSparkle")}</div>
                  </div>
                </div>
                {/* Nutrition Facts */}
                <div className="flex flex-col items-center md:items-end justify-center mt-0 md:mt-0">
                  <NutritionFacts nutrition={whiteNutrition} variant="white-grape" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="w-full flex flex-col items-center justify-center pt-12 md:pt-24">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-fisterra text-blue mb-4">{t("pairingsTitle")}</h2>
        <p className="text-center text-blue/90 text-base px-4">{t("pairingsBody")}</p>
      </section>

      {/* Serving Suggestions Slider */}
      <SuggestionsSlider />


      <section className="w-full h-24 md:h-36 bg-gradient-to-b from-white-grape-light to-neutral" aria-hidden="true"></section>
    </div>
  );
}
