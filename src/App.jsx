import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { useState } from "react";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col bg-grayDark-1">
      {/* Header */}
      <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />

      {/* Main content */}
      <main
        className="
      
      
  pt-20"
      >
        {" "}
        {/* Utiliser flex grow pour occuper tout l'espace */}
        <Hero isNavOpen={isNavOpen} />
      </main>

      {/* Section Projects */}
      <Projects />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
