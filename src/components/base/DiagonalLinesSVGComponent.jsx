import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import DiagonalLinesSVG from "../../assets/svg/Group.min.svg";

const DiagonalLinesSVGComponent = ({
  startX,
  startY,
  delay = 0,
  duration = 1,
}) => {
  const svgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      svgRef.current,
      {
        x: startX,
        y: startY,
        opacity: 1,
      },
      {
        x: startX + 50, // Déplacement horizontal réduit
        y: startY + 50, // Déplacement vertical réduit

        opacity: 0.8, // Légère diminution de l'opacité
        duration: duration,
        ease: "power2.out",
        delay: delay,
      }
    );
  }, [startX, startY, delay, duration]);

  return (
    <img
      src={DiagonalLinesSVG}
      alt="Lignes diagonales décoratives"
      ref={svgRef}
      loading="lazy" // Lazy-loading pour améliorer les performances
      width="200" // Ajout d'une largeur explicite (modifie en fonction du SVG)
      height="200" // Ajout d'une hauteur explicite (modifie en fonction du SVG)
      className="absolute left-0 top-0 z-0 w-1/2 md:w-1/3 lg:w-1/4" // Classes Tailwind
    />
  );
};

DiagonalLinesSVGComponent.propTypes = {
  startX: PropTypes.number.isRequired,
  startY: PropTypes.number.isRequired,
  delay: PropTypes.number,
  duration: PropTypes.number,
};

export default DiagonalLinesSVGComponent;
