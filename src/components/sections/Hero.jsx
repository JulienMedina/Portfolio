import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TypewriterComponent from "../base/Typewriter";
import Button from "../base/Button";
import Ellipse from "../../assets/Ellipse.svg";
import DiagonalLinesSVGComponent from "../base/DiagonalLinesSVGComponent";

const Hero = ({ isNavOpen }) => {
  const [loaded, setLoaded] = useState(false);

  // Tableau contenant les paramètres des animations pour chaque SVG
  const diagonalLinesSettings = [
    { startX: -200, startY: 0, delay: 0, duration: 8 },
    { startX: -100, startY: 0, delay: 0.5, duration: 12 },
    { startX: -300, startY: 0, delay: 1, duration: 14 },
    { startX: -200, startY: 0, delay: 1.5, duration: 10 },
    { startX: -100, startY: 0, delay: 2, duration: 12 },
    { startX: -200, startY: 0, delay: 2.5, duration: 14 },
    { startX: -300, startY: 0, delay: 3, duration: 10 },
    { startX: -200, startY: 0, delay: 3.5, duration: 12 },
    { startX: -100, startY: 0, delay: 4, duration: 14 },
    { startX: -200, startY: 0, delay: 0, duration: 8 },
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      aria-labelledby="hero-title"
      className={` flex h-screen flex-col items-center justify-start bg-grayDark-1 text-grayDark-12 transition-opacity duration-1000 ease-in-out ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Utilisation de .map() pour générer plusieurs SVGs */}
      {diagonalLinesSettings.map((settings, index) => (
        <DiagonalLinesSVGComponent
          key={index}
          startX={settings.startX}
          startY={settings.startY}
          delay={settings.delay}
          duration={settings.duration}
        />
      ))}

      <img
        src={Ellipse}
        alt="Ellipse décorative"
        className="absolute left-1/2 top-56 z-0 h-auto w-[120%] -translate-x-1/2 md:w-4/5 lg:top-20 lg:w-3/4"
      />

      {!isNavOpen && (
        <div className="container relative top-36 mx-auto px-4 pt-20 md:pt-32 lg:-top-10 lg:pt-40">
          <h1
            id="hero-title"
            className="relative z-20 mb-4 text-center font-sans text-4xl font-bold text-grayDark-11 md:text-6xl"
          >
            <TypewriterComponent textArray={["Full stack web developer"]} />
          </h1>

          <p className="relative z-20 mb-6 text-center font-mono text-lg text-grayDark-11 md:text-2xl">
            based in Paris, France
          </p>

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
