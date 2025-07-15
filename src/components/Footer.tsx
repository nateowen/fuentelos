import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center bg-neutral py-8 px-8">
      <div className="w-full max-w-6xl rounded-xl border border-green bg-neutral/40 shadow-md px-6 py-6 flex flex-col items-center justify-between h-fit md:h-50">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 mb-4">
          <div className="font-fisterra text-xl text-blue">FUENTELO'S</div>
          <nav className="flex gap-8 text-blue/80 text-base font-medium">
            <Link href="/" className="hover:text-rose">Home</Link>
            <Link href="/about" className="hover:text-rose">About Us</Link>
            <Link href="/beverages" className="hover:text-rose">Beverages</Link>
          </nav>
          <div className="flex gap-4 items-center text-xl text-blue/80">
            <a href="#" aria-label="Instagram" className="hover:text-rose"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Facebook" className="hover:text-rose"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="TikTok" className="hover:text-rose"><i className="fab fa-tiktok"></i></a>
            <a href="#" aria-label="YouTube" className="hover:text-rose"><i className="fab fa-youtube"></i></a>
            <a href="#" aria-label="Pinterest" className="hover:text-rose"><i className="fab fa-pinterest"></i></a>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs text-blue/60 border-t border-light-blue pt-3 gap-2">
          <div>©2025 Fuentelo's Premier. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue">Privacy Policy</a>
            <a href="#" className="hover:text-blue">Terms of Service</a>
            <a href="#" className="hover:text-blue">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 