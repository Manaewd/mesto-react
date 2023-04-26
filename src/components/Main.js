import React from "react"
import api from "../utils/Api"

function Main(props) {

  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");


  
React.useEffect(() => {
  api.getUserInfo().then( data => {
    setUserName(data.name)
    setUserDescription(data.about)
    setUserAvatar(data.avatar)
  }).catch((err) => 
    console.log(err)
  )
})

    return (
        <main>
        <section className="profile">
          <div className="profile__image" name="avatar" style={{ backgroundImage: `url(${userAvatar})` }} onClick={props.onEditAvatar}></div>
          <div className="profile__info">
            <div className="profile__info-container">
              <h1 className="profile__title">{userName}</h1>
              <button type={"button"} className="profile__edit-button" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
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