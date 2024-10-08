import React, { useEffect, useState } from "react";
import Button from "./Button";
import DiagonalLinesSVG from "../assets/Group.svg";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  // Utilisation d'un useEffect pour lancer l'animation une fois la page chargée
  useEffect(() => {
    setLoaded(true); // Active l'animation au chargement
  }, []);

  return (
    <section
      aria-labelledby="hero-title" // Lien avec le titre principal
      className={`flex size-full flex-col items-center justify-center bg-grayDark-1 text-grayDark-12 transition-opacity duration-1000 ease-in-out ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* SVG décoratif */}
      <img
        src={DiagonalLinesSVG}
        alt="Lignes diagonales décoratives"
        className="absolute left-0 top-0 ml-4 mt-4 h-auto w-1/2 md:w-1/3 lg:w-1/4"
      />
      {/* Titre principal */}
      <h1
        id="hero-title"
        className="mb-4 text-center font-sans text-4xl font-bold text-grayDark-11 md:text-6xl"
      >
        Full stack web developer
      </h1>

      {/* Accroche */}
      <p className="mb-6 text-center font-mono text-lg text-grayDark-9 md:text-2xl">
        based in Paris, France
      </p>

      {/* Bouton d'appel à l'action */}
      <Button href="#contact" ariaLabel="Contacter Julien Medina">
        /Work with me
      </Button>
    </section>
  );
};

export default Hero;
