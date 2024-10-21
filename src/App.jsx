import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { useState } from "react";
import Skills from "./components/sections/Skills";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col bg-black">
      {/* Header */}
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

      {/* Main content */}
      <main className="pt-5 xl:pt-40 ">
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
