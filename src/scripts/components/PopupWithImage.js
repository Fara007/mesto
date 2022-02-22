import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor (popup) {
    super(popup);
    this._image = popup.querySelector('.figure__image');
    this._name = popup.querySelector('.figure__subtitle');
  }

  openPopup({link, name})  {
    this._image.src = link;
    this._name.textContent = name;
    this._image.alt = name;
    super.openPopup();
  }
}
