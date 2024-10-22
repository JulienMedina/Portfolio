import ProfilePicture from "../../assets/ProfilPicture2.png"; // Assure-toi que l'image est bien dans ce répertoire
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import du plugin

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
          {/* Texte de présentation (gauche) */}
          <div
            ref={textRef}
            className="w-full md:pl-20 text-center md:w-1/2 md:text-left"
          >
            <h2 className="mb-4 text-center font-sans text-3xl font-semibold">
              Get to know me better
            </h2>
            <p className="mb-4 text-center font-sans text-lg text-grayDark-11">
              I’m Julien, a passionate and motivated junior developer based in
              Paris. With a solid foundation in programming and problem-solving,
              I specialize in JavaScript, React, Node.js, and other
              technologies. I focus on writing clean, efficient code and love
              working on impactful projects.
            </p>
            <p className="text-center font-sans text-lg text-grayDark-11">
              I'm always eager to learn new technologies and take on exciting
              challenges. Let's work together and build something amazing!
            </p>
          </div>

          {/* Image stylisée (droite) */}
          <div
            className="mt-8 flex w-full justify-center md:mt-0 md:w-1/2"
            ref={imgRef}
          >
            <img
              src={ProfilePicture}
              alt="Portrait of Julien Medina"
              className="h-[30rem] w-3/4 rounded-md object-cover shadow-lg transition-transform duration-500 hover:scale-105 md:w-2/3 lg:w-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
