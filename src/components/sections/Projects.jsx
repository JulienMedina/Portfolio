import Card from "../base/Card";
import PortalG from "../../assets/PortalG.svg";
import SmallStar from "../../assets/Portal.svg"; // Importation de la petite étoile
import Vector from "../../assets/Vector.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
// Importation du vecteur
const Projects = () => {
  const cardRef = useRef(null);
  const textRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power1.out",
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
    <section id="works" className="bg-grayDark-1 text-grayDark-12">
      <div className="container mx-auto py-8 xl:pl-16 ">
        {/* Div avec flex pour aligner le SVG et le titre */}
        <div
          className="mb-8 flex items-center justify-center pr-12 md:justify-start"
          ref={textRef}
        >
          {/* Div relative pour les étoiles */}
          <div className="relative mr-3 w-8 md:w-12 md:pl-4 lg:w-16 lg:pl-8">
            {/* Grande étoile */}
            <img
              src={PortalG}
              alt="Grande étoile décorative"
              className="absolute left-[10px] top-[-20px] w-5 sm:w-7 sm:left-[28px]"
            />
            {/* Petite étoile en diagonale */}
            <img
              src={SmallStar}
              alt="Petite étoile décorative"
              className="absolute left-[20px] top-[-25px] w-1/3 sm:left-[20px] md:left-[49px] "
            />
          </div>
          <h2 className="text-center font-sans text-2xl font-semibold text-grayDark-12 md:text-left md:text-4xl">
            My Work
          </h2>
        </div>

        {/* Centrer les cartes en mobile et les aligner à gauche en grand écran */}
        <div
          className="flex flex-col items-center gap-8 py-8 md:flex-row md:items-start md:justify-center md:px-8 lg:px-12 xl:py-16 "
          ref={cardRef}
        >
          {/* Exemple de card avec ton bouton */}
          <Card
            image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            title="Project 1"
            description="This is a description of Project 1."
            buttonText="Learn More"
            buttonLink="#"
          />
          <Card
            image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            title="Project 2"
            description="This is a description of Project 2."
            buttonText="Learn More"
            buttonLink="#"
          />
        </div>
        <img
          src={Vector}
          alt="ligne vector décorative"
          ref={lineRef}
          className="relative mx-auto mt-10 h-[3px] w-full max-w-[95%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-full"
        />
      </div>
    </section>
  );
};

export default Projects;
