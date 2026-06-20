import { useState } from "react";
import skillsData from "../data/skills.json";
import { Terminal } from "lucide-react";

type CategoryKey = keyof typeof skillsData;

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("languages");
  const categories = Object.keys(skillsData) as CategoryKey[];

  return (
    <section id="skills" className="py-12 sm:py-20 max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-white">
          Technical Arsenal
        </h2>
        <p className="text-blue-50 max-w-xl mx-auto">
          A comprehensive view of the languages, tools, and frameworks I use to build scalable systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Tab Navigation */}
        <div className="lg:col-span-4 flex flex-col gap-2">
          {categories.map((key) => {
            const isActive = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`text-left px-5 py-4 rounded-xl border transition-all duration-300 font-semibold text-sm md:text-base flex items-center justify-between ${
                  isActive
                    ? "bg-black-200 border-white-50/30 text-white-50"
                    : "bg-black-100 border-black-50 text-blue-50 hover:bg-black-200 hover:text-white-50"
                }`}
              >
                {skillsData[key].name}
                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white-50" />}
              </button>
            );
          })}
        </div>

        {/* Right Side: Macbook Mockup */}
        <div className="lg:col-span-8">
          <div className="border border-black-50 rounded-xl bg-black-100 overflow-hidden shadow-2xl relative">
            {/* Window Header */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-black-50 bg-black-200/50">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex items-center bg-black-100 border border-black-50 px-3 py-1 rounded text-[10px] text-blue-50 font-mono tracking-widest gap-2">
                <Terminal className="w-3 h-3" />
                ajinkya.dev/skills/{activeCategory}
              </div>
              <div className="w-10" /> {/* Spacer */}
            </div>

            {/* Window Body */}
            <div className="p-6 md:p-8 min-h-[300px] flex items-start content-start flex-wrap gap-4 relative">
              <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
              
              {skillsData[activeCategory].items.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-black-50 bg-black-200/80 hover:bg-black-200 hover:scale-[1.02] hover:border-white-50/20 transition-all cursor-default z-10"
                >
                  {skill.icon ? (
                    <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" />
                  ) : (
                    <div className="w-6 h-6 rounded bg-black-100 border border-black-50 flex items-center justify-center">
                      <Terminal className="w-3 h-3 text-blue-50" />
                    </div>
                  )}
                  <span className="font-semibold text-white-50 text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
