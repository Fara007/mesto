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
const popup = document.querySelector(".popup");//Находим попап
const popupCloseButton = popup.querySelector(".popup__close-icon");//Находим кнопку "Закрыть" попап
const popupTitle = popup.querySelector(".popup__title");//Находим заголовок попапа
let formElement = document.querySelector(".form");//Находим форму
let formInput = formElement.querySelector(".form__input");
let nameInput = formElement.querySelector(".form__input_user_name");//Находим в форме первую строчку, содержащую имя пользователя
let jobInput = formElement.querySelector(".form__input_user_job");//Находим в форме вторую строчку, содержащую деятельность пользователя
let nameUser = document.querySelector(".profile__info-name");//Находим в документе имя пользователя
let jobUser = document.querySelector(".profile__info-job");//Находим в документе деятельность пользователя
const namePlace = document.querySelector(".form__input_place_name");//Находим в форме первую строчку, содержащую название локации
const linkPlace = document.querySelector(".form__input_place_link");//Находим в форме первую строчку, содержащую ссылку на картинку
const createButton = document.querySelector(".form__button");//Находим в форму кнопку для отправки
const cardAdd = document.querySelector(".form__button_add_card")
const cardContainer = document.querySelector(".elements")//Находим в документе контейнер с карточками
const cardTitle = document.querySelector(".element__title")
const cardImage = document.querySelector(".element__image")
const templateEl = document.querySelector(".template");//Находим в документе template элемент


function render() {
  const cardsHTML = initialCards.map((card) => {
  return getCards(card);
  });
  cardContainer.append(...cardsHTML);
}

function getCards(card) {
  const newCard = templateEl.content.cloneNode(true);
  const imgCard = newCard.querySelector('.element__image');
  imgCard.setAttribute('src', card.link);
  imgCard.setAttribute('alt', card.alt);

  const headerEl = newCard.querySelector('.element__title');
  headerEl.textContent = card.name;

  return newCard;
}

function openPopup() {
  popup.classList.add("popup_opened");
} //Создаем функцию открытия попапа
//При открытии в форме уже находятся данные, которые находятся в профайле

function closePopup() {
  popup.classList.remove("popup_opened");
} //Создаем функцию закрытия попапа

function formSubmitHandler (evt) {
  evt.preventDefault(); // Отменяем стандартную отправку формы
  nameUser.textContent = nameInput.value;//Передаем текст с именем из инпута в профайл
  jobUser.textContent = jobInput.value;//Передаем текст с деятельностью из инпута в профайл
  closePopup();
}

function openPopupEdit () {
  nameInput.value = nameUser.textContent;//Передаем текст с именем из профайла в инпут формы
  jobInput.value = jobUser.textContent;//Передаем текст с деятельностью из профайла в инпут формы
  openPopup()
}

function openPopupAdd() {
  popupTitle.textContent = "Новое место";
  nameInput.classList.add("form__input_place_name");
  jobInput.classList.add("form__input_place_link");
  nameInput.value = "Название";
  jobInput.value = "Ссылка на картинку";
  createButton.textContent = "Создать";
  popup.classList.add("popup_opened");
}

function formCreateHandler() {
  cardTitle.textContent = nameInput.value;
  cardImage.textContent = jobInput.value;
  const newCard = getCards({name: cardTitle}, {link: cardImage});
  cardContainer.prepend(newCard);
}

render();

addButton.addEventListener('click', openPopupAdd);
editButton.addEventListener('click', openPopupEdit);// Прикрепляем обработчик: по клику на кнопку "Редактировать" открывается попап
popupCloseButton.addEventListener('click', closePopup);// Прикрепляем обработчик к форме: по клику на кнопку "Закрыть" закрывается попап
formElement.addEventListener('submit', formSubmitHandler);// Прикрепляем обработчик к форме: он следит за событием “submit”
createButton.addEventListener('submit', formCreateHandler);
