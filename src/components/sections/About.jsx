import ProfilePicture from "../../assets/image.png"; // Assure-toi que l'image est bien dans ce répertoire

const About = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen items-start justify-center bg-grayDark-1 text-grayDark-12"
    >
      <div className="container mx-auto px-4 py-12">
        {/* Titre de la section */}
        <figure className="flex flex-col items-center">
          <img
            src={ProfilePicture}
            alt="Portrait of Julien Medina"
            className=" w-11/12 object-fill"
          />
          <figcaption className="mt-4 text-center text-lg text-grayDark-9">
            Julien Medina - Full Stack Developer
          </figcaption>
        </figure>
        <h2 className="mb-8 text-center font-sans text-4xl font-semibold">
          Get to know me better
        </h2>

        {/* Image et description */}

        {/* Texte de présentation */}
        <div className="mt-8 text-center text-grayDark-11">
          <p className="mb-4 font-sans text-lg">
            I’m Julien, a passionate and motivated junior developer based in
            Paris. With a solid foundation in programming and problem-solving, I
            specialize in [insert languages/technologies you know, e.g.,
            JavaScript, Python, HTML/CSS]. Eager to apply my skills in
            real-world projects, I focus on writing clean, efficient code and
            constantly learning new technologies. Whether working independently
            or collaborating within a team, I am committed to building impactful
            and user-friendly solutions.
          </p>
          <p className="font-sans text-lg">
            Looking forward to contributing to innovative projects and growing
            in the tech industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
