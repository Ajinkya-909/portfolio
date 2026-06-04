import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import projectsData from "../data/projects.json";
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight, Activity, Cpu, Lock, Sparkles, Workflow } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4" />
  </svg>
);

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const flagshipProjects = projectsData.filter((p) => p.isFlagship);
  const otherProjects = projectsData.filter((p) => !p.isFlagship);

  return (
    <section id="work" className="py-20 max-w-7xl mx-auto px-5 md:px-10 space-y-24">
      
      {/* Flagship Projects Section */}
      <div>
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 text-white-50 text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-4 h-4" />
            FLAGSHIP WORK
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Featured Projects
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {flagshipProjects.map((project) => (
                <div key={project.id} className="flex-[0_0_100%] min-w-0">
                  <div className="card-border bg-black-100 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                    
                    {/* Project Image / Visual */}
                    <div className="relative h-64 lg:h-auto overflow-hidden">
                      <div className="absolute inset-0 bg-black/40 z-10" />
                      <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                    </div>

                    {/* Project Details */}
                    <div className="p-8 md:p-12 space-y-6 flex flex-col justify-center relative">
                      <h3 className="text-3xl md:text-4xl font-bold text-white">{project.name}</h3>
                      <p className="text-blue-50 leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-black-200 border border-black-50 text-white-50">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <ul className="space-y-3 pt-4">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-blue-50">
                            <span className="w-1.5 h-1.5 rounded-full bg-white-50 mt-1.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center gap-4 pt-6">
                        {project.live ? (
                          <a href={project.live} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-lg bg-white-50 text-black font-semibold flex items-center gap-2 hover:scale-105 transition-all">
                            View Live <ExternalLink className="w-4 h-4" />
                          </a>
                        ) : (
                          <button disabled className="px-5 py-2.5 rounded-lg border border-black-50 bg-black-200 text-blue-50/50 font-semibold cursor-not-allowed">
                            Project not live for now
                          </button>
                        )}
                        <a href={project.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg border border-black-50 bg-black-200 hover:bg-black-50 text-white-50 transition-colors">
                          <GithubIcon className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          {flagshipProjects.length > 1 && (
            <div className="flex justify-center gap-4 mt-6">
              <button onClick={scrollPrev} className="p-2 rounded-full border border-black-50 bg-black-100 text-blue-50 hover:text-white-50 hover:bg-black-200 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={scrollNext} className="p-2 rounded-full border border-black-50 bg-black-100 text-blue-50 hover:text-white-50 hover:bg-black-200 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* SentinelX Architecture Breakdown (Hardcoded special section) */}
        <div className="mt-12 card-border rounded-xl p-6 md:p-8 bg-black-100/50 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/5 rounded-full blur-2xl pointer-events-none" />
           <div className="flex items-center gap-2 mb-6">
              <Workflow className="w-5 h-5 text-white-50" />
              <h4 className="text-lg font-bold text-white">SentinelX Pipeline Architecture</h4>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { icon: Lock, title: "1. Upload", desc: "Secure log ingestion & validation" },
                { icon: Activity, title: "2. Normalize", desc: "Streaming parser & schema mapping" },
                { icon: Cpu, title: "3. Analyze", desc: "Parallel threat detection engines" },
                { icon: Sparkles, title: "4. Insights", desc: "AI-driven recommendations" }
              ].map((step, i) => (
                <div key={i} className="p-4 rounded-lg bg-black-200 border border-black-50 flex flex-col gap-2">
                   <step.icon className="w-5 h-5 text-white-50" />
                   <h5 className="font-semibold text-white text-sm">{step.title}</h5>
                   <p className="text-xs text-blue-50">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Other Projects Section */}
      <div>
        <div className="mb-10 border-b border-black-50 pb-4">
          <h3 className="text-2xl font-bold text-white tracking-tight">Other Projects</h3>
          <p className="text-blue-50 text-sm mt-1">More of my work worth taking a glance at.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div key={project.id} className="card-border rounded-xl p-6 bg-black-100 hover:border-white-50/20 transition-all group flex flex-col h-full">
              <div className="h-40 rounded-lg overflow-hidden mb-6 relative border border-black-50">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              <div className="flex-1 space-y-4">
                <h4 className="text-xl font-bold text-white">{project.name}</h4>
                <p className="text-sm text-blue-50 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-black-200 border border-black-50 text-white-50">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[9px] font-semibold px-2 py-0.5 rounded bg-black-200 border border-black-50 text-blue-50">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-black-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <a href={project.github} target="_blank" rel="noreferrer" className="p-2 rounded bg-black-200 hover:bg-black-50 text-white-50 transition-colors">
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="p-2 rounded bg-black-200 hover:bg-black-50 text-white-50 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                {!project.live && <span className="text-[10px] uppercase font-mono text-blue-50/50">Not Live</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
