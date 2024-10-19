import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import DiagonalLinesSVG from "../../assets/Group.svg";

const DiagonalLinesSVGComponent = ({ startX, startY, delay, duration }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      svgRef.current,
      {
        x: startX,
        y: startY,
        opacity: 1, // Commence à pleine opacité
      },
      {
        x: startX + 500, // Par exemple, déplacement vers la droite
        y: startY + 500, // Descente
        opacity: 0, // Fade-out progressif
        duration: duration, // Durée totale de l'animation
        ease: "linear",
        repeat: -1, // Répétition infinie
        delay: delay, // Ajout d'un délai
      }
    );
  }, [startX, startY, delay, duration]);

  return (
    <img
      src={DiagonalLinesSVG}
      alt="Lignes diagonales décoratives"
      ref={svgRef}
      className="absolute z-0 w-1/2 md:w-1/3 lg:w-1/4" // Classes tailwind pour le style
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
