export default function usePrefersReducedMotion() {
  if (typeof window === "undefined") return false;
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  return mql.matches;
}

