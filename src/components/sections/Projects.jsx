import Card from "../base/Card";
import PortalG from "../../assets/PortalG.svg";
import SmallStar from "../../assets/Portal.svg"; // Importation de la petite étoile
import Vector from "../../assets/Vector.svg"; // Importation du vecteur
const Projects = () => {
  return (
    <section id="works" className="bg-grayDark-1 text-grayDark-12">
      <div className="container mx-auto py-12">
        {/* Div avec flex pour aligner le SVG et le titre */}
        <div className="mb-8 flex items-center justify-center md:justify-start">
          {/* Div relative pour les étoiles */}
          <div className="relative mr-3 w-8 md:w-12 lg:w-16">
            {/* Grande étoile */}
            <img
              src={PortalG}
              alt="Grande étoile décorative"
              className="absolute top-[-20px] w-10"
            />
            {/* Petite étoile en diagonale */}
            <img
              src={SmallStar}
              alt="Petite étoile décorative"
              className="absolute left-[25px] top-[-25px] w-1/3 "
            />
          </div>
          <h2 className="text-center font-mono text-4xl font-semibold text-grayDark-12 md:text-left">
            My Work
          </h2>
        </div>

        {/* Centrer les cartes en mobile et les aligner à gauche en grand écran */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Exemple de card avec ton bouton */}
          <Card
            image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            title="Project 1"
            description="This is a description of Project 1."
            buttonText="Learn More"
            buttonLink="#"
          />
          <Card
            image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            title="Project 2"
            description="This is a description of Project 2."
            buttonText="Learn More"
            buttonLink="#"
          />
        </div>
        <img
          src={Vector}
          alt="ligne vector décorative"
          className="relative mx-auto mt-10 h-[3px] w-full max-w-[95%] sm:max-w-[90%] md:max-w-[90%] lg:max-w-full"
        />
      </div>
    </section>
  );
};

export default Projects;
