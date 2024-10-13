const Footer = () => {
  return (
    <footer className="bg-auto p-4 text-center text-grayDark-12">
      <section className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        {/* Section d'information */}
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold">Julien Medina</span>
          <span className="text-sm">Développeur Web</span>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-sm md:mt-0">
          <p>
            &copy; {new Date().getFullYear()} Julien Medina. Tous droits
            réservés
          </p>
        </div>

        {/* Réseaux sociaux */}
        {/* Réseaux sociaux */}
        <nav className="mt-4 flex flex-col space-x-0 text-center md:mt-0 md:flex-row md:space-x-4">
          <a
            href="https://twitter.com"
            className="text-grayDark-12 transition-colors duration-300 hover:text-grayDark-4"
          >
            Twitter
          </a>
          <a
            href="https://github.com"
            className="text-grayDark-12 transition-colors duration-300 hover:text-grayDark-4"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            className="text-grayDark-12 transition-colors duration-300 hover:text-grayDark-4"
          >
            LinkedIn
          </a>
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
