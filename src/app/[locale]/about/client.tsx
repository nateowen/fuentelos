"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const TEAM = [
  {
    name: "Shawn Stewart",
    roleKey: "roleFounderCeo",
    headshot: "/headshots/Shawn Stewart Headshot.JPG",
  },
  {
    name: "Cristina Stewart",
    roleKey: "roleCofounderCfo",
    headshot: "/headshots/Cristina Stewart Headshot.jpg",
  },
  {
    name: "Rosa de la Fuente",
    roleKey: "roleCoo",
    headshot: "/headshots/rosa.jpg",
  },
  {
    name: "Karen Gudmundson",
    roleKey: "roleBizDev",
    headshot: "/headshots/Karen Gudmundson Headshot.jpg",
  },
  {
    name: "Sofia Stewart",
    roleKey: "roleSocialMedia",
    headshot: "/headshots/sofia.jpg",
  },
  {
    name: "Nate Owen",
    roleKey: "roleCto",
    headshot: "/headshots/nate.jpg",
  },
] as const;

export default function AboutClient() {
  const t = useTranslations("About");
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header & Values Section */}
      <section className="w-full bg-neutral relative overflow-hidden pt-24">
        <div className="max-w-6xl mx-auto px-4 pb-6 md:pb-12 relative z-10">
          <div className="flex flex-col items-start mb-8 md:mb-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-fisterra text-center md:text-left text-blue mb-2">
              {t("title")}
            </h1>
            <p className="text-sm md:text-base text-light-blue text-center md:text-left mb-3">
              {t("intro")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 text-left">
            <div className="border-l-2 border-rose text-rose pl-4">
              <h3 className="text-xl sm:text-2xl md:text-4xl font-fisterra mb-2">
                {t("valueCelebrationTitle")}
              </h3>
              <p className="text-sm md:text-base">
                {t("valueCelebrationBody")}
              </p>
            </div>
            <div className="border-l-2 border-rose text-rose pl-4">
              <h3 className="text-xl sm:text-2xl md:text-4xl font-fisterra mb-2">
                {t("valueExcellenceTitle")}
              </h3>
              <p className="text-sm md:text-base">
                {t("valueExcellenceBody")}
              </p>
            </div>
            <div className="border-l-2 border-white-grape text-white-grape pl-4">
              <h3 className="text-xl sm:text-2xl md:text-4xl font-fisterra mb-2">
                {t("valueGritTitle")}
              </h3>
              <p className="text-sm md:text-base">
                {t("valueGritBody")}
              </p>
            </div>
            <div className="border-l-2 border-white-grape text-white-grape pl-4">
              <h3 className="text-xl sm:text-2xl md:text-4xl font-fisterra mb-2">
                {t("valueTraditionTitle")}
              </h3>
              <p className="text-sm md:text-base">
                {t("valueTraditionBody")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-neutral to-white-grape-light h-12"></section>

      {/* Legacy Section */}
      <section className="w-full bg-white-grape-light py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center pb-8 md:pb-12">
            <div className="border-2 border-light-blue rounded-4xl overflow-hidden shadow-xl max-w-5xl w-full p-2">
              <Image
                src="/images/Abuelos.jpg"
                alt={t("legacyImageAlt")}
                width={900}
                height={600}
                className="object-cover object-top w-full h-48 md:h-120 rounded-3xl"
              />
            </div>
          </div>
          <h2 className="font-fisterra text-3xl sm:text-4xl md:text-5xl text-blue mb-4 md:mb-4">
            {t("legacyTitle")}
          </h2>
          <p className="text-light-blue mb-2 text-sm md:text-base">
            {t("legacyP1")}
          </p>
          <p className="text-light-blue mb-2 text-sm md:text-base">
            {t("legacyP2Pre")}
            <em>{t("legacyP2Mosto")}</em>
            {t("legacyP2Post")}
          </p>
          <p className="text-light-blue mb-2 text-sm md:text-base">
            {t("legacyP3")}
          </p>
          <p className="text-light-blue mb-8 text-sm md:text-base">
            {t("legacyP4")}
          </p>
        </div>
      </section>

      {/* Essence Section */}
      <section className="w-full bg-white-grape-light py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <h2 className="font-fisterra text-3xl sm:text-4xl md:text-5xl text-blue mb-4">
              {t("essenceTitle")}
            </h2>
            <p className="text-light-blue text-sm md:text-base">
              {t("essenceBody")}
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="border-2 border-light-blue rounded-4xl overflow-hidden shadow-xl max-w-3xl w-full p-2">
              <Image
                src="/images/Vineyards.jpg"
                alt={t("essenceImageAlt")}
                width={900}
                height={400}
                className="object-cover w-full h-48 md:h-80 rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-white-grape-light to-neutral h-12"></section>

      {/* Team Section */}
      <section className="w-full bg-neutral py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-fisterra text-3xl sm:text-4xl md:text-5xl text-blue mb-6 md:mb-4 md:text-center">
            {t("teamTitle")}
          </h2>
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center p-4 md:p-6"
              >
                <div className="w-24 h-24 md:w-40 md:h-40 rounded-full overflow-hidden mb-4">
                  <Image
                    src={member.headshot}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h4 className="text-sm md:text-base text-blue font-bold text-center">
                  {member.name}
                </h4>
                <p className="text-light-blue text-sm md:text-base text-center">
                  {t(member.roleKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-neutral py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-fisterra text-2xl sm:text-3xl md:text-5xl text-blue mb-4 md:mb-4">
            {t("contactTitle")}
          </h2>
          <div className="text-light-blue text-sm md:text-base">
            <div>801.500.5094</div>
          </div>
        </div>
      </section>
    </div>
  );
}
