import { useEffect, useRef } from "react";
import Divider from "../../assets/Divider.svg";
import Badge from "../base/Badge";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const frontEndSkills = [
  { label: "HTML", bgColor: "bg-yellow-300", textColor: "text-black" },
  { label: "CSS", bgColor: "bg-yellow-300", textColor: "text-black" },
  { label: "React", bgColor: "bg-yellow-300", textColor: "text-black" },
  { label: "Tailwind", bgColor: "bg-yellow-300", textColor: "text-black" },
  { label: "Figma", bgColor: "bg-yellow-300", textColor: "text-black" },
];

const backEndSkills = [
  { label: "Node.js", bgColor: "bg-purple-200", textColor: "text-white" },
  { label: "Express", bgColor: "bg-purple-200", textColor: "text-white" },
  { label: "PostgreSQL", bgColor: "bg-purple-200", textColor: "text-white" },
  { label: "Docker", bgColor: "bg-purple-200", textColor: "text-white" },
];

const tools = [
  { label: "Git", bgColor: "bg-orange-500", textColor: "text-white" },
  { label: "GitHub", bgColor: "bg-gray-900", textColor: "text-white" },
];

const softSkills = [
  { label: "Communication", bgColor: "bg-green-200", textColor: "text-black" },
  { label: "Collaboration", bgColor: "bg-yellow-200", textColor: "text-black" },
  { label: "Autonomy", bgColor: "bg-red-200", textColor: "text-black" },
  { label: "Curiosity", bgColor: "bg-purple-200", textColor: "text-black" },
];

const SkillsSection = () => {
  const lineRefs = useRef([]);

  useEffect(() => {
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
  }, []);
  return (
    <section
      id="skills"
      className="min-h-screen bg-grayDark-1 py-12 text-grayDark-12"
    >
      <div className="container mx-auto justify-items-center px-20 ">
        <h2 className="mb-8 text-center font-sans text-4xl font-semibold">
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
          className="my-8 h-auto w-full   sm:w-3/4 md:w-1/2 lg:w-full"
        />

        {/* Back-end skills */}
        <div className="mb-8">
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
          className="my-8 h-auto w-full max-w-full sm:w-3/4 md:w-1/2 lg:w-full"
        />

        {/* Outils */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-bold text-grayDark-11">Outils</h3>
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
          className="my-8 h-auto w-full max-w-full sm:w-3/4 md:w-1/2 lg:w-full"
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
};

export default SkillsSection;
