const editButton = document.querySelector(".profile__edit-button");//Находим в документе кнопку "Редактировать"
const addButton = document.querySelector(".profile__add-button");//Находим в документе кнопку "Добавить"
const popupEditProfile = document.querySelector(".popup_edit");//Находим попап редактирования профиля
const popupAddCard = document.querySelector(".popup_add");//Находим попап добавления карточки
const popupImage = document.querySelector(".popup_image");//Находим попап с картинкой
const popupCloseEdit = document.querySelector(".popup__close-icon_edit");//Находим кнопку "Закрыть" попап редактирования профиля
const popupCloseAdd = document.querySelector(".popup__close-icon_add");//Находим кнопку "Закрыть" попап добавления карточки
const popupCloseImage = document.querySelector(".popup__close-icon_image");//Находим кнопку "Закрыть" попап с картинкой
const formEdit = document.querySelector(".form_edit");//Находим форму редактирования
const formAdd = document.querySelector(".form_add");//Находим форму добавления
const nameInput = formEdit.querySelector(".form__input_user_name");//Находим в форме первую строчку, содержащую имя пользователя
const jobInput = formEdit.querySelector(".form__input_user_job");//Находим в форме вторую строчку, содержащую деятельность пользователя
const nameUser = document.querySelector(".profile__info-name");//Находим в документе имя пользователя
const jobUser = document.querySelector(".profile__info-job");//Находим в документе деятельность пользователя
const placeName = document.querySelector(".form__input_place_name");//Находим в форме первую строчку, содержащую название
const placeLink = document.querySelector(".form__input_place_link");//Находим в форме первую строчку, содержащую ссылку на картинку
const cardAdd = document.querySelector(".form__button_add_card")//Находим в форму кнопку "Создать" карточку для отправки
const cardContainer = document.querySelector(".elements")//Находим в документе контейнер с карточками
const templateEl = document.querySelector(".template");//Находим в документе template элемент
const imageEl = document.querySelector('.figure__image');//Находим в документе элемент с картинкой
const captionEl = document.querySelector('.figure__subtitle');//Находим в документе подзаголовок к картинке

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
  somePopup.classList.add("popup_opened");
} //Создаем функцию открытия попапа

function openPopupEdit() {
  nameInput.value = nameUser.textContent;//Передаем текст с именем из профайла в инпут формы
  jobInput.value = jobUser.textContent;//Передаем текст с деятельностью из профайла в инпут формы

  openPopup(popupEditProfile);
}//Создаем функцию для открытия попапа редактирования

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
  somePopup.classList.remove("popup_opened");
} //Создаем функцию закрытия попапа

function SubmitHandle (evt) {
  evt.preventDefault(); // Отменяем стандартную отправку формы
  nameUser.textContent = nameInput.value;//Передаем текст с именем из инпута в профайл
  jobUser.textContent = jobInput.value;//Передаем текст с деятельностью из инпута в профайл
  closePopup(popupEditProfile);
}

function CreateHandle(evt) {
  evt.preventDefault();

  const newCard = {
    name: placeName.value,
    link: placeLink.value,
  }

  const cardHTML = addCard(newCard);
  cardContainer.prepend(cardHTML);
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
addButton.addEventListener('click', ()=> openPopup(popupAddCard));// Прикрепляем обработчик открытия попапа добавления карточки
popupCloseEdit.addEventListener('click', ()=> closePopup(popupEditProfile));// Прикрепляем обработчик к форме: по клику на кнопку "Закрыть" закрывается попап
popupCloseAdd.addEventListener('click', ()=> closePopup(popupAddCard));// Прикрепляем обработчик закрытия попапа добавления карточки
popupCloseImage.addEventListener('click', ()=> closePopup(popupImage));// Прикрепляем обработчик закрытия попапа с картинкой
formEdit.addEventListener('submit', SubmitHandle);// Прикрепляем обработчик к форме: он следит за событием “submit” редактирования профиля
formAdd.addEventListener('submit', CreateHandle);// Прикрепляем обработчик к форме: он следит за событием “submit” добавления карточки
