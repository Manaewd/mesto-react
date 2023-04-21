function Main() {
    return (
        <main>
        <section className="profile">
          <div className="profile__image" name="avatar" onClick={handleEditAvatarClick}></div>
          <div className="profile__info">
            <div className="profile__info-container">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <button type="button" className="profile__edit-button" onClick={handleEditProfileClick}></button>
            </div>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
          <button type="button" className="profile__add-button" onClick={handleAddPlaceClick}></button>
        </section>
        <section className="elements">
          <template className="template">
            <article className="element">
              <button type="button" className="element__trash-button"></button>
              <img className="element__image" src="#" alt="" />
              <div className="element__container">
                <h2 className="element__title"></h2>
                <div className="element__container-like">
                <button type="button" className="element__button" aria-label="like"></button>
                <p className="element__like-meter">0</p>
                </div>
              </div>
            </article>
          </template>
        </section>
      </main>
    )
}

function handleEditAvatarClick() {
    document.querySelector('.popup_profile-avatar').classList.add('popup_opened')
}

function handleEditProfileClick() {
    document.querySelector('.popup_edit_profile').classList.add('popup_opened')
}

function handleAddPlaceClick() {
    document.querySelector('.popup_add-profile').classList.add('popup_opened')
}
export default Main