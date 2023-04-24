import React from "react"

function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : '' }`}>
            <div
                className="popup__container">
                <button type="button"
                className="popup__button-close">
                </button>
                <form
                className={'popup__form popup__form-${props.nameForm}'}
                novalidate
                >
                <h2 className="popup__title">{props.textTitle}</h2>
                <button type="submit" className="popup__button-save" disabled>{props.textButton}</button>
                {props.children}
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm