import PropTypes from "prop-types";

const Badge = ({ label, bgColor, textColor }) => {
  return (
    <span
      className={`rounded-full px-3 py-2 text-sm font-medium ${bgColor} ${textColor} sm:px-4 sm:text-base `}
    >
      {label}
    </span>
  );
};
Badge.propTypes = {
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default Badge;
