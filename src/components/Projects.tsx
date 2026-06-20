import { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import projectsData from "../data/projects.json";
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4" />
  </svg>
);

interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  features: string[];
  image: string;
  smartphoneImage?: string;
  github: string;
  live: string;
  isFlagship: boolean;
}

function ProjectCard({ project }: { project: Project }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full h-[520px] lg:h-[480px] perspective-1000">
      <div 
        className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT FACE */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden card-border bg-black-100 flex flex-col justify-end ${
          isFlipped ? "pointer-events-none z-0" : "pointer-events-auto z-10"
        }`}>
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0 flex items-center justify-center bg-black-100">
            {/* Mobile background view (hidden on desktop) */}
            <div className="absolute inset-0 w-full h-full lg:hidden flex items-center justify-center">
              {project.smartphoneImage ? (
                // If smartphone image exists, show it full-bleed
                <img 
                  src={project.smartphoneImage} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-102" 
                />
              ) : (
                // Fallback: contained landscape image with blurred background
                <>
                  <img 
                    src={project.image} 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 pointer-events-none" 
                  />
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-contain relative z-10 transition-transform duration-700 hover:scale-102" 
                  />
                </>
              )}
            </div>

            {/* Desktop background view (hidden on mobile) */}
            <div className="absolute inset-0 w-full h-full hidden lg:block">
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-102" 
              />
            </div>

            {/* Dark gradient overlay for button readability at the bottom */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-20" />
          </div>

          {/* Front Content (positioned above background) */}
          <div className="relative z-10 p-6 md:p-10 flex flex-col justify-end h-full">
            {/* Actions Bar */}
            <div className="flex flex-row flex-nowrap items-center justify-between w-full gap-2 md:gap-4">
              <div className="flex items-center gap-2 md:gap-3 shrink-0">
                {project.live ? (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="px-3 py-2 md:px-5 md:py-2.5 rounded-lg bg-white-50 text-black font-semibold flex items-center gap-1.5 md:gap-2 hover:scale-105 transition-all text-xs md:text-sm shadow-lg shrink-0"
                  >
                    View Live <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </a>
                ) : (
                  <button 
                    disabled 
                    className="px-3 py-2 md:px-5 md:py-2.5 rounded-lg border border-black-50 bg-black-200 text-blue-50/30 font-semibold cursor-not-allowed text-xs md:text-sm shrink-0"
                  >
                    Project not live
                  </button>
                )}
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 md:p-2.5 rounded-lg border border-white/10 bg-black/40 hover:bg-black/60 hover:border-white/20 text-white transition-colors shadow-lg shrink-0"
                  title="View Source on GitHub"
                >
                  <GithubIcon className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
              <button 
                onClick={() => setIsFlipped(true)}
                className="px-3 py-2 md:px-5 md:py-2.5 rounded-lg border border-white-50/20 bg-white/10 hover:bg-white/20 text-white font-semibold flex items-center gap-1.5 md:gap-2 transition-all hover:scale-105 text-xs md:text-sm cursor-pointer shadow-lg shrink-0"
              >
                More Info <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* BACK FACE */}
        <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden card-border bg-black-100 flex flex-col justify-between ${
          isFlipped ? "pointer-events-auto z-10" : "pointer-events-none z-0"
        }`}>
          {/* Background Image (dimmed and blurred) */}
          <div className="absolute inset-0 z-0">
            {/* Mobile blurred bg (hidden on desktop) */}
            <img 
              src={project.smartphoneImage || project.image} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover blur-md scale-105 lg:hidden" 
            />
            {/* Desktop blurred bg (hidden on mobile) */}
            <img 
              src={project.image} 
              alt="" 
              className="absolute inset-0 w-full h-full object-cover blur-md scale-105 hidden lg:block" 
            />
            {/* Very dark overlay to prioritize readability */}
            <div className="absolute inset-0 bg-black/85" />
          </div>

          {/* Back Content (positioned above background) */}
          <div className="relative z-10 p-6 md:p-10 lg:p-12 flex flex-col h-full justify-between overflow-hidden">
            {/* Header */}
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                {project.name}
              </h3>
              <p className="text-xs md:text-sm text-blue-50/90 leading-relaxed mb-4 border-b border-white/10 pb-3">
                {project.description}
              </p>
            </div>

            {/* Scrollable Features & Tech Stack */}
            <div className="flex-1 overflow-y-auto pr-2 mb-6 custom-scrollbar space-y-6">
              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-blue-50/70 mb-2 font-mono">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[9px] md:text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white-50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-blue-50/70 mb-2 font-mono">
                  Key Accomplishments
                </h4>
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-blue-50/95 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-white-50 mt-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Back Button */}
            <div className="pt-4 border-t border-white/10">
              <button 
                onClick={() => setIsFlipped(false)}
                className="px-5 py-2.5 rounded-lg border border-white-50/20 bg-white/10 hover:bg-white/20 text-white font-semibold flex items-center gap-2 transition-all hover:scale-105 text-xs md:text-sm cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" /> Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
    <section id="work" className="py-20 max-w-[1400px] mx-auto px-6 md:px-12 space-y-24">
      
      {/* Flagship Projects Section */}
      <div>
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 text-white-50 text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-4 h-4" />
            FEATURED WORK
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
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          {flagshipProjects.length > 1 && (
            <>
              <button onClick={scrollPrev} className="absolute left-2 md:-left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full border border-black-50 bg-black-100 text-blue-50 hover:text-white-50 hover:bg-black-200 transition-colors shadow-xl">
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button onClick={scrollNext} className="absolute right-2 md:-right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full border border-black-50 bg-black-100 text-blue-50 hover:text-white-50 hover:bg-black-200 transition-colors shadow-xl">
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </>
          )}
        </div>

      </div>

      {/* Other Projects Section */}
      <div>
        <div className="mb-10 border-b border-black-50 pb-4">
          <h3 className="text-2xl font-bold text-white tracking-tight">Other Projects</h3>
          <p className="text-blue-50 text-sm mt-1">More of my work worth taking a glance at.</p>
        </div>

        <div className="flex flex-row overflow-x-auto gap-6 pb-6 custom-scrollbar snap-x snap-mandatory">
          {otherProjects.map((project) => (
            <div key={project.id} className="w-[280px] sm:w-[320px] md:w-[350px] shrink-0 snap-start card-border rounded-xl p-6 bg-black-100 hover:border-white-50/20 transition-all group flex flex-col h-full">
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
