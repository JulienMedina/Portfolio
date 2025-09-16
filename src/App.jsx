// App.jsx
import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Skills from "./components/sections/Skills";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col bg-black">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-gray-dark-12 focus:text-black focus:px-3 focus:py-2 focus:rounded-xs">Aller au contenu</a>
      {/* Header */}
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

      {/* Main content */}
      <main id="main" className="relative z-10  ">
        <Hero isNavOpen={isNavOpen} />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
