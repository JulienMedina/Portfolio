import React, { useEffect, useRef, memo } from "react";
import Divider from "../../assets/svg/Divider.svg";
import Badge from "../base/Badge";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const frontEndSkills = [
  { label: "React", bgColor: "bg-yellow-300", textColor: "text-black" },
  { label: "Tailwind", bgColor: "bg-yellow-300", textColor: "text-black" },
  { label: "JavaScript", bgColor: "bg-yellow-300", textColor: "text-black" },
  { label: "TypeScript", bgColor: "bg-yellow-300", textColor: "text-black" },
  { label: "Next.js", bgColor: "bg-yellow-300", textColor: "text-black" },
];

const backEndSkills = [
  { label: "Node.js", bgColor: "bg-purple-200", textColor: "text-black" },
  { label: "Express", bgColor: "bg-purple-200", textColor: "text-black" },
  { label: "PostgreSQL", bgColor: "bg-purple-200", textColor: "text-black" },
  { label: "Strapi", bgColor: "bg-purple-200", textColor: "text-black" },
];

const tools = [
  { label: "Git", bgColor: "bg-Button-color1", textColor: "text-black" },
  { label: "GitHub", bgColor: "bg-Button-color1", textColor: "text-black" },
  { label: "Docker", bgColor: "bg-Button-color1", textColor: "text-black" },
  { label: "Figma", bgColor: "bg-Button-color1", textColor: "text-black" },
  { label: "GSAP", bgColor: "bg-Button-color1", textColor: "text-black" },
  {
    label: "React Three Fiber",
    bgColor: "bg-Button-color1",
    textColor: "text-black",
  },
];

const softSkills = [
  { label: "Communication", bgColor: "bg-green-200", textColor: "text-black" },
  { label: "Collaboration", bgColor: "bg-yellow-200", textColor: "text-black" },
  { label: "Autonomy", bgColor: "bg-red-200", textColor: "text-black" },
  { label: "Curiosity", bgColor: "bg-purple-200", textColor: "text-black" },
];

const SkillsSection = React.memo(function SkillsSection() {
  const lineRefs = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    // Animation des lignes décoratives
    lineRefs.current.forEach((line) => {
      gsap.fromTo(
        line,
        { scaleX: 0, transformOrigin: "center" },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: line,
            start: "top 80%",
            toggleActions: "play none none none", // Animation unique
          },
        }
      );
    });

    // Animation du titre
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
      id="skills"
      className="min-h-screen bg-grayDark-1 py-12 text-grayDark-12"
    >
      <div className="container mx-auto  px-20">
        <h2
          ref={textRef}
          className="mb-8 text-center font-sans text-4xl font-semibold"
        >
          My Toolbox
        </h2>

        {/* Front-end skills */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-bold text-grayDark-11">Front-end</h3>
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            {frontEndSkills.map((skill) => (
              <Badge
                key={skill.label}
                label={skill.label}
                bgColor={skill.bgColor}
                textColor={skill.textColor}
              />
            ))}
          </div>
        </div>

        {/* Ligne décorative */}
        <img
          src={Divider}
          alt="Ligne décorative"
          ref={(el) => (lineRefs.current[0] = el)}
          className="my-8 h-auto w-full sm:w-3/4 md:w-1/2 lg:w-full"
          aria-hidden="true"
          loading="lazy"
        />

        {/* Back-end skills */}
        <div className="mb-8 text-left">
          <h3 className="mb-4 text-lg font-bold text-grayDark-11">Back-end</h3>
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            {backEndSkills.map((skill) => (
              <Badge
                key={skill.label}
                label={skill.label}
                bgColor={skill.bgColor}
                textColor={skill.textColor}
              />
            ))}
          </div>
        </div>

        {/* Ligne décorative */}
        <img
          src={Divider}
          alt="Ligne décorative"
          ref={(el) => (lineRefs.current[1] = el)}
          className="my-8 h-auto w-full sm:w-3/4 md:w-1/2 lg:w-full"
          aria-hidden="true"
          loading="lazy"
        />

        {/* Outils */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-bold text-grayDark-11">Tools</h3>
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            {tools.map((tool) => (
              <Badge
                key={tool.label}
                label={tool.label}
                bgColor={tool.bgColor}
                textColor={tool.textColor}
              />
            ))}
          </div>
        </div>

        {/* Ligne décorative */}
        <img
          src={Divider}
          alt="Ligne décorative"
          ref={(el) => (lineRefs.current[2] = el)}
          className="my-8 h-auto w-full sm:w-3/4 md:w-1/2 lg:w-full"
          aria-hidden="true"
          loading="lazy"
        />

        {/* Soft Skills */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-bold text-grayDark-11">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            {softSkills.map((softSkill) => (
              <Badge
                key={softSkill.label}
                label={softSkill.label}
                bgColor={softSkill.bgColor}
                textColor={softSkill.textColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default SkillsSection;
