import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero"; //import About from "./components/About";
import Projects from "./components/Projects";
//import Projects from "./components/Projects";
//import Skills from "./components/Skills";
//import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative flex min-h-screen flex-col bg-grayDark-1">
      <Header />
      <main className="flex grow pt-20">
        <Hero className="size-full" />
      </main>
      <Projects />
      <Footer />
      {/* <About /> */}
      {/* <Projects /> */}
      {/* <Skills /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;
