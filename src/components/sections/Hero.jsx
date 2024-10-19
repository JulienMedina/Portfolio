import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import TypewriterComponent from "../base/Typewriter";
import Button from "../base/Button";
import DiagonalLinesSVG from "../../assets/Group.svg";
import Ellipse from "../../assets/Ellipse.svg";

const Hero = ({ isNavOpen }) => {
  const [loaded, setLoaded] = useState(false);
  const svgRefs = useRef([]);

  // Utilisation d'un useEffect pour lancer l'animation une fois la page chargée
  useEffect(() => {
    setLoaded(true);

    // Animation GSAP pour un effet de défilement continu
    svgRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        {
          x: -200, // Position initiale en haut à gauche
          y: -100,
          opacity: 1, // Apparition progressive
        },
        {
          x: 400, // Position finale
          y: 450, // Descend vers le bas
          opacity: 0, // Disparition progressive
          duration: 8 + index * 2, // Légère différence de timing pour chaque SVG
          ease: "linear", // Pas de rebond
          repeat: -1, // Répétition infinie
        }
      );
    });
  }, []);

  return (
    <section
      aria-labelledby="hero-title"
      className={`mb-[44vh] flex h-screen flex-col items-center justify-start bg-grayDark-1 text-grayDark-12 transition-opacity duration-1000 ease-in-out ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* SVG décoratif : plusieurs instances pour un effet continu */}
      <img
        src={DiagonalLinesSVG}
        alt="Lignes diagonales décoratives 1"
        className="absolute left-0 top-0 z-0 w-1/2 md:w-1/3 lg:w-1/4"
        ref={(el) => (svgRefs.current[0] = el)}
      />
      <img
        src={DiagonalLinesSVG}
        alt="Lignes diagonales décoratives 2"
        className="absolute left-0 top-[-50px] z-0 w-1/2 md:w-1/3 lg:w-1/4"
        ref={(el) => (svgRefs.current[1] = el)}
      />
      <img
        src={DiagonalLinesSVG}
        alt="Lignes diagonales décoratives 3"
        className="absolute left-0 top-[-100px] z-0 w-1/2 md:w-1/3 lg:w-1/4"
        ref={(el) => (svgRefs.current[2] = el)}
      />
      <img
        src={DiagonalLinesSVG}
        alt="Lignes diagonales décoratives 3"
        className="absolute left-0 top-[-100px] z-0 w-1/2 md:w-1/3 lg:w-1/4"
        ref={(el) => (svgRefs.current[3] = el)}
      />
      <img
        src={DiagonalLinesSVG}
        alt="Lignes diagonales décoratives 3"
        className="absolute left-0 top-[-100px] z-0 w-1/2 md:w-1/3 lg:w-1/4"
        ref={(el) => (svgRefs.current[4] = el)}
      />
      <img
        src={DiagonalLinesSVG}
        alt="Lignes diagonales décoratives 3"
        className="absolute left-0 top-[-50px] z-0 w-1/2 md:w-1/3 lg:w-1/4"
        ref={(el) => (svgRefs.current[5] = el)}
      />

      {/* Ellipse décorative */}
      <img
        src={Ellipse}
        alt="Ellipse décorative"
        className="absolute left-1/2 top-56 z-0 h-auto w-[120%] -translate-x-1/2 md:w-4/5 lg:top-20 lg:w-3/4"
      />

      {/* Titre principal */}
      {!isNavOpen && (
        <div className="container relative top-36 lg:-top-10 mx-auto px-4 pt-20 md:pt-32 lg:pt-40">
          <h1
            id="hero-title"
            className="relative z-20 mb-4 text-center font-sans text-4xl font-bold text-grayDark-11 md:text-6xl"
          >
            <TypewriterComponent textArray={["Full stack web developer"]} />
          </h1>

          {/* Accroche */}
          <p className="relative z-20 mb-6 text-center font-mono text-lg text-grayDark-11 md:text-2xl">
            based in Paris, France
          </p>

          {/* Bouton d'appel à l'action */}
          {!isNavOpen && (
            <div className="flex justify-center">
              <Button
                href="#contact"
                className="z-10"
                ariaLabel="Contacter Julien Medina"
              >
                /Work with me
              </Button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

Hero.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
};

export default Hero;
