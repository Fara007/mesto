const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Долина Архыз.'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Озеро.'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Жилые дома.'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Гора на Камчатке.'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Железная дорога по среди леса.'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Зимний Байкал.'
  }
];
const editButton = document.querySelector(".profile__edit-button");//Находим в документе кнопку "Редактировать"
const addButton = document.querySelector(".profile__add-button");//Находим в документе кнопку "Добавить"
const popupCloseEdit = document.querySelector(".popup__close-icon_edit");//Находим кнопку "Закрыть" попап
const popupCloseAdd = document.querySelector(".popup__close-icon_add");
const popupTitle = document.querySelector(".popup__title");//Находим заголовок попапа
let formEdit = document.querySelector(".form_edit");//Находим форму
let formAdd = document.querySelector(".form_add");
let nameInput = formEdit.querySelector(".form__input_user_name");//Находим в форме первую строчку, содержащую имя пользователя
let jobInput = formEdit.querySelector(".form__input_user_job");//Находим в форме вторую строчку, содержащую деятельность пользователя
let nameUser = document.querySelector(".profile__info-name");//Находим в документе имя пользователя
let jobUser = document.querySelector(".profile__info-job");//Находим в документе деятельность пользователя
const placeName = document.querySelector(".form__input_place_name");//Находим в форме первую строчку, содержащую название локации
const placeLink = document.querySelector(".form__input_place_link");//Находим в форме первую строчку, содержащую ссылку на картинку
const createButton = document.querySelector(".form__button");//Находим в форму кнопку для отправки
const cardAdd = document.querySelector(".form__button_add_card")
const cardContainer = document.querySelector(".elements")//Находим в документе контейнер с карточками
const cardTitle = document.querySelector(".element__title")
const cardImage = document.querySelector(".element__image")
const templateEl = document.querySelector(".template");//Находим в документе template элемент


function render() {
  const cardsHTML = initialCards.map((card) => {
  return addCards(card);
  });
  cardContainer.append(...cardsHTML);
}

render();

function addCards(card) {
  const newCard = templateEl.content.cloneNode(true);
  const imgCard = newCard.querySelector('.element__image');
  imgCard.setAttribute('src', card.link);
  imgCard.setAttribute('alt', card.alt);

  const headerEl = newCard.querySelector('.element__title');
  headerEl.textContent = card.name;

  const deleteButton = newCard.querySelector('.element__delete-icon');
  deleteButton.addEventListener('click', formDeleteHandler);

  return newCard;
}

function openPopup(somePopup) {
  const popup = document.querySelector(`${somePopup}`);//Находим попап

  popup.classList.add("popup_opened");
} //Создаем функцию открытия попапа
//При открытии в форме уже находятся данные, которые находятся в профайле

function openPopupEdit() {
  nameInput.value = nameUser.textContent;//Передаем текст с именем из профайла в инпут формы
  jobInput.value = jobUser.textContent;//Передаем текст с деятельностью из профайла в инпут формы

  openPopup('.popup_edit');
}

function openPopupAdd() {
  placeName.value = "Название";
  placeLink.value = "Ссылка на картинку";
  openPopup('.popup_add');
}

function closePopup(somePopup) {
  const popup = document.querySelector(`${somePopup}`);

  popup.classList.remove("popup_opened");
} //Создаем функцию закрытия попапа

function formSubmitHandler (evt) {
  evt.preventDefault(); // Отменяем стандартную отправку формы
  nameUser.textContent = nameInput.value;//Передаем текст с именем из инпута в профайл
  jobUser.textContent = jobInput.value;//Передаем текст с деятельностью из инпута в профайл
  closePopup('.popup_edit');
}

function formCreateHandler(evt) {
  evt.preventDefault();

  const newCard = {
    name: placeName.value,
    link: placeLink.value
  }

  const cardHTML = addCards(newCard);
  cardContainer.prepend(cardHTML);
  closePopup('.popup_add');
}

function formDeleteHandler(event) {
  const targetEl = event.target;
  const deleteCard = targetEl.closest('.element');
  deleteCard.remove();
}

editButton.addEventListener('click', openPopupEdit);// Прикрепляем обработчик: по клику на кнопку "Редактировать" открывается попап
addButton.addEventListener('click', openPopupAdd);
popupCloseEdit.addEventListener('click', ()=> closePopup('.popup_edit'));// Прикрепляем обработчик к форме: по клику на кнопку "Закрыть" закрывается попап
popupCloseAdd.addEventListener('click', ()=> closePopup('.popup_add'));
formEdit.addEventListener('submit', formSubmitHandler);// Прикрепляем обработчик к форме: он следит за событием “submit”
formAdd.addEventListener('submit', formCreateHandler);
