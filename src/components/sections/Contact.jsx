import Button from "../base/Button";
import SmallStar from "../../assets/svg/Portal.svg";
import BigStar from "../../assets/svg/PortalG.svg";
import Cross from "../../assets/svg/Cross.svg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
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

    return () => {
      textAnim.kill();
      buttonAnim.kill();
    };
  }, [reducedMotion]);

  return (
    <section
      id="contact"
      className="relative flex items-center justify-center bg-gray-dark-1 text-gray-dark-12 md:min-h-screen"
    >
      <div className="container relative mx-auto flex flex-col items-center justify-center px-4 md:flex-row md:items-start md:justify-between md:px-20">
        <div
          ref={textRef}
          className="relative z-10 mb-20 flex flex-col items-center gap-4 md:mb-0 md:w-1/2 md:items-start"
        >
          <div className="relative w-full">
            <img
              src={BigStar}
              alt=""
              className="absolute mobile-sm:hidden mobile-lg:left-[10px] mobile-lg:block sm:left-[-40px] sm:w-7 md:w-6 lg:w-8"
              aria-hidden="true"
            />
            <img
              src={SmallStar}
              alt=""
              className="absolute w-4 mobile-sm:hidden mobile-lg:left-[30px] mobile-lg:block sm:left-[-25px] sm:top-[-10px] md:w-6 lg:w-5"
              aria-hidden="true"
            />
            <h2 className="text-center text-3xl font-semibold text-gray-dark-12 md:text-left md:text-5xl">
              Une idée de projet ?
            </h2>
          </div>
          <p className="mt-4 text-center text-lg text-gray-dark-11 md:text-left">
            Envoyez-moi un message et créons ensemble quelque chose d’incroyable
            !
          </p>
          <div
            ref={buttonRef}
            className="mt-6 flex justify-center md:justify-start"
          >
            <Button
              href="mailto:julien.medina16@gmail.com"
              ariaLabel="Contacter Julien Medina"
              variant="outline"
            >
              /Envoyez-moi un email
            </Button>
          </div>
        </div>
        <img
          src={Cross}
          alt=""
          className="hidden w-full max-w-xs opacity-90 md:block md:w-1/2 md:max-w-md lg:max-w-sm xl:max-w-md"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default ContactSection;
