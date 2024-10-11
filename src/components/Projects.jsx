import React from "react";
import ProjectCard from "./ProjectCard";

const Works = () => {
  // Liste des projets que tu vas afficher
  const projects = [
    {
      title: "Nom de ton projet 1",
      description: "Description courte en anglais si tu peux",
      link: "#",
    },
    {
      title: "Nom de ton projet 2",
      description: "Description courte en anglais",
      link: "#",
    },
    // Ajoute d'autres projets ici
  ];

  return (
    <section className="my-8 px-4" id="works">
      <h2 className="mb-8 text-center text-3xl font-semibold text-grayDark-12">
        My Work
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Works;
