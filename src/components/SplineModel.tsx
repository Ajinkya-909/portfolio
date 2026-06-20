import { useState, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import ErrorBoundary from "./ErrorBoundary";

const WebGLFallback = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-black-100/80 backdrop-blur-md rounded-2xl border border-white-50/10 relative overflow-hidden p-8 text-center">
    {/* Decorative Tech Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none z-0" />
    
    {/* Glowing background blurs */}
    <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] bg-red-500/10 rounded-full blur-[80px] pointer-events-none" />
    
    {/* Tech Circle & Warning Reticle */}
    <div className="relative z-10 w-44 h-44 mb-6 flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="glitchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fd5c79" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#839cb5" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#282732" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* Outer Spinning Dash Ring */}
        <circle cx="100" cy="100" r="75" stroke="url(#glitchGrad)" strokeWidth="1.5" strokeDasharray="8 6" className="animate-[spin_60s_linear_infinite]" />
        
        {/* Middle Pulse Ring */}
        <circle cx="100" cy="100" r="55" stroke="#fd5c79" strokeWidth="1" strokeDasharray="3 15" strokeOpacity="0.6" className="animate-[ping_3s_ease-in-out_infinite]" />
        
        {/* Central Glitched Wireframe Geometry (Torus structure) */}
        <path d="M 60,100 A 40,40 0 1,0 140,100 A 40,40 0 1,0 60,100" stroke="#839cb5" strokeWidth="2" strokeDasharray="5 2" className="opacity-40" />
        <path d="M 70,100 A 30,30 0 1,0 130,100 A 30,30 0 1,0 70,100" stroke="#fd5c79" strokeWidth="1" strokeDasharray="20 4" className="opacity-70 animate-[spin_15s_linear_infinite]" />
        
        {/* Warning Icon inside */}
        <path d="M100 75 L112 98 H88 Z" fill="#fd5c79" className="opacity-30" />
        <path d="M100 81 V89" stroke="#d9ecff" strokeWidth="2" strokeLinecap="round" />
        <circle cx="100" cy="93" r="1.25" fill="#d9ecff" />
      </svg>
    </div>

    <div className="relative z-10 max-w-md space-y-4">
      <div className="space-y-1">
        <span className="text-[10px] font-mono tracking-[0.25em] text-red-400 uppercase font-bold bg-red-950/40 border border-red-500/20 px-2.5 py-1 rounded">
          ERR_WEBGL_CONTEXT_LOST
        </span>
        <h3 className="text-lg font-bold text-white-50 pt-2">3D Engine Offline</h3>
      </div>
      
      <p className="text-xs text-blue-50/80 leading-relaxed max-w-sm mx-auto">
        WebGL context was suspended. This typically happens when system memory is heavily utilized, graphics hardware is throttled, or drivers are reset.
      </p>

      <div className="text-[10px] font-mono text-blue-50/50 bg-black-200/50 border border-white-50/5 p-3 rounded-lg text-left space-y-1.5 max-w-xs mx-auto">
        <div className="flex justify-between"><span>Diagnostic Code:</span> <span className="text-white-50">0x04F2 (LOST)</span></div>
        <div className="flex justify-between"><span>Hardware Accel:</span> <span className="text-green-400">Available</span></div>
        <div className="flex justify-between"><span>Recovery Vector:</span> <span className="text-white-50">Context Restoration</span></div>
      </div>
      
      <button 
        onClick={() => window.location.reload()} 
        className="px-5 py-2.5 rounded-lg border border-white-50/15 bg-white-50/5 hover:bg-white-50/10 text-xs font-semibold text-white-50 transition-all hover:scale-105 cursor-pointer flex items-center gap-2 mx-auto"
      >
        <span>Reload 3D Space</span>
      </button>
    </div>
  </div>
);

export default function SplineModel() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isContextLost, setIsContextLost] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleContextLost = (event: Event) => {
      console.warn("WebGL context loss detected by SplineModel container listener.", event);
      setIsContextLost(true);
    };

    container.addEventListener("webglcontextlost", handleContextLost, true);
    return () => {
      container.removeEventListener("webglcontextlost", handleContextLost, true);
    };
  }, [isDesktop]);

  if (!isDesktop) {
    return null;
  }

  if (isContextLost) {
    return (
      <div className="relative w-full h-[500px] xl:h-[600px] overflow-hidden flex items-center justify-center">
        <WebGLFallback />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full h-[500px] xl:h-[600px] overflow-hidden flex items-center justify-center">
      <ErrorBoundary fallback={<WebGLFallback />}>
        {/* Premium Loader Section */}
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-black/90 backdrop-blur-sm transition-opacity duration-500">
            <div className="relative flex items-center justify-center">
              {/* Inner pulsing glow circle */}
              <div className="absolute w-24 h-24 rounded-full border border-blue-50/20 bg-blue-500/5 animate-ping opacity-75" />
              {/* Outer spinning gradient ring */}
              <div className="relative w-16 h-16 rounded-full border-2 border-t-white-50 border-r-blue-50/30 border-b-blue-50/10 border-l-white-50/40 animate-spin" />
            </div>
            <div className="mt-6 flex flex-col items-center gap-2">
              <span className="text-sm font-mono tracking-[0.2em] uppercase text-white-50 font-semibold animate-pulse">
                Initializing 3D Space
              </span>
              <span className="text-[11px] font-mono text-blue-50/60">
                Loading interactive environment...
              </span>
            </div>
          </div>
        )}

        {/* Spline 3D Scene */}
        <div 
          className={`w-full h-full transition-all duration-1000 ease-out ${
            isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <Spline 
            scene="https://prod.spline.design/32qv2birAJW4tCjP/scene.splinecode" 
            onLoad={() => setIsLoading(false)}
          />
        </div>

        {/* Bottom overlay mask to blend spline content seamlessly */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

        {/* Cover overlay to block Spline logo */}
        <div className="absolute bottom-5 right-4.5 w-[140px] h-[38px] bg-black z-20 pointer-events-none" />
      </ErrorBoundary>
    </div>
  );
}
