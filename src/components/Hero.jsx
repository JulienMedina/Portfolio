import React, { useEffect, useState } from "react";
import Button from "./Button";
import DiagonalLinesSVG from "../assets/Group.svg";
import Ellipse from "../assets/Ellipse.svg";
const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  // Utilisation d'un useEffect pour lancer l'animation une fois la page chargée
  useEffect(() => {
    setLoaded(true);
    console.log("hero loaded"); // Active l'animation au chargement
  }, []);

  return (
    <section
      aria-labelledby="hero-title" // Lien avec le titre principal
      className={`flex size-full flex-col items-center justify-center bg-grayDark-1 text-grayDark-12 transition-opacity duration-2000
         ease-in-out ${loaded ? "opacity-100" : "opacity-0"}`}
    >
      {/* SVG décoratif */}
      <img
        src={DiagonalLinesSVG}
        alt="Lignes diagonales décoratives"
        className="absolute left-0 top-0 ml-4 mt-4 h-auto w-1/2 md:w-1/3 lg:w-1/4"
      />
      <img
        src={Ellipse}
        alt="Ellipse décorative"
        // eslint-disable-next-line tailwindcss/no-unnecessary-arbitrary-value
        className="absolute left-1/2 top-10 z-0 h-auto w-[90%] -translate-x-1/2 md:w-3/5 lg:w-[50%]"
      />

      {/* Titre principal */}
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
      <Button
        href="#contact"
        ariaLabel="Contacter Julien Medina"
        className="z-10"
      >
        /Work with me
      </Button>
    </section>
  );
};

export default Hero;
