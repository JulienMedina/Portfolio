import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Card = React.memo(function Card({
  image,
  title,
  description,
  buttonText,
  buttonLink,
  demoLink,
}) {
  return (
    <div className="card card-compact flex w-72 flex-col rounded-sm border-2 border-solid border-grayDark-7 bg-grayDark-1 shadow-xl md:w-96">
      <figure className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="size-full object-cover transition duration-500 ease-in-out hover:scale-110 hover:blur-sm"
          loading="lazy"
        />
      </figure>
      <div className="card-body flex flex-1 flex-col">
        <h2 className="card-title text-xl font-semibold text-grayDark-12">
          {title}
        </h2>
        <p className="flex-1 overflow-auto text-sm text-grayDark-11">
          {description}
        </p>
        <div className="card-actions flex flex-wrap justify-center gap-2 md:justify-end">
          <Button
            href={buttonLink}
            ariaLabel={`Lien GitHub pour ${title}`}
            variant="filled"
            className="flex-1 text-center"
          >
            {buttonText}
          </Button>
          {demoLink && (
            <Button
              href={demoLink}
              ariaLabel={`Voir la démo de ${title}`}
              variant="outline"
              className="flex-1 text-center"
            >
              Voir la démo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
});

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  demoLink: PropTypes.string,
};

export default Card;
