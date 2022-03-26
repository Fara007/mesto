class Card {
  constructor(selector, name, link, alt, likes, id, userId, ownerId, handleCardClick, handleDeleteClick, handleLikeClick) {
    this._selector = selector;
    this._name = name;
    this._link = link;
    this._alt = alt;
    this._likes = likes;
    this._id = id;
    this._userId = userId;
    this._owner = ownerId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    return document
           .querySelector(this._selector)
           .content
           .querySelector('.element')
           .cloneNode(true);
  }

  deleteCard() {
    this._element.remove();
  }

  isLiked() {
    const userHasLikedCard = this._likes.find(user => user._id === this._userId);
    return userHasLikedCard;
  }

  _activateLike = () => {
    this._like.classList.add('element__like_active');
  }

  _disableLike = () => {
    this._like.classList.remove('element__like_active');
  }

  setLikes(newLikes) {
    this._likes = newLikes;
    this._likeCountElements.textContent = this._likes.length;

    if (this.isLiked()) {
      this. _activateLike();
    } else {
      this._disableLike();
    }
  }

  getView() {
    this._element = this._getTemplate();
    this._like = this._element.querySelector('.element__like');
    this._likeCountElements = this._element.querySelector('.element__like-count');
    this._cardImage = this._element.querySelector('.element__image');
    this._element.querySelector('.element__title').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._alt;

    this._setEventListeners();

    this.setLikes(this._likes);
    
    if(this._userId !== this._owner) {
      this._element.querySelector('.element__delete-icon').style.display = 'none';
    } 

    return this._element;
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => {this._handleCardClick()});
    
    this._element.querySelector('.element__delete-icon').addEventListener('click', () => {this._handleDeleteClick(this._id)});

    this._like.addEventListener('click', () => {this._handleLikeClick(this._id)});
  }
}

export default Card;
