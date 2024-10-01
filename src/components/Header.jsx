// import "./header.css"; // Assurez-vous de créer un fichier CSS pour styliser votre header

const Header = () => {
  return (
    <header className="bg-base-100 shadow-md">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Julien Medina</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="text-blue-500">
                À propos
              </a>
            </li>
            <li>
              <a href="#projects" className="text-blue-500">
                Projets
              </a>
            </li>
            <li>
              <a href="#skills" className="text-blue-500">
                Compétences
              </a>
            </li>
            <li>
              <a href="#contact" className="text-blue-500">
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
