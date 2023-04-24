import React from 'react';

import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'

function App() {
  const [isEditProfileOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const handleEditProfileClick = () => { setIsEditProfilePopupOpen(true) };
  const handleAddPlaceClick = () => { setIsAddPlacePopupOpen(true) };
  const handleEditAvatarClick = () => { setIsEditAvatarPopupOpen(true) };

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
    
    <PopupWithForm
    name='edit'
    textTitle='Редактировать профиль'
    textButton='Сохранить'
    nameForm='edit'
    isOpen={isEditProfileOpen}
    onClose={closeAllPopups}
    >
          <input id="input-edit-name" minlength="2" maxlength="40" type="text" name="profilename" placeholder="Ваше имя" className="popup__item popup__item_type_name" required></input>
          <span id="input-edit-name-error" className="popup__error"/>
          <input id="input-job" required minlength="2" maxlength="200" type="text" name="profilejob" placeholder="Сфера деятельности" className="popup__item popup__item_type_job"></input>
          <span id="input-job-error" className="popup__error"/>
    </PopupWithForm>
  
    <PopupWithForm
    name='add'
    textTitle='Новое место'
    textButton='Создать'
    nameForm='add'
    isOpen={isAddPlacePopupOpen}
    onClose={closeAllPopups}
    >
          <input id="input-add-name" required minlength="2" maxlength="30" type="text" name="name" placeholder="Название" className="popup__item popup__item_add_name"></input>
          <span id="input-add-name-error" className="popup__error"/>
          <input id="input-link" required type="url" name="link" placeholder="Ссылка на картинку" className="popup__item popup__item_add_url"></input>
          <span id="input-link-error" className="popup__error"/>
    </PopupWithForm>
  
    <PopupWithForm
      name='avatar'
      textTitle='Обновить аватар'
      textButton='Сохранить'
      isOpen={isEditAvatarPopupOpen}
      nameForm='avatar'
      onClose={closeAllPopups}
      >
            <input className="popup__item popup__item_enter_avatar" type="url" name="avatar" id="input-avatar" placeholder="Ссылка на картинку" required></input>
            <span className="popup__error" id="input-avatar-error"/>
    </PopupWithForm>
  
    <PopupWithForm
    name='delete'
    title='Вы уверены?'
    textButton='Да'
    >
    </PopupWithForm>
    </div>
  )
}

export default App;
