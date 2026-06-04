import achievementsData from "../data/achievements.json";
import certificationsData from "../data/certifications.json";
import { GraduationCap, Trophy, Code2, Briefcase, Award, ExternalLink } from "lucide-react";

export default function Achievements() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "graduation": return <GraduationCap className="w-5 h-5 text-white-50" />;
      case "school": return <GraduationCap className="w-5 h-5 text-white-50" />;
      case "book": return <GraduationCap className="w-5 h-5 text-white-50" />;
      case "code": return <Code2 className="w-5 h-5 text-white-50" />;
      case "trophy": return <Trophy className="w-5 h-5 text-white-50" />;
      case "briefcase": return <Briefcase className="w-5 h-5 text-white-50" />;
      default: return <Award className="w-5 h-5 text-white-50" />;
    }
  };

  return (
    <section id="achievements" className="py-20 max-w-7xl mx-auto overflow-hidden">
      
      <div className="text-center mb-16 space-y-4 px-5">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Academics & Achievements
        </h2>
        <p className="text-blue-50 max-w-xl mx-auto">
          A blend of academic excellence and continuous professional milestones.
        </p>
      </div>

      {/* Masonry Layout for Academics and Milestones */}
      <div className="px-5 md:px-10 mb-20">
        {/* We use CSS columns for a true masonry effect */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          
          {/* Academics Cards */}
          {achievementsData.academics.map((academic, idx) => (
            <div key={`acad-${idx}`} className="break-inside-avoid bg-black-100 border border-black-50 rounded-2xl p-6 relative group overflow-hidden">
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

          {/* Milestones Cards */}
          {achievementsData.milestones.map((milestone, idx) => (
            <div key={`mile-${idx}`} className="break-inside-avoid bg-black-100 border border-black-50 rounded-2xl p-6 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 space-y-4">
                <div className="w-10 h-10 rounded-lg bg-black-200 border border-black-50 flex items-center justify-center">
                  {getIcon(milestone.icon)}
                </div>
                <h3 className="font-bold text-lg text-white">{milestone.title}</h3>
                <ul className="space-y-2 pt-2">
                  {milestone.achievements.map((item, i) => (
                    <li key={i} className="text-sm text-blue-50 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white-50 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Certifications Infinite Marquee */}
      <div className="py-10 bg-black-100/50 border-y border-black-50 relative flex overflow-x-hidden group/marquee">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
        
        <div className="marquee-box animate-[marquee_40s_linear_infinite] group-hover/marquee:[animation-play-state:paused] flex gap-6 px-3">
          {[...certificationsData, ...certificationsData].map((cert, idx) => (
            <div key={idx} className="marquee-item flex-none w-80 bg-black-200 border border-black-50 rounded-xl p-5 hover:border-white-50/30 transition-all cursor-pointer group">
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <h4 className="font-bold text-white text-sm line-clamp-1">{cert.name}</h4>
                  <p className="text-xs text-blue-50">{cert.issuer}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-black-100 border border-black-50 flex items-center justify-center shrink-0 group-hover:bg-white-50 group-hover:text-black transition-colors">
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
              <div className="mt-4 text-[10px] font-mono text-blue-50/50 uppercase tracking-widest">
                Issued {cert.date}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
