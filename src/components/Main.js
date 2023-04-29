import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then((result) => {
        const [userData, cardsData] = result;
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardsData);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <section className="profile">
        <div
          className="profile__image"
          name="avatar"
          style={{ backgroundImage: `url(${userAvatar})` }}
          onClick={props.onEditAvatar}
        ></div>
        <div className="profile__info">
          <div className="profile__info-container">
            <h1 className="profile__title">{userName}</h1>
            <button
              type={"button"}
              className="profile__edit-button"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          type={"button"}
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <div className="elements">
        {cards.map((card) => (
          <Card card={card} key={card._id} onCardClick={props.onCardClick} />
        ))}
      </div>
    </main>
  );
}

export default Main;
