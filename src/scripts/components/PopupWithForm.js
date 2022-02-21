import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, handleFormSubmit) {
    super(selector);
    this._form = this._selector.querySelector('.form');
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._inputList = Array.from(this._selector.querySelectorAll('.form__input'));

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

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._handleFormSubmit(this._getInputValues());

      this.closePopup();
    })
  };
}

