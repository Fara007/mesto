class Popup {
  constructor(selector) {
    this._selector = selector;
  }

  openPopup() {
    this._selector.classList.add('.popup_opened');
    document.addEventListener('keydown', this._handleEscClose());
  }

  closePopup() {
    this._selector.classList.remove('.popup_opened');
    document.removeEventListener('keydown', this._handleEscClose());
  }

  _handleEscClose = (event) => {
    if (event.key === 'Escape') {
      this.closePopup();
    }
  }

  _setEventListener() {
    const buttonClose = this._selector.querySelector('.popup__close-icon');
    const popupOverlay = this._selector.querySelector('.popup__overlay');

    buttonClose.addEventListener('click', () => this.closePopup());
    popupOverlay.addEventListener('click', () => this.closePopup());
  }
}

export default Popup;
