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
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animation pour le texte (arrivée par la gauche)
    const textAnim = gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation pour le bouton (arrivée par le bas)
    const buttonAnim = gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Nettoyage des animations pour éviter les fuites de mémoire
    return () => {
      textAnim.kill();
      buttonAnim.kill();
    };
  }, []);

  return (
    <section
      id="contact"
      className="relative flex items-center justify-center bg-black text-grayDark-12 md:min-h-screen"
    >
      <div className="container relative mx-auto flex flex-col items-center justify-center px-4 md:flex-row md:items-start md:justify-between md:px-20">
        {/* Contenu côté gauche avec étoiles, texte et bouton */}
        <div
          ref={textRef}
          className="relative z-10 mb-20 flex flex-col items-center gap-4 md:mb-0 md:w-1/2 md:items-start"
        >
          {/* Conteneur relatif pour les étoiles et le titre */}
          <div className="relative w-full">
            {/* Grande étoile */}
            <img
              src={BigStar}
              alt="Grande étoile décorative"
              className="absolute sm:left-[-40px] sm:top-0  mobile-lg:left-[10px] mobile-sm:hidden mobile-lg:block md:w-6 lg:w-8 "
              aria-hidden="true"
            />
            {/* Petite étoile */}
            <img
              src={SmallStar}
              alt="Petite étoile décorative"
              className="absolute sm:left-[-25px] sm:top-[-10px]  w-4 mobile-sm:hidden mobile-lg:block mobile-lg:left-[30px] md:w-6 lg:w-5"
              aria-hidden="true"
            />
            {/* Titre */}
            <h2 className="text-center text-3xl font-semibold text-grayDark-12 md:text-left md:text-5xl">
              Have an idea about a project?
            </h2>
          </div>
          {/* Paragraphe */}
          <p className="mt-4 text-center text-lg text-grayDark-11 md:text-left">
            Drop me a message and let’s create something amazing together!
          </p>
          {/* Bouton */}
          <div
            ref={buttonRef}
            className="mt-6 flex justify-center md:justify-start"
          >
            <Button
              href="mailto:julien.medina16@gmail.com"
              ariaLabel="Contacter Julien Medina"
            >
              /Send me an email
            </Button>
          </div>
        </div>
        {/* SVG côté droit */}
        <img
          src={Cross}
          alt="SVG décoratif"
          className="hidden w-full max-w-xs opacity-90 md:block md:w-1/2 md:max-w-md lg:max-w-sm xl:max-w-md"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default ContactSection;
