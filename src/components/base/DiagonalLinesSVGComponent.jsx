import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import DiagonalLinesSVG from "../../assets/svg/Group.svg";

const DiagonalLinesSVGComponent = ({ startX, startY, delay, duration }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      svgRef.current,
      {
        x: startX,
        y: startY,
        opacity: 1,

        // Commence à pleine opacité
      },
      {
        x: startX + 100, // Par exemple, déplacement vers la droite
        y: startY + 200, // Descente
        opacity: 1,
        // Fade-out progressif
        duration: duration, // Durée totale de l'animation
        ease: "power2.out", // Effet d'accélération
        repeat: 0, // Répétition infinie
        delay: delay,
        // Ajout d'un délai // Ajout d'un délai
      }
    );
  }, [startX, startY, delay, duration]);

  return (
    <img
      src={DiagonalLinesSVG}
      alt="Lignes diagonales décoratives"
      ref={svgRef}
      className="absolute left-0 top-[-100px] z-0 w-1/2 md:w-1/3 lg:w-1/4" // Classes tailwind pour le style
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
