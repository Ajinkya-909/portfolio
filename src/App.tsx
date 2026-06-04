import { useState, useEffect, useRef, type MouseEvent } from "react";
import { 
  ArrowUpRight, 
  Code2, 
  Sparkles, 
  Cpu, 
  Zap, 
  Layers, 
  Mail,
  ArrowRight,
  Menu,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface GlowCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

function GlowCard({ title, description, icon: Icon, badge }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 90;

    cardRef.current.style.setProperty("--start", angle.toString());
    setCoords({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="card card-border rounded-xl p-8 relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-white-50/20 cursor-default group/card"
    >
      {isHovered && (
        <div
          className="glow opacity-25 absolute pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 180px at ${coords.x}px ${coords.y}px, var(--color-white-50), transparent)`,
          }}
        />
      )}
      <div className="relative z-10 space-y-4">
        <div className="flex justify-between items-start">
          <div className="size-12 rounded-lg bg-black-200 border border-black-50 flex items-center justify-center text-white-50 group-hover/card:border-white-50/30 group-hover/card:bg-black-50 transition-all duration-300">
            <Icon className="size-6 text-white-50" />
          </div>
          {badge && (
            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-100 border border-blue-50/20 text-white-50">
              {badge}
            </span>
          )}
        </div>
        <h3 className="text-xl font-semibold text-white group-hover/card:text-white-50 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-blue-50 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative selection:bg-white-50/20 selection:text-white overflow-hidden">
      {/* Decorative background grid and ambient glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0c0e_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 rounded-full bg-blue-50/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-white-50/5 blur-[150px] pointer-events-none" />

      {/* Navbar */}
      <header className={`navbar ${isScrolled ? "scrolled" : "not-scrolled"}`}>
        <div className="inner max-w-7xl w-full">
          <a href="#" className="logo flex items-center gap-2">
            <Code2 className="size-6 text-white-50" />
            <span>AJ.DEV</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop">
            <ul className="flex items-center space-x-8">
              <li className="group">
                <a href="#about" className="text-sm tracking-wide text-blue-50 hover:text-white transition-colors duration-300">
                  About
                </a>
              </li>
              <li className="group">
                <a href="#features" className="text-sm tracking-wide text-blue-50 hover:text-white transition-colors duration-300">
                  Features
                </a>
              </li>
              <li className="group">
                <a href="#tech" className="text-sm tracking-wide text-blue-50 hover:text-white transition-colors duration-300">
                  Tech Stack
                </a>
              </li>
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 border border-black-50 bg-black-100 rounded-lg hover:bg-black-50 transition-colors">
              <GithubIcon className="size-5" />
            </a>
            <div className="contact-btn group">
              <a href="#contact" className="inner flex items-center justify-center">
                <span className="text-sm font-medium">Get in touch</span>
              </a>
            </div>
          </div>

          {/* Mobile menu trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-black-50 bg-black-100 text-white-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[70px] z-50 p-6 bg-black/95 backdrop-blur-md border-b border-black-50 lg:hidden"
          >
            <nav className="flex flex-col space-y-4">
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-blue-50 hover:text-white transition-colors"
              >
                About
              </a>
              <a 
                href="#features" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-blue-50 hover:text-white transition-colors"
              >
                Features
              </a>
              <a 
                href="#tech" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-blue-50 hover:text-white transition-colors"
              >
                Tech Stack
              </a>
              <div className="pt-4 flex items-center justify-between border-t border-black-50">
                <a href="https://github.com" className="flex items-center gap-2 text-blue-50">
                  <GithubIcon className="size-5" /> GitHub
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-lg bg-white text-black font-semibold text-sm"
                >
                  Contact Me
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="relative z-10 pt-32 lg:pt-40">
        
        {/* Hero Section */}
        <section id="about" className="padding-x max-w-7xl mx-auto mb-20 lg:mb-32">
          <div className="hero-layout w-full flex flex-col items-center justify-center text-center">
            
            {/* Badge */}
            <div className="hero-badge flex items-center gap-2 mb-8 border border-white-50/10 shadow-[0_0_20px_rgba(217,236,255,0.05)]">
              <Sparkles className="size-4 text-white-50 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white-50">
                Portfolio Version 2.0 • React & Vite
              </span>
            </div>

            {/* Header with Animation via CSS */}
            <div className="hero-text mb-6">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white-50 to-blue-50 pb-2">
                Hello Developer
              </h1>
            </div>

            {/* Description */}
            <p className="max-w-2xl text-base sm:text-lg md:text-xl text-blue-50 mb-10 leading-relaxed font-normal">
              Welcome to the next evolution. Converting legacy portfolio layers into a highly optimized, 
              interactive React 19 structure utilizing custom variables and Tailwind CSS v4.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-md">
              <div className="group cta-wrapper w-full sm:w-auto min-w-[200px]">
                <a href="#features" className="cta-button w-full block">
                  <div className="bg-circle" />
                  <span className="text flex items-center justify-center gap-2 text-black group-hover:text-white-50">
                    Explore App
                  </span>
                  <div className="arrow-wrapper">
                    <ArrowUpRight className="size-5 text-black group-hover:text-white-50" />
                  </div>
                </a>
              </div>
              
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto px-6 py-4 rounded-lg bg-black border border-black-50 hover:border-white-50/20 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              >
                <span>View Source</span>
                <ArrowRight className="size-4" />
              </a>
            </div>

          </div>
        </section>

        {/* Feature Cards Grid (Glow Cards) */}
        <section id="features" className="padding-x max-w-7xl mx-auto mb-20 lg:mb-32">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Enhanced Architecture
            </h2>
            <p className="text-blue-50 max-w-xl mx-auto text-sm sm:text-base">
              A brief preview of the state-of-the-art technologies driving this upgraded experience.
            </p>
          </div>

          <div className="grid-3-cols">
            <GlowCard 
              title="React 19 Engine"
              description="Harnessing React 19's brand-new rendering engine, Server Actions support, and compiler optimizations for lightning-fast speeds."
              icon={Cpu}
              badge="Core Upgrade"
            />
            <GlowCard 
              title="Tailwind CSS v4"
              description="Configured natively with CSS variables and @theme rules, reducing bundle sizes while retaining custom design tokens."
              icon={Zap}
              badge="Aesthetics"
            />
            <GlowCard 
              title="Modular Vite Builds"
              description="Engineered using Vite's optimized developer server and ES modules compilation for an instantaneous hot-reload flow."
              icon={Layers}
              badge="DevOps"
            />
          </div>
        </section>

        {/* Tech Stack Mini Section */}
        <section id="tech" className="padding-x max-w-7xl mx-auto mb-20 lg:mb-32">
          <div className="card-border rounded-xl p-8 md:p-12 bg-black-100/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-blue-50/5 blur-[80px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div className="px-3 py-1 text-xs font-semibold rounded-full bg-white-50/10 text-white-50 border border-white-50/20 w-fit">
                  Tech Stack Integration
                </div>
                <h3 className="text-2xl md:text-4xl font-bold">
                  Curated Color & Styling Tokens
                </h3>
                <p className="text-blue-50 leading-relaxed text-sm md:text-base">
                  By bringing over the custom CSS variables from the previous branch, color codes and layout tokens are kept fully consistent. This allows seamless transitions across components without any visual discrepancy.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["#d9ecff (white-50)", "#0e0e10 (black-100)", "#282732 (black-200)", "#839cb5 (blue-50)", "#2d2d38 (blue-100)"].map((color) => (
                    <span key={color} className="text-xs px-2.5 py-1.5 rounded-md bg-black-200 border border-black-50 text-blue-50">
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              {/* Graphical Visualizer */}
              <div className="relative flex justify-center items-center h-64 border border-black-50 rounded-xl bg-black-200/30 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#1c1c21_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none" />
                
                {/* Visual blocks */}
                <div className="flex gap-4 relative z-10">
                  <div className="w-16 h-28 rounded-lg bg-black-50 border border-black border-dashed flex flex-col justify-end p-2 transition-all hover:scale-105">
                    <span className="text-[10px] text-blue-50 text-center font-semibold">CSS</span>
                  </div>
                  <div className="w-16 h-36 rounded-lg bg-black-100 border border-black-50 flex flex-col justify-end p-2 transition-all hover:scale-105">
                    <span className="text-[10px] text-blue-50 text-center font-semibold">HTML</span>
                  </div>
                  <div className="w-16 h-44 rounded-lg bg-blue-100 border border-blue-50/20 flex flex-col justify-end p-2 transition-all hover:scale-105">
                    <span className="text-[10px] text-white-50 text-center font-semibold">REACT</span>
                  </div>
                  <div className="w-16 h-32 rounded-lg bg-black-200 border border-black-50 flex flex-col justify-end p-2 transition-all hover:scale-105">
                    <span className="text-[10px] text-blue-50 text-center font-semibold">VITE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer border-t border-black-50 bg-black-100/30 backdrop-blur-md">
        <div className="footer-container max-w-7xl mx-auto py-10 w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-blue-50 font-normal">
            &copy; {new Date().getFullYear()} Ajinkya Deshmukh. All rights reserved.
          </p>
          <div className="socials">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon" aria-label="GitHub">
              <GithubIcon className="size-5 text-blue-50 hover:text-white transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon" aria-label="LinkedIn">
              <LinkedinIcon className="size-5 text-blue-50 hover:text-white transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon" aria-label="Twitter">
              <TwitterIcon className="size-5 text-blue-50 hover:text-white transition-colors" />
            </a>
            <a href="mailto:hello@example.com" className="icon" aria-label="Email">
              <Mail className="size-5 text-blue-50 hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
