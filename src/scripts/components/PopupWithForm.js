import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popup, handleFormSubmit) {
    super(popup);
    this._form = this._popup.querySelector('.form');
    this._inputList = Array.from(this._popup.querySelectorAll('.form__input'));
    this._handleFormSubmit = handleFormSubmit;
    this._loadingButton = this._popup.querySelector('.form__button');
    this._buttonText = this._loadingButton.textContent;
  }

  _getInputValues() {
    this._formValues = {};

    this._inputList.forEach( input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  closePopup() {
    super.closePopup();
    this._form.reset();
  }

  changeSubmitHandler(newSubmitHandler) {
    this._handleFormSubmit = newSubmitHandler;
  }

  renderLoading(isLoading) {
    if (isLoading) {
        this._loadingButton.textContent = 'Сохранение...';
    } else {
        this._loadingButton.textContent = this._buttonText;
    }
}

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._handleFormSubmit(this._getInputValues());
    })
  };
}

