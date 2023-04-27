function Card(props) {
    
    function handleClick() {
        props.onCardClick(props.card)
      }    

    return (
        <div className="element">
          <button type={"button"} className="element__trash-button"></button>
          <img
          className="element__image" 
          src={props.card.link}
          alt={props.card.name}
          onClick={handleClick}
          />
          <div className="element__container">
            <h2 className="element__title">{props.card.name}</h2>
            <div className="element__container-like">
            <button type="button" className="element__button" aria-label="like"></button>
            <p className="element__like-meter">{props.card.likes.length}</p>
            </div>
          </div>
        </div>
    )
}

export default Card