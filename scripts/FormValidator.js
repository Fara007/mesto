class FormValidator {
  constructor(selector, form) {
    this._form = form;
    this._inputSelector = selector.inputSelector;
    this._submitButtonSelector = selector.submitButtonSelector;
    this._inactiveButtonClass = selector.inactiveButtonClass;
    this._inputErrorClass = selector.inputErrorClass;
    this._errorClass = selector.errorClass;
    this._inputList = this._form.querySelectorAll(this._inputSelector);

  }

  _showError(input, errorMessageText) {
    const errorMessage = this._form.querySelector(`#${input.id}-error`);

    errorMessage.textContent = errorMessageText;
    errorMessage.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  }

  _hideError(input) {
    const errorMessage = this._form.querySelector(`#${input.id}-error`);

    errorMessage.textContent = ' ';
    errorMessage.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
  }

  _hasInvalidInput() {
    return Array.from(this._inputList).some((element) => !element.validity.valid);
  }

  _toggleButtonError() {
    if (this._hasInvalidInput(this._inputList)) {
      this._button.classList.add(this._inactiveButtonClass);
      this._button.disabled = true;
    } else {
      this._button.classList.remove(this._inactiveButtonClass);
      this._button.disabled = false;
    }
  }

  _checkIfInputValid(input) {
    if (!input.validity.valid) {
      this._showError(input, input.validationMessage);
    } else {
      this._hideError(input);
    }
  }

  _setInputListeners() {
      this._inputList.forEach((input) => {
      input.addEventListener('input', () =>{
        this._checkIfInputValid(input);
        this._toggleButtonError();
      });
    });
  }

  resetValidation() {
    this._toggleButtonError();

    this._inputList.forEach((inputSelector) => {
      this._hideError(inputSelector)
    });
  }

  enableValidation() {
   this._setInputListeners();
}
}

export default FormValidator;
