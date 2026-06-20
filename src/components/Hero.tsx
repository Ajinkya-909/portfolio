import { ArrowRight, Sparkles } from "lucide-react";
import SplineModel from "./SplineModel";

const HERO_WORDS = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

export default function Hero() {
  return (
    <section className="relative min-h-fit sm:min-h-screen pt-28 sm:pt-24 pb-10 sm:pb-20 flex items-start sm:items-center overflow-hidden">
      {/* Decorative Grid & Blur */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0c0e_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-50/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white-50/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left Side: Content */}
        <div className="space-y-6 sm:space-y-8 flex flex-col justify-center relative z-20">

          <div className="hero-text text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight gap-3 md:gap-4">
            <h1>
              Innovating{" "}
              <span className="slide">
                <span className="wrapper">
                  {HERO_WORDS.map((word, index) => (
                    <span key={index} className="flex items-center gap-2 md:gap-3 h-[48px] md:h-[78px] whitespace-nowrap">
                      <img
                        src={word.imgPath}
                        alt={word.text}
                        className="w-8 h-8 md:w-12 md:h-12 p-1.5 md:p-2 bg-white-50 rounded-full"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1 className="text-white-50">and Creating</h1>
            <h1 className="text-blue-50">Real World Projects</h1>
          </div>

          <p className="text-blue-50 max-w-xl text-sm sm:text-lg leading-relaxed">
            I build fast, responsive, and scalable web applications that deliver real value. 
            From crafting engaging front-end interfaces to developing powerful back-end systems.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a href="#contact" className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg bg-white-50 text-black text-sm sm:text-base font-bold flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              Contact Me
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#work" className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg border border-black-50 bg-black-100 hover:bg-black-50 text-sm sm:text-base font-semibold flex items-center gap-2 transition-all">
              View My Work
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-4 sm:pt-6 border-t border-black-50">
            {["CGPA 9.65", "Senior Developer Intern", "150+ LeetCode", "Pune, India"].map((chip) => (
              <span key={chip} className="text-[10px] sm:text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-black-200 border border-black-50 text-white-50 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-blue-50" />
                {chip}
              </span>
            ))}
          </div>

        </div>

        {/* Right Side: Spline 3D Model (Desktop Only) */}
        <div className="hidden lg:flex items-center justify-center relative w-full">
          <SplineModel />
        </div>
      </div>
    </section>
  );
}
