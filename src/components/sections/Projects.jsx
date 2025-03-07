import Card from "../base/Card";
import PortalG from "../../assets/svg/PortalG.svg";
import SmallStar from "../../assets/svg/Portal.svg";
import Vector from "../../assets/svg/Vector.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Portfolio from "../../assets/images/Portfolio.webp";
import CardBackground from "../../assets/images/CardBackground.webp";
import ArtPortfolio from "../../assets/images/ArtPortfolio.webp";
import Dashboard from "../../assets/images/Dashboard.webp";

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
          className="flex flex-col items-stretch gap-8 py-8 md:flex-row md:items-stretch md:justify-center md:px-8 lg:px-12 xl:py-16"
          ref={cardRef}
        >
          <Card
            className="h-full"
            image={Portfolio}
            title="My Portfolio"
            description="A modern, interactive portfolio showcasing my best web projects and design concepts. Built with React, styled using Tailwind CSS, and animated with GSAP, it reflects my passion for clean code and responsive design."
            buttonText="View on GitHub"
            buttonLink="https://github.com/JulienMedina/Portfolio"
          />
          <Card
            className="h-full"
            image={CardBackground}
            title="API"
            description="A collaborative platform connecting players based on their preferences and availability. I developed the back-end, built a RESTful API, managed server architecture, and ensured smooth user interactions. Presented as my final DWWM certification project."
            buttonText="View on GitHub"
            buttonLink="https://github.com/JulienMedina/DWWM-back"
          />
          <Card
            className="h-full"
            image={ArtPortfolio}
            title="Artist Portfolio"
            description="A modern website highlighting an artist's portfolio and exhibitions. Developed with a Strapi back-end and a Next.js front-end featuring dynamic galleries, smooth GSAP animations, and an integrated contact form powered by Nodemailer."
            buttonText="View on GitHub"
            buttonLink="https://github.com/Charlie-Gauvin/art-porfolio-frontend"
            demoLink="https://www.patrickgauvinart.com/"
          />
          <Card
            className="h-full"
            image={Dashboard}
            title="Dashboard"
            description="This project is a solution for Frontend Mentor's Time Tracking Dashboard  challenge. It’s an interactive dashboard displaying activity stats with filters for daily, weekly, and monthly data."
            buttonText="View on GitHub"
            buttonLink="https://github.com/JulienMedina/time-tracking-dashboard"
            demoLink="https://julienmedina.github.io/time-tracking-dashboard/"
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
