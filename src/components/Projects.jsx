import Card from "./Card";

const Projects = () => {
  return (
    <section id="works" className="min-h-screen bg-grayDark-1 text-grayDark-12">
      <div className="container mx-auto py-12">
        <h2 className="mb-8 text-center font-mono text-4xl font-semibold">
          My Works
        </h2>
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
      </div>
    </section>
  );
};

export default Projects;
