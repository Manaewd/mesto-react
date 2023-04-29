function ImagePopup(props) {
  return (
    <div
      className={`popup popup_add-image ${
        props.card.link ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container-image">
        <button
          type="button"
          className="popup__button-close"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__image"
          src={props.card.link}
          alt={props.card.name}
        />
        <figcaption className="popup__image-name">{props.card.name}</figcaption>
      </div>
    </div>
  );
}

export default ImagePopup;
