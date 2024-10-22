import Button from "../base/Button";
import SmallStar from "../../assets/Portal.svg";
import BigStar from "../../assets/PortalG.svg";
import Cross from "../../assets/Cross.svg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current, // L'élément qui déclenche l'animation
          start: "top 80%", // Démarre quand l'élément atteint 80% de la fenêtre
          toggleActions: "play none none none", // Joue l'animation à l'arrivée
        },
      }
    );
  }, []);
  return (
    <section
      id="contact"
      className="relative flex items-center justify-center bg-black text-grayDark-12 md:min-h-screen"
    >
      <div className="container relative mx-auto flex flex-col items-center justify-between px-4 md:flex-row md:px-20">
        {/* Left side content */}
        <div
          ref={textRef}
          className="relative z-10 mb-8 grid grid-cols-[auto_1fr] items-center gap-4 md:mb-0 md:w-1/2"
        >
          <div className="relative w-8 md:w-12 lg:w-16">
            {/* Large star */}
            <img
              src={BigStar}
              alt="Grande étoile décorative"
              className="absolute left-[10px] top-[-20px] w-5 sm:left-[28px] sm:w-7"
            />
            {/* Small star diagonally */}
            <img
              src={SmallStar}
              alt="Petite étoile décorative"
              className="absolute left-[20px] top-[-25px] w-1/3 sm:left-[20px] md:left-[49px]"
            />
          </div>
          <h2 className="text-left font-sans text-4xl font-semibold text-grayDark-12 md:text-5xl">
            Have idea about project?
          </h2>
          <p className="col-span-2 mt-4 text-left text-lg text-grayDark-9">
            Un petit texte qui pousserait les gens à t'envoyer un message.
          </p>
          <div className="col-span-2 mt-6">
            <Button href="#contact-form" ariaLabel="Contacter Julien Medina">
              /Send me an email
            </Button>
          </div>
        </div>

        {/* Cross SVG */}
        <img
          src={Cross}
          alt="SVG décoratif"
          className="absolute top-1/2 left-1/2 w-3/4 max-w-[90%] transform -translate-x-1/2 -translate-y-1/2 opacity-90 z-0 md:relative md:top-auto md:left-auto md:transform-none md:w-auto md:max-w-none"
        />
      </div>
    </section>
  );
};

export default ContactSection;
