import skillsData from "../data/skills.json";
import { Code2, Laptop, Server, Database, Cpu, GraduationCap, Terminal } from "lucide-react";

type CategoryKey = keyof typeof skillsData;

export default function Skills() {
  const categories = Object.keys(skillsData) as CategoryKey[];

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

      {/* Masonry Layout for Skills Categories */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {categories.map((key) => {
          const category = skillsData[key];
          return (
            <div
              key={key}
              className="break-inside-avoid bg-black-100 border border-black-50 rounded-2xl p-6 relative group overflow-hidden"
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
