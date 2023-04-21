import React from 'react';

import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
    
    <div className="popup popup_edit_profile">
      <div className="popup__container">
        <button type="button" className="popup__button-close"></button>
        <form method="post" className="popup__form popup__form-edit" name="popup__form-edit" novalidate>
          <h2 className="popup__title">Редактировать профиль</h2>
          <input id="input-edit-name" minlength="2" maxlength="40" type="text" name="profilename" placeholder="Ваше имя" className="popup__item popup__item_type_name" required></input>
          <span id="input-edit-name-error" className="popup__error"/>
          <input id="input-job" required minlength="2" maxlength="200" type="text" name="profilejob" placeholder="Сфера деятельности" className="popup__item popup__item_type_job"></input>
          <span id="input-job-error" className="popup__error"/>
          <button type="submit" className="popup__button-save" aria-label="">Сохранить</button>
        </form>
      </div>
    </div>
  
    <div className="popup popup_add-profile">
      <div className="popup__container">
        <button type="button" className="popup__button-close"></button>
        <form method="post" className="popup__form popup__form-add" id="form-add-card" name="popup__form-add" novalidate>
          <h2 className="popup__title">Новое место</h2>
          <input id="input-add-name" required minlength="2" maxlength="30" type="text" name="name" placeholder="Название" className="popup__item popup__item_add_name"></input>
          <span id="input-add-name-error" className="popup__error"/>
          <input id="input-link" required type="url" name="link" placeholder="Ссылка на картинку" className="popup__item popup__item_add_url"></input>
          <span id="input-link-error" className="popup__error"/>
          <button type="submit" className="popup__button-save" disabled aria-label="">Создать</button>
        </form>
      </div>
    </div>
  
    <div className="popup popup_add-image">
      <div className="popup__container-image">
        <button type="button" className="popup__button-close"></button>
        <img className="popup__image" src="#" alt="" />
        <h3 className="popup__image-name"></h3>
      </div>
    </div>
  
    <div className="popup popup_profile-avatar">
      <div className="popup__container">
        <button type="button" className="popup__button-close"/>
        <form method="post" className="popup__form popup__form-avatar" id="popup-form-avatar" name="popup__form-avatar" novalidate>
          <h2 className="popup__title">Обновить аватар</h2>
            <input className="popup__item popup__item_enter_avatar" type="url" name="avatar" id="input-avatar" placeholder="Ссылка на картинку" required></input>
            <span className="popup__error" id="input-avatar-error"/>
          <button type="submit" className="popup__button-save" disabled aria-label="">Сохранить</button>
        </form>
      </div>
    </div>
  
    <div className="popup popup_delete-card">
      <div className="popup__container">
        <button className="popup__button-close" type="button"></button>
        <h2 className="popup__title">Вы уверены?</h2>
        <button type="submit" className="popup__button-save">Да</button>
      </div>
    </div>
    </div>
  )
}

export default App;
