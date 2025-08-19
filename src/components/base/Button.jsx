import PropTypes from "prop-types";

export default function Button({
  children,
  href,
  ariaLabel,
  onClick,
  variant = "filled",
  className = "",
  type = "button",
}) {
  const baseClasses =
    "z-10 rounded-xs px-2 py-1.5 font-mono transition-colors duration-300 text-center";
  const variants = {
    filled:
      "bg-gray-dark-7 text-gray-dark-1 hover:bg-gray-dark-9 border border-transparent",
    outline:
      "bg-transparent text-gray-dark-12 border border-gray-dark-7 hover:bg-gray-dark-7",
  };

  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={`${baseClasses} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  ariaLabel: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["filled", "outline-solid"]),
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};
