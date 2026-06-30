import { Sparkles, Terminal, Cloud, Cpu, Network, BrainCircuit } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-20 max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="card-border rounded-3xl p-8 md:p-10 lg:p-12 relative overflow-hidden bg-black-100 group">
        
        {/* Ambient Decorative Glows */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white-50/5 rounded-full blur-[100px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-50/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Quick Stats & Intro */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-blue-50 text-xs font-mono font-bold tracking-widest uppercase bg-black-200 border border-black-50 px-3 py-1.5 rounded-full w-fit">
                <Sparkles className="w-4 h-4 text-white-50" />
                Who I Am
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-none">
                Ajinkya <br />
                <span className="text-white-50">Deshmukh</span>
              </h2>
              <p className="text-xs sm:text-sm text-blue-50 leading-relaxed font-medium">
                Software Developer specializing in backend engineering, distributed systems, and AI-powered applications.
              </p>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-black-200/50 border border-black-50 hover:border-white-50/20 transition-colors">
                <span className="text-[9px] uppercase font-bold tracking-wider text-blue-50/60 font-mono">Academic Score</span>
                <div className="text-lg font-bold text-white mt-0.5">9.65 CGPA</div>
                <span className="text-[10px] text-blue-50/40">B.Tech Engineering</span>
              </div>
              <div className="p-3.5 rounded-xl bg-black-200/50 border border-black-50 hover:border-white-50/20 transition-colors">
                <span className="text-[9px] uppercase font-bold tracking-wider text-blue-50/60 font-mono">CampusMate Users</span>
                <div className="text-lg font-bold text-white mt-0.5">1,000+</div>
                <span className="text-[10px] text-blue-50/40">Active Students</span>
              </div>
              <div className="p-3.5 rounded-xl bg-black-200/50 border border-black-50 hover:border-white-50/20 transition-colors">
                <span className="text-[9px] uppercase font-bold tracking-wider text-blue-50/60 font-mono">LeetCode Problems</span>
                <div className="text-lg font-bold text-white mt-0.5">150+</div>
                <span className="text-[10px] text-blue-50/40">Streak & Algorithms</span>
              </div>
              <div className="p-3.5 rounded-xl bg-black-200/50 border border-black-50 hover:border-white-50/20 transition-colors">
                <span className="text-[9px] uppercase font-bold tracking-wider text-blue-50/60 font-mono">Current Focus</span>
                <div className="text-lg font-bold text-white mt-0.5">AWS & Cloud</div>
                <span className="text-[10px] text-blue-50/40">Systems Architecture</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Focus Area */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-blue-50 text-xs sm:text-sm leading-relaxed">
              <p>
                I'm a Software Developer and Computer Engineering student passionate about building scalable backend systems, cloud-native architectures, and intelligent software. I enjoy solving complex engineering problems by designing systems that are reliable, maintainable, and built to scale.
              </p>

              <p>
                With hands-on experience from my <span className="text-white font-semibold">Senior Developer Internship</span> and building production-grade platforms like <span className="text-white font-semibold">SentinelX</span> (an AI-powered intrusion detection log pipeline) and <span className="text-white font-semibold">CampusMate</span> (serving 1,000+ active students), I focus on creating systems that operate reliably at scale.
              </p>
            </div>

            {/* Core Interest Badges Panel */}
            <div className="space-y-3 pt-5 border-t border-black-50">
              <h4 className="text-[9px] font-bold uppercase tracking-widest text-blue-50/80 font-mono">
                Key Areas of Focus
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-black-200 border border-black-50">
                  <div className="w-8 h-8 rounded-lg bg-black-100 border border-black-50 flex items-center justify-center shrink-0">
                    <Terminal className="w-4 h-4 text-white-50" />
                  </div>
                  <span className="text-xs font-bold text-white">Backend Engineering</span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-black-200 border border-black-50">
                  <div className="w-8 h-8 rounded-lg bg-black-100 border border-black-50 flex items-center justify-center shrink-0">
                    <Cpu className="w-4 h-4 text-white-50" />
                  </div>
                  <span className="text-xs font-bold text-white">System Design</span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-black-200 border border-black-50">
                  <div className="w-8 h-8 rounded-lg bg-black-100 border border-black-50 flex items-center justify-center shrink-0">
                    <Cloud className="w-4 h-4 text-white-50" />
                  </div>
                  <span className="text-xs font-bold text-white">AWS & Cloud Computing</span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-black-200 border border-black-50">
                  <div className="w-8 h-8 rounded-lg bg-black-100 border border-black-50 flex items-center justify-center shrink-0">
                    <Network className="w-4 h-4 text-white-50" />
                  </div>
                  <span className="text-xs font-bold text-white">Distributed Systems</span>
                </div>

                <div className="flex items-center gap-2.5 p-2 rounded-xl bg-black-200 border border-black-50 sm:col-span-2">
                  <div className="w-8 h-8 rounded-lg bg-black-100 border border-black-50 flex items-center justify-center shrink-0">
                    <BrainCircuit className="w-4 h-4 text-white-50" />
                  </div>
                  <span className="text-xs font-bold text-white">Machine Learning Applications</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
