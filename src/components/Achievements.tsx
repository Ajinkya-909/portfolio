import achievementsData from "../data/achievements.json";
import { GraduationCap, Trophy, Code2, Briefcase, Award, Star, Shield } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4" />
  </svg>
);

export default function Achievements() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "graduation": return <GraduationCap className="w-5 h-5 text-white-50" />;
      case "school": return <GraduationCap className="w-5 h-5 text-white-50" />;
      case "book": return <GraduationCap className="w-5 h-5 text-white-50" />;
      case "code": return <Code2 className="w-5 h-5 text-white-50" />;
      case "trophy": return <Trophy className="w-5 h-5 text-white-50" />;
      case "briefcase": return <Briefcase className="w-5 h-5 text-white-50" />;
      case "star": return <Star className="w-5 h-5 text-white-50" />;
      case "shield": return <Shield className="w-5 h-5 text-white-50" />;
      case "github": return <GithubIcon className="w-5 h-5 text-white-50" />;
      default: return <Award className="w-5 h-5 text-white-50" />;
    }
  };

  return (
    <section id="achievements" className="py-12 sm:py-20 max-w-[1400px] mx-auto overflow-hidden">
      
      <div className="text-center mb-16 space-y-4 px-5">
        <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-white">
          Academics & Achievements
        </h2>
        <p className="text-blue-50 max-w-xl mx-auto">
          A blend of academic excellence and continuous professional milestones.
        </p>
      </div>

      {/* Masonry Layout for Academics and Milestones */}
      <div className="px-6 md:px-12">
        {/* We use CSS columns for a true masonry effect on desktop, and horizontal flex on mobile */}
        <div className="flex flex-row overflow-x-auto gap-6 pb-6 custom-scrollbar snap-x snap-mandatory w-full md:block md:columns-2 lg:columns-3 md:gap-6 md:space-y-6">
          
          {/* Academics Cards */}
          {achievementsData.academics.map((academic, idx) => (
            <div key={`acad-${idx}`} className="break-inside-avoid bg-black-100 border border-black-50 rounded-2xl p-6 relative group overflow-hidden w-[280px] sm:w-[320px] md:w-auto shrink-0 md:shrink snap-start">
              <div className="absolute inset-0 bg-gradient-to-br from-white-50/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-black-200 border border-black-50 flex items-center justify-center">
                  {getIcon(academic.icon)}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">{academic.title}</h3>
                  <p className="text-sm text-blue-50 mt-1">{academic.institution}</p>
                </div>
                <div className="flex justify-between items-end pt-4 border-t border-black-50">
                  <span className="text-xs font-mono text-blue-50/50">{academic.year}</span>
                  <span className="text-sm font-bold text-white-50 bg-black-200 px-3 py-1 rounded-full border border-black-50">
                    {academic.score}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Achievements Cards */}
          {achievementsData.achievements.map((achievement, idx) => (
            <div key={`ach-${idx}`} className="break-inside-avoid bg-black-100 border border-black-50 rounded-2xl p-6 relative group overflow-hidden w-[280px] sm:w-[320px] md:w-auto shrink-0 md:shrink snap-start">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-lg bg-black-200 border border-black-50 flex items-center justify-center">
                    {getIcon(achievement.icon)}
                  </div>
                  <span className="text-xs font-mono text-blue-50/50">{achievement.year}</span>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg text-white">{achievement.title}</h3>
                  <p className="text-xs font-semibold text-blue-50 mt-0.5">{achievement.subtitle}</p>
                </div>
                
                <p className="text-sm text-blue-50 leading-relaxed">
                  {achievement.description}
                </p>

                <div className="pt-3 border-t border-black-50">
                  <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-black-200 border border-black-50 text-white-50">
                    {achievement.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
