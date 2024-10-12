import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import DiagonalLinesSVG from "../assets/Group.svg";
import Ellipse from "../assets/Ellipse.svg";

const Hero = ({ isNavOpen }) => {
  const [loaded, setLoaded] = useState(false);

  // Utilisation d'un useEffect pour lancer l'animation une fois la page chargée
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      aria-labelledby="hero-title" // Lien avec le titre principal
      className={`flex h-screen flex-col items-center justify-start bg-grayDark-1 text-grayDark-12 transition-opacity duration-1000 ease-in-out ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* SVG décoratif */}
      <img
        src={DiagonalLinesSVG}
        alt="Lignes diagonales décoratives"
        className="absolute left-0 top-0 z-0 ml-4 mt-4 h-auto w-1/2 md:w-1/3 lg:w-1/4"
      />
      <img
        src={Ellipse}
        alt="Ellipse décorative"
        className="absolute left-1/2 top-10 z-0 h-auto w-[90%] -translate-x-1/2 md:w-3/5 lg:w-1/2"
      />
      {/* Titre principal */}
      <div className="container mx-auto px-4 pt-20 md:pt-32 lg:pt-40">
        <h1
          id="hero-title"
          className="z-10 mb-4 text-center font-sans text-4xl font-bold text-grayDark-11 md:text-6xl"
        >
          Full stack web developer
        </h1>

        {/* Accroche */}
        <p className="z-10 mb-6 text-center font-mono text-lg text-grayDark-9 md:text-2xl">
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
    </section>
  );
};
Hero.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
};

export default Hero;
