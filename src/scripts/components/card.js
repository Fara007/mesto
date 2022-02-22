class Card {
  constructor(selector, name, link, alt, handleCardClick) {
    this._selector = selector;
    this._name = name;
    this._link = link;
    this._alt = alt;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    return document
           .querySelector(this._selector)
           .content
           .querySelector('.element')
           .cloneNode(true);
  }

  _deleteCardButton = () => {
    this._element.remove();
    this._element = null;
  }

  _activateLike = () => {
    this._like.classList.toggle('element__like_active');
  }

  getView() {
    this._element = this._getTemplate();
    this._like = this._element.querySelector('.element__like');
    this._cardImage = this._element.querySelector('.element__image');
    this._element.querySelector('.element__title').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._alt;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.element__delete-icon').addEventListener('click', this._deleteCardButton);

    this._like.addEventListener('click', this._activateLike);

    this._cardImage.addEventListener('click', () => {this._handleCardClick()});
  }
}

export default Card;
