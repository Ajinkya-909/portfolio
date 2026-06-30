import { useEffect, useRef } from "react";
import skillsData from "../data/skills.json";
import { Code2, Laptop, Server, Database, Cpu, GraduationCap, Terminal } from "lucide-react";

type CategoryKey = keyof typeof skillsData;

export default function Skills() {
  const categories = Object.keys(skillsData) as CategoryKey[];
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const resumeTimeoutRef = useRef<any>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;

    const scroll = () => {
      const isMobile = window.innerWidth < 768;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      if (isMobile && !isPausedRef.current && maxScroll > 0) {
        // If we reached the end (with 1px buffer), loop back to the start
        if (container.scrollLeft >= maxScroll - 1) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 0.8; // scroll speed in pixels per frame
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  const handleStart = () => {
    isPausedRef.current = true;
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
  };

  const handleEnd = () => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, 1500); // Resume auto-scroll after 1.5 seconds of inactivity
  };

  const getCategoryIcon = (key: CategoryKey) => {
    switch (key) {
      case "languages":
        return <Code2 className="w-5 h-5 text-white-50" />;
      case "frontend":
        return <Laptop className="w-5 h-5 text-white-50" />;
      case "backend":
        return <Server className="w-5 h-5 text-white-50" />;
      case "databases":
        return <Database className="w-5 h-5 text-white-50" />;
      case "tools":
        return <Cpu className="w-5 h-5 text-white-50" />;
      case "learning":
        return <GraduationCap className="w-5 h-5 text-white-50" />;
      default:
        return <Terminal className="w-5 h-5 text-white-50" />;
    }
  };

  return (
    <section id="skills" className="py-12 sm:py-20 max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-white">
          Technical Arsenal
        </h2>
        <p className="text-blue-50 max-w-xl mx-auto">
          A comprehensive view of the languages, tools, and frameworks I use to build scalable systems.
        </p>
      </div>

      {/* Masonry Layout for Skills Categories on desktop, horizontal auto-scroller on mobile */}
      <div
        ref={scrollRef}
        onMouseEnter={handleStart}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
        onTouchCancel={handleEnd}
        className="flex flex-row overflow-x-auto gap-6 pb-6 custom-scrollbar w-full md:block md:columns-2 lg:columns-3 md:gap-6 md:space-y-6"
      >
        {categories.map((key) => {
          const category = skillsData[key];
          return (
            <div
              key={key}
              className="break-inside-avoid bg-black-100 border border-black-50 rounded-2xl p-6 relative group overflow-hidden w-[280px] sm:w-[320px] md:w-auto shrink-0 md:shrink"
            >
              {/* Subtle hover background gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white-50/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-black-200 border border-black-50 flex items-center justify-center">
                    {getCategoryIcon(key)}
                  </div>
                  <h3 className="font-bold text-xl text-white">{category.name}</h3>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg border border-black-50 bg-black-200/80 hover:bg-black-200 hover:scale-[1.02] hover:border-white-50/20 transition-all duration-200 cursor-default"
                    >
                      {skill.icon ? (
                        <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />
                      ) : (
                        <div className="w-5 h-5 rounded bg-black-100 border border-black-50 flex items-center justify-center">
                          <Terminal className="w-2.5 h-2.5 text-blue-50" />
                        </div>
                      )}
                      <span className="font-semibold text-white-50 text-xs md:text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
