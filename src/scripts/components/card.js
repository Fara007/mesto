class Card {
  constructor(selector, name, link, alt, likes, id, userId, ownerId, handleCardClick, handleDeleteClick) {
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
    this._element = null;
  }

  _activateLike = () => {
    this._like.classList.toggle('element__like_active');
  }

  //_setLikes() {
  //  const likeCountElements = document.querySelector('.element__like-count');
  //  likeCountElements.textContent = this._likes.length;
  //}

  getView() {
    this._element = this._getTemplate();
    this._like = this._element.querySelector('.element__like');
    this._cardImage = this._element.querySelector('.element__image');
    this._element.querySelector('.element__title').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._alt;

    this._setEventListeners();

    //this._setLikes();
    
    if(this._userId !== this._owner) {
      console.log(this._userId, this._owner);
      this._element.querySelector('.element__delete-icon').style.display = 'none';
    } 

    return this._element;
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => {this._handleCardClick()});
    
    this._element.querySelector('.element__delete-icon').addEventListener('click', () => {this._handleDeleteClick(this._id)});

    this._like.addEventListener('click', this._activateLike);
  }
}

export default Card;
