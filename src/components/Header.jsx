import Button from "./Button";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

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

        {/* Navigation pour mobile */}
        <nav>
          <section className="flex lg:hidden">
            <div
              className="space-y-2"
              onClick={() => setIsNavOpen((prevState) => !prevState)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            {/* Menu mobile */}
            <div
            // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
            >
              <div className="absolute right-0 top-0 p-4">
                <button
                  onClick={() => setIsNavOpen(false)}
                  className="text-gray-600"
                >
                  {/* Icone de fermeture */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <ul className="flex flex-col items-center space-y-4">
                <li>
                  <a href="#home" className="text-xl">
                    /Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-xl">
                    /About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-xl">
                    /Works
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-xl">
                    /Skills
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </nav>

        {/* Navigation pour grands écrans */}
        <nav
          aria-label="Main Navigation"
          className="hidden grow justify-center lg:flex"
        >
          <ul className="flex space-x-10">
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
        <div className="ml-4 hidden lg:block">
          <Button href="#contact" ariaLabel="Contacter Julien Medina">
            /Contact me
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
