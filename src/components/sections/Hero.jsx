import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import Button from "../base/Button";
import Ellipse from "../../assets/Ellipse.svg";
import DiagonalLinesSVGComponent from "../base/DiagonalLinesSVGComponent";

const Hero = ({ isNavOpen }) => {
  const [loaded, setLoaded] = useState(false);
  const titleRef = useRef(null); // Référence au titre pour l'animation

  // Tableau contenant les paramètres des animations pour chaque SVG
  // Tableau contenant les paramètres des animations pour chaque SVG
  const diagonalLinesSettings = [
    { startX: -200, startY: -100, delay: 0.2, duration: 5 },
    { startX: -100, startY: -200, delay: 0.3, duration: 5 },
    { startX: -300, startY: -300, delay: 0.4, duration: 6 },
    { startX: -200, startY: -250, delay: 0.5, duration: 6 },
    { startX: -100, startY: -350, delay: 0.6, duration: 7 },
    { startX: -200, startY: -125, delay: 0.7, duration: 6 },
    { startX: -300, startY: -175, delay: 0.8, duration: 7 },
    { startX: -200, startY: -225, delay: 0.9, duration: 7 },
    { startX: -100, startY: -115, delay: 1, duration: 7 },
    { startX: -200, startY: -225, delay: 1.1, duration: 7 },
    { startX: -200, startY: -325, delay: 1.2, duration: 6 },
    { startX: -150, startY: -150, delay: 1.3, duration: 5 },
    { startX: -300, startY: -275, delay: 1.4, duration: 5 },
    { startX: -250, startY: -325, delay: 1.5, duration: 6 },
    { startX: -100, startY: -75, delay: 1.6, duration: 6 },
  ];

  useEffect(() => {
    setLoaded(true);

    // Animation GSAP pour le titre
    const tl = gsap.timeline();
    tl.fromTo(
      titleRef.current.children,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power4.out",
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <section
      aria-labelledby="hero-title"
      className={` flex h-screen flex-col items-center justify-start bg-grayDark-1 text-grayDark-12 transition-opacity duration-1000 ease-in-out 2xl:min-h-max ${
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
        <div className="container relative top-36 mx-auto px-4 pt-20 md:pt-32 lg:-top-10 lg:pt-40 ">
          <h1
            id="hero-title"
            ref={titleRef} // Référence pour le GSAP
            className="relative z-20 mb-4 text-center font-sans text-4xl font-bold text-grayDark-11 md:text-6xl "
          >
            {["Full", "stack", "web", "developer"].map((word, index) => (
              <span key={index} className="inline-block">
                {word}&nbsp;
              </span>
            ))}
          </h1>

          <p className="relative z-20 mb-6 text-center font-mono text-lg text-grayDark-11 md:text-2xl ">
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
          {/* Badge Scroll down */}
          <div className="relative -bottom-40 flex justify-center">
            <span className="animate-pulse rounded-sm border border-grayDark-12  px-4 py-1 text-sm text-grayDark-12 ">
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
