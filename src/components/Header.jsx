// import "./header.css"; // Assurez-vous de créer un fichier CSS pour styliser votre header

const Header = () => {
  return (
    <header className="w-full bg-auto  shadow-md" role="banner">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Initiales à gauche */}
        <div
          className="font-mono text-2xl text-grayDark-12"
          aria-label="Initiales JM"
        >
          Julien Medina
        </div>
        {/* Navigation à droite */}
        <nav aria-label="Main Navigation">
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
                /skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-mono text-grayDark-12 transition-colors duration-300 hover:text-grayDark-4"
                aria-label="Contact"
              >
                /Contact me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
