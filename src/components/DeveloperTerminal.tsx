import { useState, useEffect, useRef } from "react";
import { Terminal, FileJson, FileText, Play, RefreshCw, Sparkles } from "lucide-react";

type Tab = "profile" | "terminal" | "skills";

export default function DeveloperTerminal() {
  const [activeTab, setActiveTab] = useState<Tab>("profile");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const consoleBodyRef = useRef<HTMLDivElement>(null);

  // Profile data
  const profileData = {
    name: "Ajinkya Deshmukh",
    role: "Software Engineer / Backend & Cloud",
    location: "Pune, India",
    academics: {
      degree: "B.Tech",
      cgpa: "9.65 / 10"
    },
    internship: "Senior Developer Intern",
    leetcode: "150+ solved",
    passion: "Building scalable backend microservices & cloud architectures"
  };

  // Simulator commands
  const runSimulation = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setTerminalLogs([]);
    
    const logs = [
      "Initializing portfolio environment...",
      "Connecting to PostgreSQL database... Connected.",
      "Checking AWS cloud infrastructure... Active (us-east-1).",
      "Loading backend models and controllers...",
      "Analyzing optimization metrics...",
      "Running test suite: 18 passed, 0 failed.",
      "Compiling TypeScript production bundle...",
      "Applying serverless route configurations...",
      "Deployment success! Server online at: https://ajinkya.dev",
      "Ajinkya Deshmukh v2.0.0 ready to build great things! 🚀"
    ];

    for (let i = 0; i < logs.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setTerminalLogs((prev) => [...prev, logs[i]]);
    }
    setIsRunning(false);
  };

  useEffect(() => {
    if (activeTab === "terminal" && terminalLogs.length === 0 && !isRunning) {
      runSimulation();
    }
  }, [activeTab]);

  useEffect(() => {
    if (consoleBodyRef.current) {
      consoleBodyRef.current.scrollTop = consoleBodyRef.current.scrollHeight;
    }
  }, [terminalLogs]);

  return (
    <div className="w-full max-w-xl mx-auto rounded-2xl border border-white-50/10 bg-black-100/60 backdrop-blur-md overflow-hidden shadow-2xl flex flex-col h-[400px] md:h-[450px] transition-all duration-300 hover:border-white-50/20">
      
      {/* Top Bar (macOS Window Control Style) */}
      <div className="flex items-center justify-between px-4 py-3 bg-black-200/40 border-b border-white-50/5">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-xs font-mono font-semibold text-blue-50/60 flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5" />
          ajinkya-console ~ v2.0
        </div>
        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Tabs Menu */}
      <div className="flex bg-black-200/20 border-b border-white-50/5 px-2">
        <button
          onClick={() => setActiveTab("profile")}
          className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono font-medium border-b-2 transition-all ${
            activeTab === "profile"
              ? "border-white-50 text-white bg-white-50/5"
              : "border-transparent text-blue-50/50 hover:text-blue-50/80"
          }`}
        >
          <FileJson className="w-3.5 h-3.5 text-yellow-400" />
          profile.json
        </button>
        <button
          onClick={() => setActiveTab("terminal")}
          className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono font-medium border-b-2 transition-all ${
            activeTab === "terminal"
              ? "border-white-50 text-white bg-white-50/5"
              : "border-transparent text-blue-50/50 hover:text-blue-50/80"
          }`}
        >
          <Terminal className="w-3.5 h-3.5 text-green-400" />
          build.sh
        </button>
        <button
          onClick={() => setActiveTab("skills")}
          className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono font-medium border-b-2 transition-all ${
            activeTab === "skills"
              ? "border-white-50 text-white bg-white-50/5"
              : "border-transparent text-blue-50/50 hover:text-blue-50/80"
          }`}
        >
          <FileText className="w-3.5 h-3.5 text-blue-400" />
          skills.md
        </button>
      </div>

      {/* Console Screen Body */}
      <div ref={consoleBodyRef} className="flex-1 p-5 overflow-y-auto font-mono text-xs sm:text-sm leading-relaxed text-blue-50/90 custom-scrollbar select-text bg-black/40">
        
        {/* Tab 1: Profile JSON */}
        {activeTab === "profile" && (
          <div className="space-y-1">
            <span className="text-pink-400">const</span> <span className="text-blue-400">developer</span> = {"{"}
            <div className="pl-5 space-y-1">
              <div>
                <span className="text-purple-400">"name"</span>: <span className="text-emerald-400">"{profileData.name}"</span>,
              </div>
              <div>
                <span className="text-purple-400">"role"</span>: <span className="text-emerald-400">"{profileData.role}"</span>,
              </div>
              <div>
                <span className="text-purple-400">"location"</span>: <span className="text-emerald-400">"{profileData.location}"</span>,
              </div>
              <div>
                <span className="text-purple-400">"academics"</span>: {"{"}
                <div className="pl-5">
                  <span className="text-purple-400">"degree"</span>: <span className="text-emerald-400">"{profileData.academics.degree}"</span>,
                  <br />
                  <span className="text-purple-400">"cgpa"</span>: <span className="text-amber-400">{profileData.academics.cgpa}</span>
                </div>
                {"}"},
              </div>
              <div>
                <span className="text-purple-400">"experience"</span>: <span className="text-emerald-400">"{profileData.internship}"</span>,
              </div>
              <div>
                <span className="text-purple-400">"leetcode"</span>: <span className="text-amber-400">"{profileData.leetcode}"</span>,
              </div>
              <div>
                <span className="text-purple-400">"focus"</span>: <span className="text-emerald-400">"{profileData.passion}"</span>
              </div>
            </div>
            {"};"}
          </div>
        )}

        {/* Tab 2: Terminal simulation */}
        {activeTab === "terminal" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-white-50/5 p-2 rounded-lg border border-white-50/5 mb-3">
              <span className="text-[11px] text-blue-50/50">Status: {isRunning ? "Running pipeline..." : "Completed"}</span>
              <button 
                onClick={runSimulation} 
                disabled={isRunning}
                className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold bg-white-50 text-black hover:bg-white-50/80 rounded transition-all disabled:opacity-50"
              >
                {isRunning ? (
                  <RefreshCw className="w-3 h-3 animate-spin" />
                ) : (
                  <Play className="w-3 h-3 fill-current" />
                )}
                Run script
              </button>
            </div>
            
            <div className="space-y-1">
              <div className="flex gap-2">
                <span className="text-green-400">➜</span>
                <span className="text-blue-300">~/portfolio</span>
                <span className="text-white-50">./build.sh</span>
              </div>
              
              {terminalLogs.map((log, idx) => {
                const isSuccess = log.includes("success") || log.includes("ready");
                const isError = log.includes("failed");
                return (
                  <div key={idx} className="flex gap-2 pl-2">
                    {isSuccess ? (
                      <span className="text-green-400">✔</span>
                    ) : isError ? (
                      <span className="text-red-400">✘</span>
                    ) : (
                      <span className="text-blue-50/40">⠏</span>
                    )}
                    <span className={isSuccess ? "text-green-400 font-semibold" : ""}>{log}</span>
                  </div>
                );
              })}
              
              {isRunning && (
                <div className="flex gap-2 pl-2 text-white-50 animate-pulse">
                  <span>⠋</span>
                  <span>Executing tasks...</span>
                </div>
              )}
              
            </div>
          </div>
        )}

        {/* Tab 3: Skills Markdown */}
        {activeTab === "skills" && (
          <div className="markdown-body space-y-4 text-xs sm:text-[13px]">
            <div className="flex items-center gap-1.5 text-blue-400 border-b border-white-50/10 pb-1 font-bold">
              <Sparkles className="w-4 h-4 text-blue-300 animate-pulse" />
              Technical Competencies
            </div>
            <div className="grid grid-cols-2 gap-4 pt-1">
              <div>
                <span className="text-white-50 font-semibold block mb-1">⚡ CORE BACKEND</span>
                <ul className="list-disc list-inside text-blue-50/70 space-y-1">
                  <li>NodeJS & Express</li>
                  <li>FastAPI & REST</li>
                  <li>System Architecture</li>
                  <li>Database Indexing</li>
                </ul>
              </div>
              <div>
                <span className="text-white-50 font-semibold block mb-1">☁️ DEVOPS & INFRA</span>
                <ul className="list-disc list-inside text-blue-50/70 space-y-1">
                  <li>AWS Cloud Platform</li>
                  <li>Docker Containers</li>
                  <li>CI/CD Workflows</li>
                  <li>Serverless Computing</li>
                </ul>
              </div>
            </div>
            <div className="bg-white-50/5 p-2 rounded-lg border border-white-50/5 mt-4 text-[11px] text-blue-50/60 leading-normal">
              💡 Solid grasp of algorithms (9.65 CGPA) combined with real production-grade deployment experience during internships.
            </div>
          </div>
        )}
      </div>

      {/* Terminal Footer Info */}
      <div className="px-4 py-2 bg-black-200/30 border-t border-white-50/5 flex items-center justify-between text-[10px] font-mono text-blue-50/40">
        <span>Encoding: UTF-8</span>
        <span>Line 1, Column 1</span>
        <span>LF</span>
      </div>
    </div>
  );
}
