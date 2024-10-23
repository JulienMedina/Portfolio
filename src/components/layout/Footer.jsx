const Footer = () => {
  return (
    <footer className="bg-grayDark-1 p-6 text-center text-grayDark-12">
      <section className="container mx-auto flex flex-col items-center justify-between md:flex-row md:items-center md:justify-between">
        {/* Nom et titre */}
        <div className="mb-4 md:mb-0">
          <span className="block text-xl font-semibold">Julien Medina</span>
        </div>

        {/* Réseaux sociaux */}
        <nav className="mb-4 flex space-x-6 md:mb-0">
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            className="text-grayDark-12 transition-colors duration-300 hover:text-grayDark-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://github.com/JulienMedina"
            aria-label="GitHub"
            className="text-grayDark-12 transition-colors duration-300 hover:text-grayDark-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/julien-m-269497236/"
            aria-label="LinkedIn"
            className="text-grayDark-12 transition-colors duration-300 hover:text-grayDark-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </nav>

        {/* Copyright */}
        <div className="text-sm">
          <p>
            &copy; {new Date().getFullYear()} Julien Medina. Tous droits
            réservés.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
