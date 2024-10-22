import Button from "../base/Button";
import PropTypes from "prop-types";
import { useEffect } from "react";

const Header = ({ isNavOpen, setIsNavOpen }) => {
  // Empêcher le scroll lorsque le menu est ouvert
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden"; // Désactive le scroll
    } else {
      document.body.style.overflow = "auto"; // Réactive le scroll
    }
    return () => {
      document.body.style.overflow = "auto"; // Réactiver le scroll en cas de démontage
    };
  }, [isNavOpen]);
  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-grayDark-12 bg-black "
      role="banner"
    >
      <div className="container mx-auto flex items-center justify-between p-4 ">
        {/* Initiales à gauche */}
        <div
          className="font-mono text-xl text-grayDark-12  "
          aria-label="Initiales JM"
        >
          Julien Medina
        </div>

        {/* Navigation pour mobile */}
        <nav>
          <section className="flex lg:hidden">
            {/* Affichage conditionnel : burger ou croix */}
            <div
              className="z-50 cursor-pointer space-y-2" // Ajout d'un z-index plus élevé
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              {!isNavOpen ? (
                <>
                  <span className="block h-0.5 w-8 bg-gray-600"></span>
                  <span className="block h-0.5 w-8 bg-gray-600"></span>
                  <span className="block h-0.5 w-8 bg-gray-600"></span>
                </>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-600"
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
              )}
            </div>

            {/* Overlay pour fermer le menu en cliquant en dehors */}
            {isNavOpen && (
              <div
                className="fixed inset-0 z-40 bg-grayDark-1 opacity-50"
                onClick={() => setIsNavOpen(false)}
              />
            )}

            {/* Menu mobile */}
            <div
              className={`absolute left-0 top-12 z-50 h-screen w-full transform bg-black text-grayDark-12 transition-transform duration-1000 ease-in-out ${
                isNavOpen ? "translate-x-0" : "-translate-x-full"
              } flex flex-col items-center justify-center`}
            >
              <ul className="z-50 flex flex-col items-center space-y-4">
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
                  <a href="#works" className="text-xl">
                    /Works
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-xl">
                    /Skills
                  </a>
                </li>
                {/* Bouton "Contact me" dans le menu burger */}
                <div className="mt-4 flex justify-center">
                  <Button href="#contact" ariaLabel="Contacter Julien Medina">
                    /Contact me
                  </Button>
                </div>
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
                className="font-sans text-grayDark-12 transition-colors duration-300 hover:text-grayDark-4 "
                aria-label="Accueil"
              >
                /Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="font-sans text-grayDark-12 transition-colors duration-300 hover:text-grayDark-4 "
                aria-label="À propos"
              >
                /About
              </a>
            </li>
            <li>
              <a
                href="#works"
                className="font-sans text-grayDark-12 transition-colors duration-300 hover:text-grayDark-4 "
                aria-label="Projets"
              >
                /Works
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="font-sans text-grayDark-12 transition-colors duration-300 hover:text-grayDark-4 "
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

Header.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  setIsNavOpen: PropTypes.func.isRequired,
};

export default Header;
