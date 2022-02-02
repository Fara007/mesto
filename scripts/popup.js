class Popup {
  constructor(selector) {
    this._selector = selector;
  }

  _handleEscClose = (event) => {

    if (event.key ==='Escape') {
      this.closePopup();
    }
  }

  openPopup()  {
    //document.addEventListener('keydown', this._handleEscClose());
    document.querySelector(this._selector).classList.add("popup_opened");

  }

  closePopup() {
    document.querySelector(this._selector).classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose());
  }

  _setEventListener() {
    this._selector.addEventListener('click', this.openPopup);
    const buttonClose = this._selector.querySelector('.popup__close-icon');
    const popupOverlay = this._selector.querySelector('.popup__overlay');

    buttonClose.addEventListener('click', this.closePopup());
    popupOverlay.addEventListener('click', this.closePopup());
  }
}

export default Popup;
