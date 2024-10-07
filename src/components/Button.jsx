// eslint-disable-next-line react/prop-types
export default function Button({ children, href, ariaLabel }) {
  if (href) {
    return (
      <a
        href={href}
        className="rounded-none border border-grayDark-7 bg-transparent px-6 py-2 font-mono text-grayDark-12 transition-colors duration-300 hover:bg-grayDark-7"
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      aria-label={ariaLabel}
      className="rounded-none border border-grayDark-7 bg-transparent px-6 py-2 font-mono text-grayDark-12 transition-colors duration-300 hover:bg-grayDark-7"
    >
      {children}
    </button>
  );
}
