import { useEffect, useState, useRef, lazy, Suspense } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import Button from "../base/Button";
import Ellipse from "../../assets/svg/Ellipse.min.svg";
import DiagonalLinesSVG from "../../assets/svg/Group.min.svg";

// Lazy import de la scène 3D
const LazyHeroScene = lazy(() => import("../layout/HeroScene"));

const Hero = ({ isNavOpen }) => {
  const [loaded, setLoaded] = useState(false);

  // On stocke les refs de *chaque lettre* dans un tableau
  const lettersRef = useRef([]);
  lettersRef.current = []; // On réinitialise pour éviter l’accumulation

  // On découpe nos mots en tableaux de lettres
  const splittedWords = ["Full", "stack", "web", "developer"].map((word) =>
    word.split("")
  );

  useEffect(() => {
    setLoaded(true);

    // Position initiale des lettres (masquées en bas)
    gsap.set(lettersRef.current, { y: "100%" });

    // Animation "split reveal" (remontée depuis y:100%)
    gsap.to(lettersRef.current, {
      y: "0%",
      duration: 1,
      ease: "power2.out",
      stagger: 0.03,
    });
  }, []);

  return (
    <section
      aria-labelledby="hero-title"
      className={`relative flex h-screen flex-col items-center 
                  bg-grayDark-1 text-grayDark-12 
                  transition-opacity duration-1000 ease-in-out 
                  md:justify-center 
                  ${loaded ? "opacity-100" : "opacity-0"}`}
    >
      {/* HeroScene en fond : on le lazy-load avec Suspense */}
      <Suspense fallback={<div>Chargement de la scène 3D...</div>}>
        <div className="absolute inset-0 z-0">
          <LazyHeroScene />
        </div>
      </Suspense>

      {/* Ellipse décorative */}
      <img
        src={Ellipse}
        alt="Ellipse décorative"
        aria-hidden="true"
        width="1200"
        height="800"
        loading="lazy"
        className="absolute left-1/2 top-56 z-10 h-auto w-[120%] 
                   -translate-x-1/2 md:w-4/5 lg:top-20 lg:w-3/4"
      />
      <img
        src={DiagonalLinesSVG}
        alt="Lignes diagonales décoratives"
        loading="lazy"
        className="absolute left-0 top-0 w-48 md:w-64 lg:w-96"
      />

      {/* Section du contenu principal */}
      {!isNavOpen && (
        <div className="container relative mx-auto px-4 pt-64 md:pt-24 lg:pt-32">
          <h1
            id="hero-title"
            className="relative z-20 mb-4 text-center font-sans text-4xl 
                       font-bold text-grayDark-11 md:text-6xl"
          >
            {splittedWords.map((letters, wordIndex) => (
              // Chaque mot est un span "parent" avec overflow:hidden
              <span
                key={wordIndex}
                className="mr-2 inline-block overflow-hidden"
              >
                {letters.map((letter, letterIndex) => (
                  // Chaque lettre est un span qu'on va animer
                  <span
                    key={letterIndex}
                    ref={(el) => lettersRef.current.push(el)}
                    className="inline-block"
                  >
                    {letter}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          {/* Sous-titre */}
          <p
            className="relative z-20 mb-6 text-center font-mono text-lg 
                        text-grayDark-11 md:text-2xl"
          >
            based in Paris, France
          </p>

          {/* Bouton d'appel à l'action */}
          {!isNavOpen && (
            <div className="flex justify-center">
              <Button
                href="#contact"
                className="z-10 rounded-sm"
                ariaLabel="Contacter Julien Medina"
              >
                /Work with me
              </Button>
            </div>
          )}

          {/* Badge Scroll down */}
          <div className="relative -bottom-40 flex justify-center">
            <span
              className="animate-pulse rounded-sm border border-grayDark-12 
                             px-4 py-1 text-sm text-grayDark-12"
            >
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
