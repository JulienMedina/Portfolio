// import "./header.css"; // Assurez-vous de créer un fichier CSS pour styliser votre header

const Header = () => {
  return (
    <header className="w-full bg-auto font-sans shadow-md" role="banner">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Initiales à gauche */}
        <div
          className="text-2xl font-bold text-grayDark-12"
          aria-label="Initiales JM"
        >
          JM
        </div>
        {/* Navigation à droite */}
        <nav aria-label="Main Navigation">
          <ul className="flex space-x-4">
            <li>
              <a
                href="#home"
                className="text-grayDark-12 transition-colors duration-300 hover:text-grayDark-11"
                aria-label="Accueil"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-grayDark-12 transition-colors duration-300 hover:text-grayDark-11"
                aria-label="À propos"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-grayDark-12 transition-colors duration-300 hover:text-grayDark-11"
                aria-label="Projets"
              >
                Projets
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-grayDark-12 transition-colors duration-300 hover:text-grayDark-11"
                aria-label="Compétences"
              >
                Compétences
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-grayDark-12 transition-colors duration-300 hover:text-grayDark-11"
                aria-label="Contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
