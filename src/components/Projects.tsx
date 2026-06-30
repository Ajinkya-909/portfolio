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
    <>
      {/* Desktop Layout: Side-by-Side (Unchanged) */}
      <div className="hidden lg:flex w-full lg:h-[520px] rounded-2xl overflow-hidden card-border bg-black-100 flex-row relative">
        {/* Left Column: Project Details */}
        <div className="w-[45%] p-12 flex flex-col justify-between z-10 bg-black-100 border-r border-white/5">
          {/* Stationary Header */}
          <div>
            <div className="text-[10px] font-mono font-bold tracking-widest text-blue-50/60 uppercase mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white-50 animate-pulse" />
              Flagship Project
            </div>
            <h3 className="text-4xl font-extrabold text-white tracking-tight">
              {project.name}
            </h3>
          </div>

          {/* Scrollable Content Container */}
          <div className="flex-1 overflow-y-auto my-4 pr-2 space-y-6 custom-scrollbar">
            <p className="text-sm text-blue-50/90 leading-relaxed max-w-xl">
              {project.description}
            </p>

            {/* Features */}
            <div className="space-y-2">
              <h4 className="text-[10px] font-semibold uppercase tracking-widest text-blue-50/70 font-mono">
                Key Accomplishments
              </h4>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-blue-50/90 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-white-50 mt-1.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-[10px] font-semibold uppercase tracking-widest text-blue-50/70 font-mono">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white-50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stationary Action Buttons */}
          <div className="flex items-center gap-3 pt-6 border-t border-white/10">
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-lg bg-white-50 text-black font-semibold flex items-center gap-1.5 hover:scale-105 transition-all text-sm shadow-lg shadow-white/5 shrink-0"
              >
                View Live <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <span className="px-5 py-2.5 rounded-lg border border-black-50 bg-black-200 text-blue-50/30 font-semibold text-sm shrink-0">
                Project not live
              </span>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg border border-white/10 bg-black/45 hover:bg-black/65 hover:border-white/20 text-white transition-all shadow-lg hover:scale-105 shrink-0"
              title="View Source on GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Column: Visual Showcase (Desktop & Mobile mockup containment) */}
        <div className="w-[55%] relative h-full overflow-hidden bg-black-300 flex items-center justify-center p-0">
          {/* Background Decorative Gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />

          {/* Desktop Mockup Container */}
          <div className={`w-[95%] overflow-hidden relative transition-transform duration-500 hover:scale-[1.01] flex items-center justify-center ${project.smartphoneImage ? 'hidden lg:flex' : 'flex'}`}>
            <img
              src={project.image}
              alt={`${project.name} Desktop`}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Mobile Mockup */}
          {project.smartphoneImage && (
            <div className="absolute right-6 bottom-6 w-[125px] h-[260px] flex items-center justify-center z-20 transition-transform duration-500 hover:scale-105">
              <img
                src={project.smartphoneImage}
                alt={`${project.name} Mobile`}
                className="max-w-full max-h-full object-cover object-top rounded-[12px] border-[2.5px] border-white/20 shadow-2xl"
              />
            </div>
          )}
        </div>
      </div>

      {/* Mobile/Tablet Layout: Flip Card */}
      <div className="w-full h-[550px] lg:hidden relative perspective-1000">
        <div className={`w-full h-full preserve-3d transition-transform duration-700 ease-in-out ${isFlipped ? 'rotate-y-180' : ''}`}>
          
          {/* Front Side: Project Image & Basic Actions */}
          <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden card-border bg-black-100 p-5 flex flex-col justify-between">
            <div className="flex flex-col justify-between h-full w-full">
              {/* Project Title inside front card */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold text-white tracking-tight">{project.name}</h3>
                <span className="text-[9px] font-mono uppercase tracking-wider text-blue-50/50">Featured Project</span>
              </div>

              {/* Clickable Image Container */}
              <div
                onClick={() => setIsFlipped(true)}
                className="relative flex-1 w-full bg-black-300 flex items-center justify-center overflow-hidden rounded-xl cursor-pointer group border border-white/5"
              >
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-30">
                  <span className="text-white text-xs font-semibold bg-black/80 px-3 py-1.5 rounded-full border border-white/10">Click to view info</span>
                </div>
                <img
                  src={project.image}
                  alt={`${project.name} Desktop`}
                  className="max-w-[95%] max-h-[90%] object-contain rounded-lg shadow-xl"
                />
                {project.smartphoneImage && (
                  <div className="absolute right-3 bottom-3 w-[70px] h-[130px] flex items-center justify-center z-20">
                    <img
                      src={project.smartphoneImage}
                      alt={`${project.name} Mobile`}
                      className="max-w-full max-h-full object-contain rounded border border-white/20 shadow-xl"
                    />
                  </div>
                )}
              </div>

              {/* Actions Footer */}
              <div className="mt-4 space-y-2.5">
                <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2.5 rounded-lg bg-white-50 text-black font-bold flex items-center justify-center gap-1.5 text-xs shadow-lg shadow-white/5"
                    >
                      View Live <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="flex-1 py-2.5 rounded-lg border border-black-50 bg-black-200 text-blue-50/30 font-semibold text-center text-xs">
                      Project not live
                    </span>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-lg border border-white/10 bg-black/45 hover:bg-black/65 text-white transition-all shadow-lg shrink-0"
                    title="View Source on GitHub"
                  >
                    <GithubIcon className="w-4.5 h-4.5" />
                  </a>
                </div>

                {/* View Info Trigger */}
                <button
                  onClick={() => setIsFlipped(true)}
                  className="w-full py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white-50 font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  View Info
                </button>
              </div>
            </div>
          </div>

          {/* Back Side: Detailed Project Information */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden card-border bg-black-100 p-5 flex flex-col justify-between">
            <div className="flex flex-col justify-between h-full w-full">
              {/* Stationary Header */}
              <div>
                <div className="text-[10px] font-mono font-bold tracking-widest text-blue-50/60 uppercase mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white-50 animate-pulse" />
                  Flagship Project
                </div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight">
                  {project.name}
                </h3>
              </div>

              {/* Scrollable details content */}
              <div className="flex-1 overflow-y-auto my-4 pr-1.5 space-y-4 custom-scrollbar">
                <p className="text-xs text-blue-50/90 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-semibold uppercase tracking-widest text-blue-50/70 font-mono">
                    Key Accomplishments
                  </h4>
                  <ul className="space-y-1.5">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-blue-50/90 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-white-50 mt-1.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-semibold uppercase tracking-widest text-blue-50/70 font-mono">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white-50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stationary Action Buttons / Back Button */}
              <div className="pt-4 border-t border-white/5">
                <button
                  onClick={() => setIsFlipped(false)}
                  className="w-full py-2.5 rounded-lg bg-white-50 text-black font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Show Project Image
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
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
    <section id="work" className="py-12 sm:py-20 max-w-[1400px] mx-auto px-6 md:px-12 space-y-16 sm:space-y-24">

      {/* Flagship Projects Section */}
      <div>
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 text-white-50 text-xs font-mono font-bold tracking-widest uppercase">
            <Sparkles className="w-4 h-4" />
            FEATURED WORK
          </div>
          <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-white">
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
