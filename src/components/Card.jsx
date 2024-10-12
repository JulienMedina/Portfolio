import PropTypes from "prop-types";
import Button from "./Button"; // Importation de ton bouton personnalisé

const Card = ({ image, title, description, buttonText, buttonLink }) => {
  return (
    <div className="card card-compact w-96 border-grayDark-8 bg-grayDark-2 shadow-xl">
      <figure>
        <img src={image} alt={title} />
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
