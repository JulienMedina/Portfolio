import React from "react";
import PropTypes from "prop-types";

const Badge = React.memo(({ label, bgColor, textColor }) => {
  return (
    <span
      className={`rounded-full px-3 py-2 text-sm font-medium ${bgColor} ${textColor} sm:px-4 sm:text-base `}
    >
      {label}
    </span>
  );
});

Badge.displayName = "Badge";
Badge.propTypes = {
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default Badge;
