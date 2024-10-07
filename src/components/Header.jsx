import Button from "./Button";

const Header = () => {
  return (
    <header className="w-full bg-auto shadow-md" role="banner">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Initiales à gauche */}
        <div
          className="font-mono text-2xl text-grayDark-12"
          aria-label="Initiales JM"
        >
          Julien Medina
        </div>

        {/* Navigation au centre */}
        <nav
          aria-label="Main Navigation"
          className="hidden grow justify-center md:flex"
        >
          <ul className="flex space-x-4">
            <li>
              <a
                href="#home"
                className="font-sans text-grayDark-12 transition-colors duration-300 hover:text-grayDark-4"
                aria-label="Accueil"
              >
                /Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="font-sans text-grayDark-12 transition-colors duration-300 hover:text-grayDark-4"
                aria-label="À propos"
              >
                /About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="font-sans text-grayDark-12 transition-colors duration-300 hover:text-grayDark-4"
                aria-label="Projets"
              >
                /Works
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="font-sans text-grayDark-12 transition-colors duration-300 hover:text-grayDark-4"
                aria-label="Compétences"
              >
                /Skills
              </a>
            </li>
          </ul>
        </nav>

        {/* Bouton "Work with me" à droite */}
        <div className="ml-4">
          <Button href="#contact" ariaLabel="Contacter Julien Medina">
            /Contact me
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
