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

      <div className="max-w-4xl mx-auto">
        {experienceData.map((exp, idx) => (
          <div key={idx} className="card-border rounded-2xl p-8 md:p-10 relative overflow-hidden bg-black-100 group">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white-50/5 rounded-full blur-[100px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Timeline / Title Info */}
              <div className="md:col-span-5 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-black-200 border border-black-50 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white-50" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <h4 className="text-lg font-semibold text-white-50 mt-1">{exp.company}</h4>
                </div>

                <div className="flex items-center gap-2 text-sm text-blue-50 font-mono bg-black-200 border border-black-50 w-fit px-3 py-1.5 rounded-full">
                  <Calendar className="w-4 h-4" />
                  {exp.duration}
                </div>

                <p className="text-blue-50 text-sm leading-relaxed max-w-sm">
                  {exp.description}
                </p>
              </div>

              {/* Responsibilities & Stack */}
              <div className="md:col-span-7 space-y-6 md:border-l md:border-black-50 md:pl-8">
                
                <div className="space-y-4">
                  <h5 className="text-xs font-bold uppercase tracking-widest text-blue-50">Key Contributions</h5>
                  <ul className="space-y-3">
                    {exp.keyContributions.map((contrib, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-white-50 mt-1.5 shrink-0" />
                        <span>{contrib}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 pt-4 border-t border-black-50">
                  <h5 className="text-xs font-bold uppercase tracking-widest text-blue-50">Technologies & Projects</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-black-200 border border-white-50/20 text-white-50">
                        {tech}
                      </span>
                    ))}
                    {exp.projects.map((proj) => (
                      <span key={proj} className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded border border-black-50 text-blue-50">
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
