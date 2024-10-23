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
          className="relative z-10 mb-20 flex flex-col items-center gap-4 md:mb-0 md:w-1/2 md:items-start"
        >
          <div className="flex items-center">
            <div className="relative w-8 md:w-12 lg:w-16">
              {/* Large star */}
              <img
                src={BigStar}
                alt="Grande étoile décorative"
                className="absolute left-[35px] top-[-30px] w-5 mobile-lg:left-[50px] sm:left-[28px] sm:w-7"
              />
              {/* Small star diagonally */}
              <img
                src={SmallStar}
                alt="Petite étoile décorative"
                className="absolute left-[45px] top-[-35px] w-1/3 mobile-lg:left-[60px] sm:left-[20px] md:left-[49px]"
              />
            </div>
            <h2 className=" text-center text-4xl font-semibold text-grayDark-12 md:text-5xl">
              Have idea about project?
            </h2>
          </div>
          <p className="mt-4 text-center text-lg text-grayDark-11">
            "Have a project in mind or just want to say hello? Drop me a message
            and let’s create something amazing together!"
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <Button href="#contact-form" ariaLabel="Contacter Julien Medina">
              /Send me an email
            </Button>
          </div>
        </div>

        {/* Cross SVG */}
        <img
          src={Cross}
          alt="SVG décoratif"
          className="absolute left-1/2 top-1/2 z-0 w-3/4 max-w-[70%] -translate-x-1/2 -translate-y-1/2 opacity-90 mobile-sm:hidden md:relative md:left-auto md:top-auto md:block md:w-auto md:max-w-none md:transform-none"
        />
      </div>
    </section>
  );
};

export default ContactSection;
