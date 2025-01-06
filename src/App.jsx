import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { useState } from "react";
import Skills from "./components/sections/Skills";
import HeroScene from "./components/layout/HeroScene";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col bg-black">
      <div className="absolute inset-0 z-20 ">
        <HeroScene />
      </div>
      {/* Header */}
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      {/* Hero avec scène en arrière-plan */}

      {/* Main content */}
      <main className="relative z-10 pt-5 xl:pt-40">
        {" "}
        {/* Utiliser flex grow pour occuper tout l'espace */}
        <Hero isNavOpen={isNavOpen} />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>

      {/* Section Projects */}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
