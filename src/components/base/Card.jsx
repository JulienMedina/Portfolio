import PropTypes from "prop-types";
import Button from "./Button"; // Importation de ton bouton personnalisé

const Card = ({ image, title, description, buttonText, buttonLink }) => {
  return (
    <div className="card card-compact w-60 rounded-sm border-2 border-solid border-grayDark-7 bg-grayDark-1 shadow-xl md:w-96">
      <figure className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className=" size-full object-cover hover:blur-sm"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {/* Utilisation de ton composant Button à la place de celui de DaisyUI */}
          <Button href={buttonLink} ariaLabel={`Button for ${title}`}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired, // Lien vers l'image
  title: PropTypes.string.isRequired, // Titre de la card
  description: PropTypes.string.isRequired, // Description ou texte
  buttonText: PropTypes.string.isRequired, // Texte du bouton
  buttonLink: PropTypes.string.isRequired, // Lien du bouton
};

export default Card;
