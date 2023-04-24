import React from "react"

function Main(props) {
    return (
        <main>
        <section className="profile">
          <div className="profile__image" name="avatar" onClick={props.onEditAvatar}></div>
          <div className="profile__info">
            <div className="profile__info-container">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <button type={"button"} className="profile__edit-button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
          <button type={"button"} className="profile__add-button" onClick={props.onAddPlace}></button>
        </section>
        <section className="elements">
          <template className="template">
            <article className="element">
              <button type={"button"} className="element__trash-button"></button>
              <img className="element__image" src="#" alt="" />
              <div className="element__container">
                <h2 className="element__title"></h2>
                <div className="element__container-like">
                <button type={"button"} className="element__button" aria-label="like"></button>
                <p className="element__like-meter">0</p>
                </div>
              </div>
            </article>
          </template>
        </section>
      </main>
    )
}

export default Main