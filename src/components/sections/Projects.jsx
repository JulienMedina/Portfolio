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
    gsap.fromTo(
      cardRef.current.children,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power1.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

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
    <section id="works" className="bg-gray-dark-1 text-gray-dark-12">
      <div className="container mx-auto px-4 py-8 xl:pl-16">
        <div
          className="mb-8 flex items-center justify-center pr-12 md:justify-start"
          ref={textRef}
        >
          <div className="relative mr-3 w-8 md:w-12 md:pl-4 lg:w-16 lg:pl-8">
            <img
              src={PortalG}
              alt="Grande étoile décorative"
              className="absolute left-[10px] top-[-20px] w-5 sm:left-[28px] sm:w-7"
              aria-hidden="true"
            />
            <img
              src={SmallStar}
              alt="Petite étoile décorative"
              className="absolute left-[20px] top-[-25px] w-1/3 sm:left-[20px] md:left-[49px]"
              aria-hidden="true"
            />
          </div>
          <h2 className="text-center font-sans text-2xl font-semibold text-gray-dark-12 md:text-left md:text-4xl">
            Mes projets
          </h2>
        </div>

        <div
          className="flex flex-col items-stretch gap-8 py-8 md:flex-row md:items-stretch md:justify-center md:px-8 lg:px-12 xl:py-16"
          ref={cardRef}
        >
          <Card
            className="h-full"
            image={Portfolio}
            title="Mon Portfolio"
            description="Un portfolio moderne et interactif mettant en valeur mes meilleurs projets web et concepts de design. Construit avec React, stylisé avec Tailwind CSS et animé avec GSAP, il reflète ma passion pour un code propre et un design responsive."
            buttonText="Lien GitHub"
            buttonLink="https://github.com/JulienMedina/Portfolio"
          />
          <Card
            className="h-full"
            image={CardBackground}
            title="API"
            description="Une plateforme collaborative connectant des joueurs selon leurs préférences et disponibilités. J'ai développé le back-end, construit une API RESTful, géré l'architecture serveur et assuré des interactions fluides. Projet final de certification DWWM."
            buttonText="Lien GitHub"
            buttonLink="https://github.com/JulienMedina/DWWM-back"
          />
          <Card
            className="h-full"
            image={ArtPortfolio}
            title="Portfolio Artistique"
            description="Un site moderne mettant en valeur le portfolio et les expositions d'un artiste. Développé avec un back-end Strapi et un front-end Next.js comportant des galeries dynamiques, des animations GSAP fluides et un formulaire de contact intégré propulsé par Nodemailer."
            buttonText="Lien GitHub"
            buttonLink="https://github.com/Charlie-Gauvin/art-porfolio-frontend"
            demoLink="https://www.patrickgauvinart.com/"
          />
          <Card
            className="h-full"
            image={Dashboard}
            title="Dashboard"
            description="Ce projet est une solution au challenge 'Time Tracking Dashboard' de Frontend Mentor. Il s'agit d'un tableau de bord interactif affichant des statistiques d'activité avec des filtres pour les données quotidiennes, hebdomadaires et mensuelles."
            buttonText="Lien GitHub"
            buttonLink="https://github.com/JulienMedina/time-tracking-dashboard"
            demoLink="https://julienmedina.github.io/time-tracking-dashboard/"
          />
        </div>

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
