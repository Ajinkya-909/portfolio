import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import socials from "../data/socials.json";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner max-w-[1400px] w-full mx-auto flex items-center justify-between">
        {/* Left Side: Name */}
        <a href="#" className="text-xl md:text-2xl font-bold tracking-widest uppercase hover:text-white-50 transition-colors">
          Ajinkya Deshmukh
        </a>

        {/* Center: Navigation */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex space-x-8">
            {["Work", "Skills", "Experience", "Contact"].map((item) => (
              <li key={item} className="group relative text-sm tracking-wide text-blue-50 hover:text-white transition-colors cursor-pointer">
                <a href={`#${item.toLowerCase()}`}>{item}</a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side: Resume Button */}
        <div className="flex items-center">
          <a
            href={socials.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 text-sm font-semibold border border-black-50 bg-black-100 rounded-lg hover:bg-black-50 transition-all duration-300 hover:scale-[1.02]"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}
