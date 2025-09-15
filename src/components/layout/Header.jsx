import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Button from "../base/Button";

const Header = React.memo(function Header({ isNavOpen, setIsNavOpen }) {
  const firstLinkRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsNavOpen(false);
    };
    if (isNavOpen) {
      document.body.classList.add("overflow-hidden");
      document.addEventListener("keydown", onKeyDown);
      setTimeout(() => {
        try {
          firstLinkRef.current && firstLinkRef.current.focus();
        } catch {}
      }, 0);
    } else {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", onKeyDown);
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isNavOpen, setIsNavOpen]);

  const handleLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-gray-dark-12 bg-black"
      role="banner"
    >
      <div className="@container container mx-auto flex items-center justify-between p-4">
        {/* Initiales à gauche */}
        <div
          className="font-mono text-xl text-gray-dark-12"
          aria-label="Initiales JM"
        >
          Julien Medina
        </div>

        {/* Navigation pour mobile */}
        <nav>
          <section className="flex lg:hidden">
            <button
              type="button"
              className="z-50 cursor-pointer space-y-2"
              aria-controls="mobile-nav"
              aria-expanded={isNavOpen}
              aria-label={isNavOpen ? "Fermer le menu" : "Ouvrir le menu"}
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
            </button>

            {isNavOpen && (
              <div
                className="fixed inset-0 z-40 bg-gray-dark-1 opacity-50"
                onClick={() => setIsNavOpen(false)}
              />
            )}

            <div
              id="mobile-nav"
              className={`absolute left-0 top-12 z-50 h-screen w-full bg-black text-gray-dark-12 transition-transform duration-1000 ease-in-out ${
                isNavOpen ? "translate-x-0" : "-translate-x-full"
              } flex flex-col items-center justify-center`}
            >
              <ul className="z-50 flex flex-col items-center space-y-4">
                <li>
                  <a
                    href="#hero-title"
                    className="text-xl"
                    onClick={handleLinkClick}
                    ref={firstLinkRef}
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
                className="font-sans text-gray-dark-12 transition-colors duration-300 hover:text-gray-dark-4"
                aria-label="Accueil"
              >
                /Accueil
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="font-sans text-gray-dark-12 transition-colors duration-300 hover:text-gray-dark-4"
                aria-label="À propos"
              >
                /À propos
              </a>
            </li>
            <li>
              <a
                href="#works"
                className="font-sans text-gray-dark-12 transition-colors duration-300 hover:text-gray-dark-4"
                aria-label="Projets"
              >
                /Projets
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="font-sans text-gray-dark-12 transition-colors duration-300 hover:text-gray-dark-4"
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
