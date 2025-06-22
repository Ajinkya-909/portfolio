 'use client';
import dynamic from "next/dynamic";

// Eagerly load only above-the-fold components
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import LogoSection from "@/components/LogoSection";

// Lazy load all heavy or below-the-fold components
const Showcase = dynamic(() => import("@/components/Showcase"), {
  loading: () => <div className="min-h-[300px]">Loading Showcase...</div>,
  ssr: false,
});

const Techstack = dynamic(() => import("@/components/TechStack"), {
  loading: () => <div className="min-h-[300px]">Loading Tech Stack...</div>,
  ssr: false,
});

const Skills = dynamic(() => import("@/components/ui/Skills"), {
  loading: () => <div className="min-h-[300px]">Loading Skills...</div>,
  ssr: false,
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="min-h-[300px]">Loading Contact...</div>,
  ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="min-h-[100px]">Loading Footer...</div>,
  ssr: false,
});

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <LogoSection />
      <Showcase />
      <Techstack />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
