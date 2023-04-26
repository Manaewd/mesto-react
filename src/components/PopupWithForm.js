function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : '' }`}>
            <div className="popup__container">
                <button type="button" title="Закрыть" className="popup__button-close" onClick={props.onClose}>
                </button>
                <form
                className={'popup__form popup__form-${props.nameForm}'}
                noValidate
                >
                <h2 className="popup__title">{props.textTitle}</h2>
                {props.children}
                <button type="submit" title="Сохранить" className="popup__button-save" disabled>{props.textButton}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm