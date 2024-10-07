import React, { useEffect, useState } from "react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  // Utilisation d'un useEffect pour lancer l'animation une fois la page chargée
  useEffect(() => {
    setLoaded(true); // Active l'animation au chargement
  }, []);

  return (
    <section
      className={`flex size-full flex-col items-center justify-center bg-gray-900 text-gray-100 transition-opacity duration-1000 ease-in-out ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Titre principal */}
      <h1 className="mb-4 text-center text-4xl font-bold md:text-6xl">
        Full stack web developer
      </h1>

      {/* Accroche */}
      <p className="mb-6 text-center text-lg md:text-2xl">
        based in Paris, France
      </p>

      {/* Bouton d'appel à l'action */}
      <a
        href="#projects"
        className=" rounded-none border-grayDark-5 bg-grayDark-10 px-6 py-2 text-white transition-colors duration-300 hover:bg-grayDark-4"
      >
        /work with me
      </a>
    </section>
  );
};

export default Hero;
