import ProfilePicture from "../../assets/ProfilePicture.png"; // Assure-toi que l'image est bien dans ce répertoire

const About = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center bg-grayDark-1 text-grayDark-12"
    >
      <div className="container mx-auto px-4 py-12">
        {/* Titre de la section */}
        <h2 className="mb-8 text-center font-sans text-4xl font-semibold">
          About Me
        </h2>

        {/* Image et description */}
        <figure className="flex flex-col items-center">
          <img
            src={ProfilePicture}
            alt="Portrait of Julien Medina"
            className="w-40 h-40 rounded-full object-cover"
          />
          <figcaption className="mt-4 text-center text-lg text-grayDark-9">
            Julien Medina - Full Stack Developer
          </figcaption>
        </figure>

        {/* Texte de présentation */}
        <div className="mt-8 text-center text-grayDark-11">
          <p className="mb-4 font-mono text-lg">
            I&apos;m a passionate web developer who enjoys creating modern and
            functional solutions. With experience in both front-end and
            back-end, I am capable of managing a project from start to finish.
          </p>
          <p className="font-mono text-lg">
            Based in Paris, I&apos;m always looking for new challenges to
            further hone my skills and bring innovative ideas to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
