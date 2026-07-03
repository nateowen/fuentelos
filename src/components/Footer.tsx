import { FaInstagram } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="w-full flex justify-center bg-neutral pt-8 px-8 border-t border-green">
      <div className="w-full max-w-6xl bg-neutral/40 px-6 py-6 flex flex-col items-center justify-between h-fit md:h-50">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pb-6 md:gap-0 md:pb-0">
          <div className="font-fisterra text-2xl text-blue">FUENTELO&apos;S</div>
          <nav className="flex gap-8 md:gap-12 text-blue text-base font-medium">
            <Link href="/" className="hover:text-rose transition-colors uppercase">{t("home")}</Link>
            <Link href="/about" className="hover:text-rose transition-colors uppercase">{t("about")}</Link>
            <Link href="/beverages" className="hover:text-rose transition-colors uppercase">{t("beverages")}</Link>
            {/* <Link href="/blog" className="hover:text-rose transition-colors uppercase">{t("blog")}</Link> */}
          </nav>
          <div className="flex gap-4 items-center text-3xl text-blue/80">
            <a href="https://www.instagram.com/drinkfuentelos/" target="_blank" rel="noopener noreferrer" aria-label={t("instagram")} className="hover:text-rose transition-colors"><FaInstagram /></a>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs text-blue/60 border-t border-light-blue pt-6 md:pt-4 gap-2">
          <div>{t("rights")}</div>
        </div>
      </div>
    </footer>
  );
}
