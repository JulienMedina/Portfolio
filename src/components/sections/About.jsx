import ProfilePicture from "../../assets/images/ProfilPicture2.webp";
import CV from "../../assets/CV/CV Julien Medina alternance.pdf";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import du plugin
import Button from "../base/Button";
// Register ScrollTrigger avec GSAP
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imgRef = useRef(null);
  const textRef = useRef(null);

  // Animation pour l'image et le texte déclenchée au scroll
  useEffect(() => {
    // Animation pour le texte (à gauche)
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

    // Animation pour l'image (à droite)
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: imgRef.current, // L'élément qui déclenche l'animation
          start: "top 80%", // Démarre quand l'élément atteint 80% de la fenêtre
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center justify-center bg-grayDark-1 py-12 text-grayDark-12"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:space-x-12">
          {/* Image stylisée (au-dessus du texte en mobile, à droite en grand écran) */}
          <div
            className="order-1 mt-8 flex w-full justify-center pb-10 md:order-2 md:mt-0 md:w-1/2"
            ref={imgRef}
          >
            <img
              src={ProfilePicture}
              alt="Portrait of Julien Medina"
              className="h-80 w-3/4 rounded-md object-cover shadow-lg transition-transform duration-500 hover:scale-105 md:h-[30rem] md:w-2/3 lg:w-1/2"
            />
          </div>

          {/* Texte de présentation (en dessous de l'image en mobile, à gauche en grand écran) */}
          <div
            ref={textRef}
            className="order-2 w-full text-center md:order-1 md:w-1/2 md:pl-20 md:text-left"
          >
            <h2 className="mb-4 text-center font-sans text-3xl font-semibold md:text-left">
              Get to know me better
            </h2>
            <p className="mb-4 text-center font-sans text-lg text-grayDark-11 md:text-left">
              I’m Julien, a passionate and motivated junior developer based in
              Paris. With a solid foundation in programming and problem-solving,
              I specialize in JavaScript, React, Node.js, and other
              technologies. Eager to apply my skills in real-world projects, I
              focus on writing clean, efficient code and constantly learning new
              technologies. Whether working independently or collaborating
              within a team, I am committed to building impactful and
              user-friendly solutions.
            </p>
            <p className="text-center font-sans text-lg text-grayDark-11 md:text-left">
              Looking forward to contributing to innovative projects and growing
              in the tech industry.
            </p>
            <div className="mt-8 flex justify-center md:justify-start ">
              <Button href={CV} ariaLabel="Télécharger le CV de Julien Medina">
                Download resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
