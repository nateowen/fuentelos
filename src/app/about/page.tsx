"use client";

import Image from "next/image";
import { useRevealer } from "@/hooks/useRevelear";

// const STORES = [
//   { name: "Gelson's", logo: "/images/stores/Gelsons.svg" },
//   { name: "Erewhon", logo: "/images/stores/Erewhon.svg" },
//   { name: "Target", logo: "/images/stores/Target.svg" },
//   { name: "Vons", logo: "/images/stores/Vons.svg" },
//   { name: "Mothers", logo: "/images/stores/Mothers.svg" },
//   { name: "Pavilions", logo: "/images/stores/Pavilions.svg" },
//   { name: "Safeway", logo: "/images/stores/Safeway.svg" },
// ];

const TEAM = [
  { name: "Shawn Stewart", role: "Founder & CEO" },
  { name: "Cristina Stewart", role: "Marketing Director" },
  { name: "Karen Gudmundson", role: "Business Development" },
  { name: "Jose Luis de la Fuente", role: "Partnerships" },
];

export default function About() {
  useRevealer();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="revealer hidden md:block"></div>

      {/* Header & Values Section */}
      <section className="w-full bg-neutral relative overflow-hidden pt-24">
        {/* Background Windmill */}
        <div className="absolute inset-0 flex items-center justify-end">
          <Image 
            src="/icons/Windmill.svg" 
            alt="Windmill background" 
            width={800}
            height={800}
            className="opacity-40 w-48 h-48 hidden md:block md:w-auto md:h-auto"
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 pb-6 md:pb-12 relative z-10">
          <div className="flex flex-col items-start mb-8 md:mb-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-fisterra text-center md:text-left text-blue mb-2">
              Discover the values of Fuentelo&apos;s Sparkling Grape Juice
            </h1>
            <p className="text-sm md:text-base text-light-blue text-center md:text-left mb-3">
              Rooted in Spain&apos;s winemaking heritage, we craft premium sparkling grape juice that turns everyday moments into celebrations—honoring the past, celebrating the present, and inspiring the future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-fisterra text-rose mb-2">Celebration</h3>
              <p className="text-rose text-sm md:text-base">Our drinks are made to elevate life&apos;s moments, turning everyday gatherings into unforgettable occasions.</p>
            </div>
            <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-fisterra text-rose mb-2">Excellence</h3>
                <p className="text-rose text-sm md:text-base">From vineyard to bottle, we uphold the highest standards to deliver a premium sparkling grape juice.</p>
            </div>
            <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-fisterra text-white-grape mb-2">Grit</h3>
                <p className="text-white-grape text-sm md:text-base">Born from generations of farmers, we carry forward their relentless work ethic, perseverance, and determination in every bottle to meet you at the milestones you&apos;re chasing.</p>
            </div>
            <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-fisterra text-white-grape mb-2">Tradition</h3>
                <p className="text-white-grape text-sm md:text-base">We believe tradition connects us to the moments and values that matter most. In every bottle, we honor the rituals of gathering, celebrating, and creating memories that stand the test of time.</p>
            </div>

            {/* {VALUES.map((v) => (
              <div key={v.title} className="text-left">
                <h3 className="text-3xl font-fisterra text-rose">{v.title}</h3>
                <p className="text-rose text-base">{v.desc}</p>
              </div>
            ))} */}

          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-neutral to-white-grape-light h-12"></section>

      {/* Legacy Section */}
      <section className="w-full bg-white-grape-light py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center pb-8 md:pb-12">
            <div className="border-2 border-light-blue rounded-4xl overflow-hidden shadow-xl max-w-5xl w-full p-2">
              <Image src="/images/Abuelos.jpg" alt="Vineyard" width={900} height={600} className="object-cover object-top w-full h-48 md:h-120 rounded-3xl" />
            </div>
          </div>
          <h2 className="font-fisterra text-3xl sm:text-4xl md:text-5xl text-blue mb-4 md:mb-4">A SPARKLING LEGACY FROM SPAIN</h2>
          <p className="text-light-blue mb-2 text-sm md:text-base">
            Every summer for over 20 years, our family has returned to Spain—drawn to the warmth of our heritage and the simple joys of time spent together. Our mother's hometown, La Alberca de Záncara in Castilla-La Mancha, welcomed us with family meals, afternoon siestas, and the timeless rhythm of life in the countryside.
          </p>
          <p className="text-light-blue mb-2 text-sm md:text-base">
            It was during one of these summers that we discovered <em>mosto</em>—a naturally sweet, sparkling grape juice made fresh at the local winery. Its vibrant flavor and purity instantly transported us, connecting us to something deeper: our roots, and the memory of our beloved grandfather, Nemesio.
          </p>
          <p className="text-light-blue mb-2 text-sm md:text-base">
            Born in 1933 in La Alberca de Záncara, Abuelo Nemesio was a farmer devoted to his vineyards and family. Though he wasn't much of a wine drinker, he cherished mosto—sharing it with loved ones during the grape harvest, a time of unity and gratitude. His values of hard work, togetherness, and love for the land inspire everything we do.
          </p>
          <p className="text-light-blue mb-8 text-sm md:text-base">
            Fuentelo&apos;s is our tribute to him. We craft our sparkling grape juices from the very grapes he once tended—Airén and Tempranillo varieties grown in La Mancha. More than a beverage, Fuentelo&apos;s is a celebration of legacy, family, and the joyful spirit of Spanish life.
          </p>
        </div>
      </section>

      {/* Essence Section */}
      <section className="w-full bg-white-grape-light py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <h2 className="font-fisterra text-3xl sm:text-4xl md:text-5xl text-blue mb-4 md:mb-4">THE ESSENCE OF CASTILLA-LA MANCHA IN EVERY SIP</h2>
            <p className="text-light-blue text-sm md:text-base">
              Experience the essence of Castilla-La Mancha with every sip of Fuentelo&apos;s Sparkling Grape Juice — a region where sun-drenched vineyards 
              stretch across the Spanish horizon and tradition runs deep in the soil. Crafted from hand-selected grapes grown in this historic heartland, 
              each bottle captures the vibrant spirit, natural sweetness, and refined character of the land. 
              It&apos;s more than a drink — it&apos;s a celebration of culture, heritage, and the rich terroir of La Mancha in sparkling form.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="border-2 border-light-blue rounded-4xl overflow-hidden shadow-xl max-w-3xl w-full p-2">
              <Image src="/images/Vineyards.jpg" alt="Vineyard" width={900} height={400} className="object-cover w-full h-48 md:h-80 rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-white-grape-light to-neutral h-12"></section>

      {/* Where You Can Find Us Section */}
      {/* <section className="w-full bg-neutral pt-10">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-4xl font-fisterra text-blue text-right mb-10">WHERE YOU CAN FIND US</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {STORES.map((store) => (
              <div key={store.name} className="flex flex-col items-center">
                <Image src={store.logo} alt={store.name} width={200} height={200}/>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section className="w-full bg-neutral py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-fisterra text-3xl sm:text-4xl md:text-5xl text-blue mb-6 md:mb-4 md:text-center">OUR TEAM</h2>
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
            {TEAM.map((member) => (
              <div key={member.name} className="flex flex-col items-center p-4 md:p-6">
                {/* Placeholder headshot */}
                <div className="w-24 h-24 md:w-40 md:h-40 rounded-full bg-light-blue flex items-center justify-center mb-4">
                  <span className="text-2xl md:text-4xl text-white font-bold">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-sm md:text-base text-blue font-bold text-center">{member.name}</h4>
                <p className="text-light-blue text-sm md:text-base text-center">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-neutral py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-fisterra text-2xl sm:text-3xl md:text-5xl text-blue mb-4 md:mb-4">CONTACT US</h2>
          <div className="text-blue text-sm md:text-base">
            <div>123 Celebration Lane, Napa Valley, CA 94558</div>
            <div>707.555.1234</div>
          </div>
        </div>
      </section>
    </div>
  );
} 