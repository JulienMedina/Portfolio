import ProfilePicture from "../../assets/images/ProfilPicture2.webp";
import CV from "../../assets/CV/CV Julien Medina alternance.pdf";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../base/Button";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imgRef = useRef(null);
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
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

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
          trigger: imgRef.current,
          start: "top 80%",
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
          <div
            className="order-1 mt-8 flex w-full justify-center pb-10 md:order-2 md:mt-0 md:w-1/2"
            ref={imgRef}
          >
            <img
              src={ProfilePicture}
              alt="Portrait de Julien Medina"
              className="h-80 w-3/4 rounded-md object-cover shadow-lg transition-transform duration-500 hover:scale-105 md:h-[30rem] md:w-2/3 lg:w-1/2"
            />
          </div>

          <div
            ref={textRef}
            className="order-2 w-full text-center md:order-1 md:w-1/2 md:pl-20 md:text-left"
          >
            <h2 className="mb-4 text-center font-sans text-3xl font-semibold md:text-left">
              À propos de moi
            </h2>
            <p className="mb-4 text-center font-sans text-lg text-grayDark-11 md:text-left">
              Ancien militaire reconverti dans le développement web, je suis
              aujourd&apos;hui développeur web junior spécialisé en JavaScript,
              React, Node.js et Tailwind CSS. Fraîchement diplômé de l’école
              O’clock, je conçois des applications web modernes, performantes et
              animées grâce à GSAP.
            </p>
            <p className="text-center font-sans text-lg text-grayDark-11 md:text-left">
              Mon parcours atypique m’a permis de développer une forte capacité
              d&apos;adaptation, une grande rigueur et un goût prononcé pour le
              travail bien fait. Je suis curieux, autonome et toujours en veille
              sur les dernières tendances du web et de l’IA.
            </p>
            <p className="mt-4 text-center font-sans text-lg text-grayDark-11 md:text-left">
              Actuellement à la recherche d’opportunités pour mettre mes
              compétences à profit, je suis disponible pour échanger sur vos
              projets web ou collaborer ensemble sur des idées innovantes.
            </p>
            <div className="mt-8 flex justify-center md:justify-start">
              <Button
                href={CV}
                ariaLabel="Télécharger le CV de Julien Medina"
                variant="outline"
              >
                Télécharger mon CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
