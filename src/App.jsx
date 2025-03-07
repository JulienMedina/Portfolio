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
      {/* Header */}
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

      {/* Main content */}
      <main className="relative z-10  ">
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
