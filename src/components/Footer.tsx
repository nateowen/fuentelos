import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center bg-neutral pt-8 px-8 border-t border-green">
      <div className="w-full max-w-6xl bg-neutral/40 px-6 py-6 flex flex-col items-center justify-between h-fit md:h-50">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pb-6">
          <div className="font-fisterra text-2xl text-blue">FUENTELO&apos;S</div>
          <nav className="flex gap-8 md:gap-18 text-blue text-base font-medium">
            <Link href="/" className="hover:text-rose transition-colors">Home</Link>
            <Link href="/about" className="hover:text-rose transition-colors">About Us</Link>
            <Link href="/beverages" className="hover:text-rose transition-colors">Beverages</Link>
            <Link href="/blog" className="hover:text-rose transition-colors">Blog</Link>
          </nav>
          <div className="flex gap-4 items-center text-3xl text-blue/80">
            <a href="https://www.instagram.com/drinkfuentelos/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-rose transition-colors"><FaInstagram /></a>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs text-blue/60 border-t border-light-blue pt-6 md:pt-4 gap-2">
          <div>©2025 Fuentelo&apos;s Premier. All rights reserved.</div>
          {/* <div className="flex gap-4">
            <a href="#" className="hover:text-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue transition-colors">Cookies Settings</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
} 