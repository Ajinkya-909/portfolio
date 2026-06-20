import { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";

export default function SplineModel() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isDesktop) {
    return null;
  }

  return (
    <div className="relative w-full h-[500px] xl:h-[600px] overflow-hidden flex items-center justify-center">

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
    </div>
  );
}
