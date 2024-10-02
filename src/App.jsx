import Header from "./components/Header";
import Footer from "./components/Footer";
//import About from "./components/About";
//import Projects from "./components/Projects";
//import Skills from "./components/Skills";
//import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-grayDark-1">
      <Header />
      <main className="grow"></main>
      <Footer />
      {/* <About /> */}
      {/* <Projects /> */}
      {/* <Skills /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;
