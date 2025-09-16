import { useEffect, useState, useRef, lazy, Suspense } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import Button from "../base/Button";
import Ellipse from "../../assets/svg/Ellipse.min.svg";
import DiagonalLinesSVG from "../../assets/svg/Group.min.svg";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

const LazyHeroScene = lazy(() => import("../layout/HeroScene"));

const Hero = ({ isNavOpen }) => {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const splittedWords = ["Full", "stack", "web", "developer"].map((word) => word.split(""));

  useEffect(() => {
    setLoaded(true);
    if (reducedMotion) return;
    const letters = containerRef.current?.querySelectorAll('[data-letter=true]');
    if (!letters?.length) return;
    gsap.set(letters, { y: "100%" });
    gsap.to(letters, { y: "0%", duration: 1, ease: "power2.out", stagger: 0.03 });
  }, [reducedMotion]);

  return (
    <section
      aria-labelledby="hero-title"
      className={`relative flex h-screen flex-col items-center justify-center
                  overflow-hidden bg-gray-dark-1 text-gray-dark-12 
                  transition-opacity duration-1000 ease-in-out 
                  ${loaded ? "opacity-100" : "opacity-0"}`}
    >
      <Suspense fallback={<div>Chargement de la scène 3D...</div>}>
        <div className="absolute inset-0 z-0">
          <LazyHeroScene reducedMotion={reducedMotion} />
        </div>
      </Suspense>
      <img
        src={Ellipse}
        alt=""
        aria-hidden="true"
        width="1200"
        height="800"
        loading="lazy"
        className="absolute left-1/2 top-56 z-10 h-auto w-[120%] -translate-x-1/2 md:w-4/5 lg:top-20 lg:w-3/4"
      />
      <img
        src={DiagonalLinesSVG}
        alt=""
        loading="lazy"
        aria-hidden="true"
        className="absolute left-0 top-0 w-48 md:w-64 lg:w-96"
      />
      {!isNavOpen && (
        <div className="@container container mx-auto px-4 pt-24 md:pt-16 lg:pt-20">
          <h1
            id="hero-title"
            className="relative z-20 mb-4 text-center font-sans text-4xl font-bold text-gray-dark-11 md:text-6xl"
            ref={containerRef}
          >
            {splittedWords.map((letters, wordIndex) => (
              <span
                key={wordIndex}
                className="mr-2 inline-block overflow-hidden"
              >
                {letters.map((letter, letterIndex) => (
                  <span
                    key={letterIndex}
                    data-letter="true"
                    className="inline-block"
                  >
                    {letter}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <p className="relative z-20 mb-6 text-center font-mono text-lg text-gray-dark-11 md:text-2xl">
            basé à Paris, France
          </p>
          {!isNavOpen && (
            <div className="flex justify-center">
              <Button
                href="#contact"
                className="z-10 rounded-xs"
                ariaLabel="Contacter Julien Medina"
                variant="outline"
              >
                /Me contacter
              </Button>
            </div>
          )}
          <div className="absolute bottom-28 left-1/2 z-20 -translate-x-1/2 flex justify-center md:bottom-16 lg:bottom-20 pointer-events-none">
            <span className="animate-pulse rounded-xs border border-gray-dark-12 px-4 py-1 text-sm text-gray-dark-12">
              Scroll
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

Hero.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
};

export default Hero;
