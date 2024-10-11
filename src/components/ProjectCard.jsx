import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="rounded-lg bg-grayDark-2 p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <h3 className="mb-4 text-2xl font-semibold text-grayDark-12">{title}</h3>
      <p className="mb-6 text-grayDark-9">{description}</p>
      <a
        href={link}
        className="font-mono text-grayDark-12 underline transition-colors hover:text-grayDark-7"
        aria-label={`View more about ${title}`}
      >
        /view more
      </a>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
