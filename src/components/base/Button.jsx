import PropTypes from "prop-types";

export default function Button({
  children,
  href,
  ariaLabel,
  onClick,
  variant = "filled",
  className = "",
}) {
  const baseClasses =
    "z-10 rounded-sm px-2 py-1.5 font-mono transition-colors duration-300 text-center";
  const variants = {
    filled:
      "bg-grayDark-7 text-grayDark-1 hover:bg-grayDark-9 border border-transparent",
    outline:
      "bg-transparent text-grayDark-12 border border-grayDark-7 hover:bg-grayDark-7",
  };

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  ariaLabel: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["filled", "outline"]),
  className: PropTypes.string, // Ajout de className pour la flexibilité externe
};
