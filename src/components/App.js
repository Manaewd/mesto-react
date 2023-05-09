import React from "react";
import api from "../utils/Api"
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfileOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);


  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then((result) => {
        const [userData, cardsData] = result;
        setCurrentUser(userData);
        setCards(cardsData);
      })
      .catch((err) => console.log(err));
    }, []);

  function handleCardLike(card) {
      // Снова проверяем, есть ли уже лайк на этой карточке
      const isLiked = card.likes.some(i => i._id === currentUser._id);
      
      // Отправляем запрос в API и получаем обновлённые данные карточки
      api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => console.log(err));
  };

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards(cards => cards.filter((c) => c._id !== card._id))
      })
      .catch((err) => console.log(err));
    };
  

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />
      <Footer />
      <PopupWithForm
        name="edit"
        textTitle="Редактировать профиль"
        textButton="Сохранить"
        nameForm="edit"
        isOpen={isEditProfileOpen}
        onClose={closeAllPopups}
      >
        <input
          minLength="2"
          maxLength="40"
          type="text"
          name="profilename"
          placeholder="Ваше имя"
          className="popup__item popup__item_type_name"
          required
        ></input>
        <span id="input-edit-name-error" className="popup__error" />
        <input
          id="input-job"
          required
          minLength="2"
          maxLength="200"
          type="text"
          name="profilejob"
          placeholder="Сфера деятельности"
          className="popup__item popup__item_type_job"
        ></input>
        <span id="input-job-error" className="popup__error" />
      </PopupWithForm>

      <PopupWithForm
        name="add"
        textTitle="Новое место"
        textButton="Создать"
        nameForm="add"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="input-add-name"
          required
          minLength="2"
          maxLength="30"
          type="text"
          name="name"
          placeholder="Название"
          className="popup__item popup__item_add_name"
        ></input>
        <span id="input-add-name-error" className="popup__error" />
        <input
          id="input-link"
          required
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          className="popup__item popup__item_add_url"
        ></input>
        <span id="input-link-error" className="popup__error" />
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        textTitle="Обновить аватар"
        textButton="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        nameForm="avatar"
        onClose={closeAllPopups}
      >
        <input
          className="popup__item popup__item_enter_avatar"
          type="url"
          name="avatar"
          id="input-avatar"
          placeholder="Ссылка на картинку"
          required
        ></input>
        <span className="popup__error" id="input-avatar-error" />
      </PopupWithForm>

      <PopupWithForm
        name="delete"
        title="Вы уверены?"
        textButton="Да"
        onClose={closeAllPopups}
      ></PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        />
    </div>
  </CurrentUserContext.Provider>
)}

export default App;