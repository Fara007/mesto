class Card {
  constructor(selector, name, link, alt) {
    this._selector = selector;
    this._name = name;
    this._link = link;
    this._alt = alt;
  }

  _getItem() {
    console.log(this._selector)
    return document.querySelector(this._selector)
           .сontent
           .querySelector('.element')
           .cloneNode(true);
  }

  _deleteCardButton() {
    this._element.remove();
  }

  _activateLike() {
    this._like.classList.toggle('element__like_active');
  }

  _setEventListeners() {
    this._element.querySelector('.element__delete-icon').addEventListener('click', _deleteCardButton());

    this._like.addEventListener('click', _activateLike());
  }

  getView() {
    this._element = this._getItem();
    this._like = this._element.querySelector('.element__like');
    this._cardImage = this._element.querySelector('.element__image');
    this._element.querySelector('.element__title').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._alt;

    this._setEventListeners();

    return this._element;
  }
}

export default Card;
