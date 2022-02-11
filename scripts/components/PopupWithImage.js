import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
  constructor (selector) {
    super(selector);
    this._image = document.querySelector('.figure__image');
    this._name = document.querySelector('.figure__subtitle');
  }

  openPopup({link, name})  {
    this._image.src = link;
    this._name.textContent = name;
    this._image.alt = name;
    super.openPopup();
  }
}
