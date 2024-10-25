import Card from "../base/Card";
import PortalG from "../../assets/PortalG.svg";
import SmallStar from "../../assets/Portal.svg";
import Vector from "../../assets/Vector.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Portfolio from "../../assets/Portfolio.png";
import CardBackground from "../../assets/CardBackground.png";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const cardRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    // Animation des cartes
    gsap.fromTo(
      cardRef.current.children,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power1.out",
        stagger: 0.2, // Animation en cascade pour les cartes
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation du texte
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation de la ligne vectorielle
    gsap.fromTo(
      lineRef.current,
      { scaleX: 0, transformOrigin: "center" },
      {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section id="works" className="bg-grayDark-1 text-grayDark-12">
      <div className="container mx-auto px-4 py-8 xl:pl-16">
        {/* Alignement du SVG et du titre */}
        <div
          className="mb-8 flex items-center justify-center pr-12 md:justify-start"
          ref={textRef}
        >
          <div className="relative mr-3 w-8 md:w-12 md:pl-4 lg:w-16 lg:pl-8">
            <img
              src={PortalG}
              alt="Grande étoile décorative"
              className="absolute left-[10px] top-[-20px] w-5 sm:left-[28px] sm:w-7"
              aria-hidden="true" // Cache pour les lecteurs d'écran
            />
            <img
              src={SmallStar}
              alt="Petite étoile décorative"
              className="absolute left-[20px] top-[-25px] w-1/3 sm:left-[20px] md:left-[49px]"
              aria-hidden="true"
            />
          </div>
          <h2 className="text-center font-sans text-2xl font-semibold text-grayDark-12 md:text-left md:text-4xl">
            My Work
          </h2>
        </div>

        {/* Contenu des cartes */}
        <div
          className="flex flex-col items-center gap-8 py-8 md:flex-row md:items-start md:justify-center md:px-8 lg:px-12 xl:py-16"
          ref={cardRef}
        >
          <Card
            image={Portfolio}
            title="My Portfolio"
            description="This portfolio showcases my skills in modern web technologies, highlighting my best projects and design concepts. Built with React, Tailwind, and animated with GSAP, it reflects my passion for creating clean, responsive web applications."
            buttonText="Learn More"
            buttonLink="https://github.com/JulienMedina/Portfolio"
          />
          <Card
            image={CardBackground}
            title="Final Project – DWWM Certification"
            description="A collaborative web platform designed to connect players based on their preferences and availability. Presented during my DWWM certification, I contributed significantly to the back-end, managing player interactions, server architecture, and a dedicated API."
            buttonText="Learn More"
            buttonLink="#"
          />
        </div>

        {/* Ligne décorative */}
        <img
          src={Vector}
          alt="Ligne décorative"
          ref={lineRef}
          className="relative mx-auto mt-10 h-[3px] w-full max-w-[95%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-full"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default Projects;
