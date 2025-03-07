import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../base/Button";

const Header = React.memo(function Header({ isNavOpen, setIsNavOpen }) {
  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isNavOpen]);

  const handleLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-grayDark-12 bg-black"
      role="banner"
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Initiales à gauche */}
        <div
          className="font-mono text-xl text-grayDark-12"
          aria-label="Initiales JM"
        >
          Julien Medina
        </div>

        {/* Navigation pour mobile */}
        <nav>
          <section className="flex lg:hidden">
            <div
              className="z-50 cursor-pointer space-y-2"
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
                  className="size-8 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-label="Fermer le menu"
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

            {isNavOpen && (
              <div
                className="fixed inset-0 z-40 bg-grayDark-1 opacity-50"
                onClick={() => setIsNavOpen(false)}
              />
            )}

            <div
              className={`absolute left-0 top-12 z-50 h-screen w-full bg-black text-grayDark-12 transition-transform duration-1000 ease-in-out ${
                isNavOpen ? "translate-x-0" : "-translate-x-full"
              } flex flex-col items-center justify-center`}
            >
              <ul className="z-50 flex flex-col items-center space-y-4">
                <li>
                  <a
                    href="#hero-title"
                    className="text-xl"
                    onClick={handleLinkClick}
                  >
                    /Accueil
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-xl"
                    onClick={handleLinkClick}
                  >
                    /À propos
                  </a>
                </li>
                <li>
                  <a
                    href="#works"
                    className="text-xl"
                    onClick={handleLinkClick}
                  >
                    /Projets
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-xl"
                    onClick={handleLinkClick}
                  >
                    /Compétences
                  </a>
                </li>
                <div className="mt-4 flex justify-center">
                  <Button
                    href="#contact"
                    ariaLabel="Contacter Julien Medina"
                    variant="outline"
                    onClick={handleLinkClick}
                  >
                    /Contact
                  </Button>
                </div>
              </ul>
            </div>
          </section>
        </nav>

        {/* Navigation pour grands écrans */}
        <nav
          aria-label="Navigation principale"
          className="hidden grow justify-center lg:flex"
        >
          <ul className="flex space-x-10">
            <li>
              <a
                href="#hero-title"
                className="font-sans text-grayDark-12 transition-colors duration-300 hover:text-grayDark-4"
                aria-label="Accueil"
              >
                /Accueil
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="font-sans text-grayDark-12 transition-colors duration-300 hover:text-grayDark-4"
                aria-label="À propos"
              >
                /À propos
              </a>
            </li>
            <li>
              <a
                href="#works"
                className="font-sans text-grayDark-12 transition-colors duration-300 hover:text-grayDark-4"
                aria-label="Projets"
              >
                /Projets
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="font-sans text-grayDark-12 transition-colors duration-300 hover:text-grayDark-4"
                aria-label="Compétences"
              >
                /Compétences
              </a>
            </li>
          </ul>
        </nav>

        {/* Bouton "Contact" à droite */}
        <div className="ml-4 hidden lg:block">
          <Button
            href="#contact"
            ariaLabel="Contacter Julien Medina"
            variant="outline"
          >
            /Contact
          </Button>
        </div>
      </div>
    </header>
  );
});

Header.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  setIsNavOpen: PropTypes.func.isRequired,
};

export default Header;
