import PropTypes from "prop-types";

export default function Button({ children, href, ariaLabel, onClick }) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      onClick={onClick}
      className="z-10 rounded-md border border-grayDark-7 bg-transparent px-6 py-2 font-mono text-grayDark-12 transition-colors duration-300 hover:bg-grayDark-7 "
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
};
