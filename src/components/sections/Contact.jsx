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
      <div className="container relative mx-auto flex flex-col items-center justify-between px-4 md:flex-row md:px-20">
        {/* Left side content avec étoiles, texte et bouton */}
        <div
          ref={textRef}
          className="relative z-10 mb-20 flex flex-col items-center gap-4 md:mb-0 md:w-1/2"
        >
          <div className="flex items-center justify-center md:justify-start">
            <div className="relative w-8 md:w-12 lg:w-16">
              {/* Grande étoile avec ajustements responsives */}
              <img
                src={BigStar}
                alt="Grande étoile décorative"
                className="absolute left-[35px] top-[-30px] w-5 mobile-sm:left-[30px] mobile-sm:top-[-50px] mobile-lg:left-[20px]  mobile-lg:top-[-35px] sm:left-[28px] sm:w-7 lg:left-[10px] xl:left-[35px]"
                aria-hidden="true"
              />
              {/* Petite étoile en diagonale avec ajustements responsives */}
              <img
                src={SmallStar}
                alt="Petite étoile décorative"
                className="absolute left-[45px] top-[-35px] w-1/3 mobile-sm:left-[40px] mobile-sm:top-[-50px] mobile-lg:left-[30px] mobile-lg:top-[-40px] sm:left-[20px] md:left-[49px] lg:left-[35px] xl:left-[45px]"
                aria-hidden="true"
              />
            </div>
            <h2 className="ml-4 text-center text-4xl font-semibold text-grayDark-12 md:text-left md:text-5xl">
              Have an idea about a project?
            </h2>
          </div>
          <p className="mt-4 text-center text-lg text-grayDark-11">
            "Have a project in mind or just want to say hello? Drop me a message
            and let’s create something amazing together!"
          </p>

          {/* Bouton positionné en dessous du texte */}
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

        {/* Cross SVG côté droit */}
        <img
          src={Cross}
          alt="SVG décoratif"
          className="hidden w-full max-w-xs opacity-90 sm:block sm:max-w-xs md:max-w-md lg:max-w-sm xl:max-w-md"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default ContactSection;
