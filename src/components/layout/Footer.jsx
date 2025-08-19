const Footer = () => {
  return (
    <footer className="bg-gray-dark-1 p-6 text-center text-gray-dark-12">
      <section className="container mx-auto flex flex-col items-center justify-between md:flex-row md:items-center md:justify-between">
        <div className="mb-4 md:mb-0">
          <span className="block text-xl font-semibold">Julien Medina</span>
        </div>
        <nav className="mb-4 flex space-x-6 md:mb-0">
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            className="text-gray-dark-12 transition-colors duration-300 hover:text-gray-dark-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://github.com/JulienMedina"
            aria-label="GitHub"
            className="text-gray-dark-12 transition-colors duration-300 hover:text-gray-dark-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/julien-m-269497236/"
            aria-label="LinkedIn"
            className="text-gray-dark-12 transition-colors duration-300 hover:text-gray-dark-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </nav>
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
