import Card from "./card.js";
import FormValidator from "./FormValidator.js";
import Popup from "./popup.js";
import Section from "./section.js";

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
const templateEl = document.querySelector(".template");//Находим в документе template элемент

const enableValidation = ({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
});

const formProfileValidator = new FormValidator(enableValidation, popupEditProfile);
const formNewMestoValidator = new FormValidator(enableValidation, popupAddCard);
formProfileValidator.enableValidation();
formNewMestoValidator.enableValidation();

function createCard(item) { // создаете карточку и возвращаете ее
    const card = new Card('.template', item.name, item.link, item.alt);
    const cardElement = card.getView();
    return cardElement;

};

const cardList = new Section({
        items: initialCards,
        renderer: (item) => {
            const html = createCard(item);
            cardList.setItem(html);
        }
    },
    cardContainer);

cardList.renderItems();

function handleProfileFormSubmit (evt) {
  evt.preventDefault(); // Отменяем стандартную отправку формы
  nameUser.textContent = nameInput.value;//Передаем текст с именем из инпута в профайл
  jobUser.textContent = jobInput.value;//Передаем текст с деятельностью из инпута в профайл
  popupEditProfile.closePopup();
}

function handleCardSubmit(evt) {
  evt.preventDefault();

  const newCard = {
    name: placeName.value,
    link: placeLink.value,
  }

  cardContainer.prepend(createCard(newCard));

  formAdd.reset();

  popupAddCard.closePopup();
}//Создаем функцию для создания карточки

const popupNewProfile = new Popup('.popup_edit');
const popupNewMesto = new Popup('.popup_add');
const popupBigImg = new Popup('.popup_image');
popupNewProfile.setEventListeners();
popupNewMesto.setEventListeners();
popupBigImg.setEventListeners();

editButton.addEventListener('click', () => {
    nameInput.value = nameUser.textContent; //выводим в инпут данные из профиля
    jobInput.value = jobUser.textContent;
    popupNewProfile.openPopup();
    formProfileValidator.resetValidation();
});

addButton.addEventListener('click', () => {
    placeName.value = '';
    placeLink.value = '';
    popupNewMesto.openPopup();
    formNewMestoValidator.resetValidation();
});

function handleCardClick(name, link, alt) {
    popupBigImg.openPopup();
    document.querySelector('.figure__image').src = link;
    document.querySelector('.figure__subtitle').textContent = name;
    document.querySelector('.figure__image').alt = alt;
};
