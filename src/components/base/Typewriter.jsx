// src/components/base/Typewriter.jsx
import React from "react";
import Typewriter from "typewriter-effect";
import PropTypes from "prop-types";

const TypewriterComponent = ({ textArray }) => {
  return (
    <div className="">
      <Typewriter
        options={{
          strings: textArray,
          autoStart: true,
          loop: false,
          deleteSpeed: Infinity,
          delay: 75,
          cursor: "", // Facultatif : ajuste la vitesse de l'écriture si nécessaire
        }}
      />
    </div>
  );
};

TypewriterComponent.propTypes = {
  textArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TypewriterComponent;
