"use client";

import Image from "next/image";
import MissionSlideshow from "@/components/MissionSlideshow";
import ParallaxCollage from "@/components/ParallaxCollage";
import ParallaxCollageMobile from "@/components/ParallaxCollageMobile";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="revealer hidden md:block"></div>
      {/* Hero Section */}
      <section className="relative flex flex-col items-center bg-white-grape-light h-screen overflow-visible">
        <div className="flex flex-col items-center max-w-7xl pt-24 bg-white-grape-light px-4">
          <div className="flex items-center justify-center w-full pb-6 md:pb-20">
            <div className="hidden md:block">
              <Image src="/labels/White.png" alt="White Label" width={200} height={200} className="rounded-full object-cover" />
            </div>
            <div className="flex-1 text-center">
              <h1 className="font-fisterra text-4xl sm:text-5xl md:text-6xl text-blue mb-2 px-2">
                Celebrate Every Moment with Fuentelo&apos;s Premier
              </h1>
              {/* <p className="text-light-blue text-sm md:text-base mx-auto mb-2">
                Indulge in the exquisite taste of our premium non-alcoholic sparkling grape juice, perfect for every celebration.
              </p> */}
              {/* <Link href="/beverages" className="inline-block bg-green text-white-grape-light px-6 py-2 rounded-full font-semibold text-sm md:text-base mt-2 hover:bg-green/90 transition-colors">
                OUR BEVERAGES
              </Link> */}
            </div>
            <div className="hidden md:block">
              <Image src="/labels/Rose.png" alt="Rose Label" width={200} height={200} className="rounded-full object-cover" />
            </div>
          </div>
          
          <div className="hidden md:block">
            <ParallaxCollage />
          </div>
          <div className="block md:hidden">
            <ParallaxCollageMobile />
          </div>

          {/* Hero Ticker */}
          {/* <div>
            <Ticker />
          </div> */}
          
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full bg-white-grape-light py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-fisterra text-3xl sm:text-4xl md:text-5xl text-blue mb-2 md:mb-4">OUR MISSION</h2>
          <p className="text-sm md:text-base text-blue max-w-3xl mb-2">
            To help people celebrate life&apos;s most joyous moments.
          </p>
          <p className="text-sm md:text-base text-blue max-w-3xl mb-8 md:mb-10">
            Fuentelo&apos;s isn&apos;t just about taste—it&apos;s about creating lasting memories and bringing people together for moments that matter.
          </p>
          <div className="mb-5">
            <MissionSlideshow />
          </div>
          {/* <p className="text-base text-blue text-center mx-auto mb-2">
            We recognize the lack of high-quality non-alcoholic drinks for special occasions. We wanted to offer a pure, flavorful sparkling beverage that celebrates life's milestones without the alcohol.
          </p> */}
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full bg-white-grape-light py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center font-fisterra text-3xl sm:text-4xl md:text-5xl text-blue mb-6 md:mb-4">OUR PROCESS</h2>
          <div className="flex flex-col gap-12 md:gap-16">
            {/* HARVEST */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
              <div className="flex-1 text-left mb-6 md:mb-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-fisterra mb-2 text-green">Harvest</h3>
                <p className="text-sm md:text-base text-light-blue">
                  Harvesting begins when our Tempranillo and Airén grapes reach peak ripeness, typically in late summer. 
                  Timing is crucial—each grape is handpicked at the ideal moment to ensure vibrant flavor and balanced acidity. 
                  Early morning harvesting preserves freshness and prevents unwanted fermentation. 
                  This careful attention to detail sets the foundation for the crisp, clean character of our non-alcoholic sparkling grape juice.
                </p>
              </div>
              <div className="flex-shrink-0 md:ml-8">
                <Image src="/icons/Pruning Shears.svg" alt="Harvest icon" width={80} height={80} className="md:w-[120px] md:h-[120px]" />
              </div>
            </div>
            {/* JUICE */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
              <div className="flex-1 text-left mb-6 md:mb-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-fisterra mb-2 text-white-grape">Juice</h3>
                <p className="text-sm md:text-base text-light-blue">
                Once harvested, the grapes are gently pressed to extract their juice without compromising flavor or aroma. 
                We use a cold-press method to preserve the grapes&apos; natural freshness and prevent oxidation. 
                Our white Airén grapes produce a clean, crisp juice with subtle floral notes, while brief contact with Tempranillo skins gives our rosé its soft hue. 
                The result is a vibrant juice that captures the essence of the fruit.
                </p>
              </div>
              <div className="flex-shrink-0 md:ml-8">
                <Image src="/icons/AirenGrapes.svg" alt="Juice icon" width={80} height={80} className="md:w-[120px] md:h-[120px]" />
              </div>
            </div>
            {/* CARBONATE AND BOTTLE */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
              <div className="flex-1 text-left mb-6 md:mb-0">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-fisterra mb-2 text-rose">Carbonate & Bottle</h3>
                <p className="text-sm md:text-base text-light-blue">
                After juicing, the pure grape juices are delicately carbonated to create a fine, refreshing sparkle. 
                We add just 20% purified water to balance sweetness and enhance drinkability without diluting the natural flavors. 
                The beverage is then bottled under pressure in elegant glass bottles to preserve its effervescence and freshness—ensuring every sip is as crisp and celebratory as the moment it was sealed.
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
            <h2 className="font-fisterra text-3xl sm:text-4xl md:text-5xl text-blue mb-4 md:mb-4">THE JOYS OF CHOOSING NON-ALCOHOLIC BEVERAGES</h2>
            <p className="text-light-blue text-sm md:text-base">
              Opting for non-alcoholic beverages like Fuentelo&apos;s sparkling grape juice promotes a healthier lifestyle while ensuring everyone can join in the celebration. 
              Perfect for all ages, our drink allows you to savor the moment without the effects of alcohol.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="w-24 h-24 md:w-full md:h-72">
              <Image src="/icons/JoysIcons.svg" alt="Sparkling Grape Juice Essentials" width={288} height={288} className="w-full h-full" />
            </div>
            {/* <div className="relative w-48 h-36 md:w-60 md:h-48">
              <div className="absolute right-[-25] bottom-0 w-16 h-8 md:w-30 md:h-18 rotate-300">
                <Image src="/icons/Corkscrew.svg" alt="Corkscrew" width={80} height={40} className="w-full h-full" />
              </div>
              <div className="absolute left-6 bottom-[-40] w-20 h-28 md:w-56 md:h-80">
                <Image src="/icons/WhiteBottle.svg" alt="White Bottle" width={112} height={160} className="w-full h-full" />
              </div>
              <div className="absolute left-0 bottom-0 w-24 h-24 md:w-32 md:h-32">
                <Image src="/icons/TempranilloGrapes.svg" alt="Tempranillo Grapes" width={128} height={128} className="w-full h-full" />
              </div>
              
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
