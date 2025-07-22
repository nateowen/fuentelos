"use client";

import Image from "next/image";
import NutritionFacts from "@/components/NutritionFacts";
import { useRevealer } from "@/hooks/useRevelear";
import ServingSuggestionsSlider from "@/components/ServingSuggestionsSlider";

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
  useRevealer();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-flavor-rose via-white-grape-light to-white-grape-light">
      <div className="revealer hidden md:block"></div>

      <div className="max-w-6xl mx-auto px-4 pb-12 overflow-hidden md:overflow-visible">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-fisterra text-blue pt-24 pb-12 tracking-normal">Meet the Flavors!</h1>

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
                <h2 className="text-5xl md:text-[160px] font-fisterra text-rose leading-none">ROSÉ</h2>
                {/* <Image src="/icons/Rose2.svg" alt="Rose" width={256} height={256} className="rotate-40"/> */}
                <Image src="/labels/Rose.png" alt="Rosé Label" width={120} height={120} className="rounded-full md:w-[200px] md:h-[200px]" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 py-6 md:py-8 px-0 md:px-6 text-blue/90 text-base text-left">
                <div className="flex flex-col items-center justify-between gap-2 text-center">
                  <span>Fuentelo&apos;s Rosé captures the vibrant essence of Spain&apos;s Tempranillo grape with its deep rose color releasing bright aromas of ripe strawberries, red cherries, and pomegranate, laced with hints of hibiscus and rose.</span>
                  {/* <Image src="/icons/TempranilloGrapes.svg" alt="Tempranillo Grapes" width={60} height={60} className="md:w-[80px] md:h-[80px]" /> */}
                  <Image src="/icons/Bubbles.svg" alt="Bubbles" width={80} height={80} className="md:w-[120px] md:h-[120px]" />
                </div>
                {/* <div className="flex flex-col justify-between items-center gap-2">
                  <span>The scent is fresh and inviting, lifted by the gentle effervescence.</span>
                  <Image src="/icons/Bubbles.svg" alt="Bubbles" width={80} height={80} className="md:w-[120px] md:h-[120px]" />
                </div> */}
                <div className="flex flex-col items-center justify-between gap-2 text-center">
                  <span>Each sip bursts with juicy red berries, softened by a velvety texture and subtle notes of wild raspberry and honeyed grape.</span>
                  <Image src="/icons/PoppedChampagne.svg" alt="Popped Champagne" width={100} height={100} className="md:w-[140px] md:h-[140px]" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-around w-full items-center gap-6 md:gap-10">
                {/* Product Facts Box */}
                <div className="items-center h-full rounded-3xl w-full md:w-full border-2 border-rose text-center p-4 md:p-6 text-xs sm:text-sm md:text-xl font-fisterra text-rose grid grid-cols-2 gap-1">
                  <div className="space-y-1">
                    <div>80% Juice</div>
                    <div>20% Carbonate Water</div>
                    <div>Zero Added Sugars</div>
                    <div>No Chemical Preservatives</div>
                    <div>No Artificial Colors</div>
                    <div>No Added Sweeteners</div>
                  </div>
                  <div className="space-y-1">
                    <div>No Alcohol</div>
                    <div>25.4 FL OZ</div>
                    <div>Tempranillo Grapes</div>
                    <div>Not From Concentrate</div>
                    <div className="text-lg sm:text-2xl md:text-3xl mt-2">100% SPARKLE!</div>
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
                <h2 className="text-5xl md:text-[160px] font-fisterra text-white-grape leading-none">WHITE</h2>
                <Image src="/labels/White.png" alt="White Label" width={120} height={120} className="rounded-full md:w-[200px] md:h-[200px]" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 py-6 md:py-8 px-0 md:px-6 text-blue/90 text-base text-left">
                <div className="flex flex-col items-center justify-between gap-2 text-center">
                  <span>Fuentelo&apos;s White captures the vibrant essence of Spain&apos;s Airén grape with its bright color releasing aromas of fresh apple, pear, and white peach, laced with hints of citrus blossom and honey.</span>
                  {/* <Image src="/icons/AirenGrapes.svg" alt="Airen Grapes" width={60} height={60} className="md:w-[80px] md:h-[80px]" /> */}
                  <Image src="/icons/Flower.svg" alt="Flower" width={70} height={70} className="md:w-[100px] md:h-[100px]" />
                </div>
                {/* <div className="flex flex-col justify-between items-center gap-2">
                  <span>The scent is fresh and inviting, lifted by the gentle effervescence.</span>
                  <Image src="/icons/Flower.svg" alt="Flower" width={70} height={70} className="md:w-[100px] md:h-[100px]" />
                </div> */}
                <div className="flex flex-col items-center justify-between gap-2 text-center">
                  <span>Each sip bursts with crisp orchard fruit, softened by a silky texture and subtle notes of wildflower and golden raisin.</span>
                  <Image src="/icons/IcedBeverage.svg" alt="Iced Beverage" width={80} height={80} className="md:w-[120px] md:h-[120px]" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-around w-full items-center gap-6 md:gap-10">
                {/* Product Facts Box */}
                <div className="items-center h-full rounded-3xl w-full md:w-full border-2 border-white-grape text-center p-4 md:p-6 text-xs sm:text-sm md:text-xl font-fisterra text-white-grape grid grid-cols-2 gap-1">
                  <div className="space-y-1">
                    <div>80% Juice</div>
                    <div>20% Carbonated Water</div>
                    <div>Zero Added Sugars</div>
                    <div>No Chemical Preservatives</div>
                    <div>No Artificial Colors</div>
                    <div>No Added Sweeteners</div>
                  </div>
                  <div className="space-y-1">
                    <div>No Alcohol</div>
                    <div>25.4 FL OZ</div>
                    <div>Airén Grapes</div>
                    <div>Not From Concentrate</div>
                    <div className="text-lg sm:text-2xl md:text-3xl mt-2">100% SPARKLE!</div>
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

      <section className="w-full h-12 bg-gradient-to-b from-white-grape-light to-neutral" aria-hidden="true"></section>

      {/* Serving Suggestions Slider */}
      <ServingSuggestionsSlider />
      
    </div>
  );
} 