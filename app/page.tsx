import Contact from "@/componenets/Contact";
import Footer from "@/componenets/Footer";
import Hero from "@/componenets/Hero";
import LogoSection from "@/componenets/LogoSection";
import NavBar from "@/componenets/NavBar";
import Showcase from "@/componenets/Showcase";
import Techstack from "@/componenets/TechStack";
import Skills from "@/componenets/ui/Skills";


export default function Home() {
  return(
    <>
    <NavBar/>
    <Hero/>
    <LogoSection/>
    <Showcase/>
    <Techstack/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  )
}
