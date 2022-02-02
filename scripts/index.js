import Card from "./card.js";
import FormValidator from "./FormValidator.js";

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  }
];

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

const enableValidation = ({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
});

const formProfileValidator = new FormValidator(enableValidation, formEdit);
const formNewMestoValidator = new FormValidator(enableValidation, formAdd);

formProfileValidator.enableValidation();
formNewMestoValidator.enableValidation();

function render(cardsArr, container) {
  const cardsHTML = initialCards.map((item) => {
  return createCard(item);
  });

  cardContainer.append(...cardsHTML);
}//Создаем функцию для рендера карточек

render(initialCards, cardContainer);

function createCard(item) { // создаете карточку и возвращаете ее
    const card = new Card('.template', item.name, item.link, item.alt, handleCardClick);
    const cardElement = card.getView();
    return cardElement;
};

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

function handleCardClick(name, link, alt) {
  openPopup(popupImage);
  imageEl.src = link;
  captionEl.textContent = name;
  imageEl.alt = alt;
};

function handleProfileFormSubmit(evt) {
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

  cardContainer.prepend(createCard(newCard));

  formAdd.reset();

  closePopup(popupAddCard);
}//Создаем функцию для создания карточки

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
