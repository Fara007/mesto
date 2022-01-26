//------------------------------------------------Popup----------------------------------------------------//
const popups = document.querySelectorAll('.popup');//Находим попап
const popupEditProfile = document.querySelector(".popup_edit");//Находим попап редактирования профиля
const popupAddCard = document.querySelector(".popup_add");//Находим попап добавления карточки
const popupImage = document.querySelector(".popup_image");//Находим попап с картинкой
const imageEl = document.querySelector(".figure__image");//Находим в документе элемент с картинкой
const captionEl = document.querySelector(".figure__subtitle");//Находим в документе подзаголовок к картинке
//------------------------------------------------Profile----------------------------------------------------//
const editButton = document.querySelector(".profile__edit-button");//Находим в документе кнопку "Редактировать"
const addButton = document.querySelector(".profile__add-button");//Находим в документе кнопку "Добавить"
const nameUser = document.querySelector(".profile__info-name");//Находим в документе имя пользователя
const jobUser = document.querySelector(".profile__info-job");//Находим в документе деятельность пользователя
//-------------------------------------------------Form------------------------------------------------------//
const formEdit = document.querySelector(".form_edit");//Находим форму редактирования
const formAdd = document.querySelector(".form_add");//Находим форму добавления
const nameInput = formEdit.querySelector(".form__input_user_name");//Находим в форме первую строчку, содержащую имя пользователя
const jobInput = formEdit.querySelector(".form__input_user_job");//Находим в форме вторую строчку, содержащую деятельность пользователя
const placeName = document.querySelector(".form__input_place_name");//Находим в форме первую строчку, содержащую название
const placeLink = document.querySelector(".form__input_place_link");//Находим в форме первую строчку, содержащую ссылку на картинку
const cardAddButton = document.querySelector(".form__button_add_card")//Находим в форму кнопку "Создать" карточку
//------------------------------------------------Template----------------------------------------------------//
const cardContainer = document.querySelector(".elements")//Находим в документе контейнер с карточками
const templateEl = document.querySelector(".template");//Находим в документе template элемент

function render(cardsArr, container) {
  const cardsHTML = initialCards.map((card) => {
  return addCard(card);
  });

  cardContainer.append(...cardsHTML);
}//Создаем функцию для рендера карточек

render(initialCards, cardContainer);

function addCard(card) {
  const newCard = templateEl.content.cloneNode(true);//Клонируем дерево из template

  const headerEl = newCard.querySelector('.element__title');
  headerEl.textContent = card.name;//Присваиваем имя картинки в заголовок

  const imgCard = newCard.querySelector('.element__image');
  imgCard.setAttribute('src', card.link);
  imgCard.setAttribute('alt', card.name);
  imgCard.addEventListener('click', openPopupImage);//Прикрепляем обработчик для открытия попапа с картинкой при клике на картинку в карточке

  const deleteButton = newCard.querySelector('.element__delete-icon');
  deleteButton.addEventListener('click', deleteCard);//Прикрепляем обработчик для удаления карточки при клике на иконку

  const likeButton = newCard.querySelector('.element__like');
  likeButton.addEventListener('click', activelike);//Прикрепляем обработчик для лайка при клике на элемент лайк

  return newCard;
}

function openPopup(somePopup) {
  document.addEventListener('keydown', keyHandler);//// Прикрепляем обработчик закрытия попапа нажатием на Esc
  somePopup.classList.add("popup_opened");
} //Создаем функцию открытия попапа

function openPopupEdit() {
  nameInput.value = nameUser.textContent;//Передаем текст с именем из профайла в инпут формы
  jobInput.value = jobUser.textContent;//Передаем текст с деятельностью из профайла в инпут формы

  openPopup(popupEditProfile);
}//Создаем функцию для открытия попапа редактирования

function openPopupAdd() {
  formAdd.reset();

  cardAddButton.classList.add("form__button_disabled");
  cardAddButton.disabled = true;

  openPopup(popupAddCard);
}//Создаем функцию для открытия попапа создания карточки

function openPopupImage(event) {
  const targetEl = event.target;
  const targetElLink = event.target.getAttribute('src');
  const targetElAlt = event.target.getAttribute('alt');

  imageEl.setAttribute('src', targetElLink);
  imageEl.setAttribute('alt', targetElAlt);

  captionEl.textContent = targetElAlt;

  openPopup(popupImage);
}//Создаем функцию для открытия попапа с картинкой

function closePopup(somePopup) {
  document.removeEventListener('keydown', keyHandler);//// Удаляем обработчик закрытия попапа нажатием на Esc
  somePopup.classList.remove("popup_opened");
} //Создаем функцию закрытия попапа

function keyHandler(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
} //Coздаем функцию закрытия попапа нажатием на Escape

function handleProfileFormSubmit (evt) {
  evt.preventDefault(); // Отменяем стандартную отправку формы
  nameUser.textContent = nameInput.value;//Передаем текст с именем из инпута в профайл
  jobUser.textContent = jobInput.value;//Передаем текст с деятельностью из инпута в профайл
  closePopup(popupEditProfile);
}

function handleCardSubmit(evt) {
  evt.preventDefault();

  const newCard = {
    name: placeName.value,
    link: placeLink.value,
  }

  const cardHTML = addCard(newCard);
  cardContainer.prepend(cardHTML);

  formAdd.reset();

  closePopup(popupAddCard);
}//Создаем функцию для создания карточки

function deleteCard(event) {
  const targetEl = event.target;
  const cardForDelete = targetEl.closest('.element');
  cardForDelete.remove();
}//Создаем функцию для удаления карточки

function activelike(event) {
  const targetEl = event.target;
  targetEl.classList.toggle('element__like_active');
}//Создаем функцию для лайка карточки

editButton.addEventListener('click', openPopupEdit);// Прикрепляем обработчик: по клику на кнопку "Редактировать" открывается попап
addButton.addEventListener('click', openPopupAdd);// Прикрепляем обработчик открытия попапа добавления карточки
popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup__overlay')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close-icon')) {
          closePopup(popup)
        }
    })
})//Oбъявляем функцию, которая проходится по всем попапам и закрывает их по клику на оверлей или иконку крестика
formEdit.addEventListener('submit', handleProfileFormSubmit);// Прикрепляем обработчик к форме: он следит за событием “submit” редактирования профиля
formAdd.addEventListener('submit', handleCardSubmit);// Прикрепляем обработчик к форме: он следит за событием “submit” добавления карточки
