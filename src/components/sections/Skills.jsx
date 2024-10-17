import Divider from "../../assets/Divider.svg";
import Badge from "../base/Badge";

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
  return (
    <section
      id="skills"
      className="min-h-screen bg-grayDark-1 text-grayDark-12 py-12"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-center font-sans text-4xl font-semibold mb-8">
          My Toolbox
        </h2>

        {/* Front-end skills */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-bold text-grayDark-11">Front-end</h3>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
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
          className="my-8 h-auto w-full max-w-full sm:w-3/4 md:w-1/2 lg:w-full"
        />

        {/* Back-end skills */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-bold text-grayDark-11">Back-end</h3>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
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
          className="my-8 h-auto w-full max-w-full sm:w-3/4 md:w-1/2 lg:w-full"
        />

        {/* Outils */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-bold text-grayDark-11">Outils</h3>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
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
          className="my-8 h-auto w-full max-w-full sm:w-3/4 md:w-1/2 lg:w-full"
        />

        {/* Soft Skills */}
        <div className="mb-8">
          <h3 className="mb-4 text-lg font-bold text-grayDark-11">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
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
