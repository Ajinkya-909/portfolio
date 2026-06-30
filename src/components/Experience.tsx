import experienceData from "../data/experience.json";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-20 max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-white">
          Professional Experience
        </h2>
      </div>

      <div className={`flex flex-row overflow-x-auto gap-6 pb-6 custom-scrollbar snap-x snap-mandatory w-full ${experienceData.length === 1
          ? "justify-center"
          : experienceData.length === 2
            ? "justify-start lg:justify-center"
            : "justify-start"
        }`}>
        {experienceData.map((exp, idx) => (
          <div
            key={idx}
            className="w-[300px] sm:w-[450px] md:w-[500px] card-border rounded-2xl p-6 sm:p-8 relative overflow-hidden bg-black-100 group shrink-0 snap-start flex flex-col justify-between"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white-50/5 rounded-full blur-[100px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 flex flex-col h-full justify-between gap-6">
              <div className="space-y-4">

                {/* Title Info */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">{exp.role}</h3>
                    <h4 className="text-base sm:text-lg font-semibold text-white-50">{exp.company}</h4>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-black-200 border border-black-50 flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 text-white-50" />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-blue-50 font-mono bg-black-200 border border-black-50 w-fit px-3 py-1.5 rounded-full">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.duration}
                </div>

                <p className="text-blue-50 text-xs sm:text-sm leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Contributions */}
                <div className="space-y-3 pt-2">
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-blue-50">Key Contributions</h5>
                  <ul className="space-y-2">
                    {exp.keyContributions.map((contrib, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-white/80 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-white-50 mt-1.5 shrink-0" />
                        <span>{contrib}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies & Projects */}
              <div className="space-y-3 pt-4 border-t border-black-50">
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-blue-50">Technologies & Projects</h5>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-black-200 border border-white-50/20 text-white-50">
                      {tech}
                    </span>
                  ))}
                  {exp.projects.map((proj) => (
                    <span key={proj} className="text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border border-black-50 text-blue-50">
                      {proj}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
