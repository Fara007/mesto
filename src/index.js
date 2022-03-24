import '../src/styles/index.css';
import Card from "../src/scripts/components/Card.js";
import FormValidator from "../src/scripts/components/FormValidator.js";
import Section from "../src/scripts/components/Section.js";
import PopupWithForm from "../src/scripts/components/PopupWithForm.js";
import PopupWithImage from "../src/scripts/components/PopupWithImage.js";
import UserInfo from "../src/scripts/components/UserInfo.js";
import {
  popupEditProfile,
  popupAddCard,
  popupImage,
  popupConfirm,
  editButton,
  addButton,
  profileNameUser,
  profileJobUser,
  formAdd,
  nameInput,
  jobInput,
  placeName,
  placeLink,
  cardContainer,
} from "../src/scripts/utils/Constants.js";
import {api} from '../src/scripts/components/Api.js';

let userId;

Promise.all([api.getInitialCards(), api.getProfile()])
  .then(([cardsData, userData]) => {
    userId = userData._id;
    userInfoForm.setUserInfo(userData.name, userData.about);

    (cardList) => {
    cardList.forEach(() => {
      const cardElement = getItem({
        name: cardsData.name,
        link: cardsData.link,
        likes: cardsData.likes,
        id: cardsData._id,
        userId: userId,
        ownerId: cardsData.owner._id,
      });
      
      section.addItem(cardElement);
  })
}
});

//api.getProfile()
//  .then((res) => {
//    console.log('res', res);
//    userInfoForm.setUserInfo(res.name, res.about);

//    userId = res._id;
//  })
//  .catch((err) => console.log(err));

//api.getInitialCards()
//  .then((cardList) => {
//    cardList.forEach((data) => {
//      const cardElement = getItem({
//        name: data.name,
//        link: data.link,
//        likes: data.likes,
//        id: data._id,
//        userId: userId,
//        ownerId: data.owner._id,
//      });
//      
//      section.addItem(cardElement);
//    })
//  })
//  .catch((err) => console.log(err));
// Section
const section = new Section({ data: [], renderer: getItem }, cardContainer);

// AddCard Form
const addCardForm = new PopupWithForm(popupAddCard, (inputs) => {
  api.addCard(inputs[placeName.name], inputs[placeLink.name])
    .then((res) => {
    const cardElement = getItem({
      name: res.name,
      link: res.link,
      likes: res.likes,
      id: res._id,
      userId: userId,
      ownerId: res.owner._id
    })
  section.addItem(cardElement);
  });
  addCardForm.closePopup();
});

// UserInfo Form
const userInfoForm = new UserInfo({profileName: profileNameUser, profileJob: profileJobUser});

// Popups
const popupUserInfo = new PopupWithForm(popupEditProfile, (inputs) => {
  api.editProfile(inputs[nameInput.name], inputs[jobInput.name])
    .then((res) => {
      userInfoForm.setUserInfo(inputs[nameInput.name], inputs[jobInput.name]);
    })
  popupUserInfo.closePopup()
});

popupUserInfo.setEventListeners();

const popupWithConfirm = new PopupWithForm(popupConfirm);

// Popup With Image
const popupWithImage = new PopupWithImage(popupImage);

// Forms Validation
const formValidationObj = ({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
});

const formValidators = {};

const enableValidation = (formValidationObj) => {
  const formList = Array.from(document.querySelectorAll(formValidationObj.formSelector));

  formList.forEach((formElement) => {
    const validator = new FormValidator(formValidationObj, formElement);
    const formName = formElement.getAttribute('name');

    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(formValidationObj);

// Render cards with pictures
function getItem(data) {
  const handleCardClick = () => {
    popupWithImage.openPopup(data);
  }

  const handleDeleteClick = (id) => {
    popupWithConfirm.openPopup();
    popupWithConfirm.changeSubmitHandler(() => {
      api.deleteCard(id)
        .then(() => {
         card.deleteCard();
         popupWithConfirm.closePopup();
      })
    })
  }

  const card = new Card('.template', data.name, data.link, data.name, data.likes, data.id, handleCardClick, handleDeleteClick);
  const cardElement = card.getView();

  return cardElement;
}

popupWithConfirm.setEventListeners();
popupWithImage.setEventListeners();

// Open popupEditProfile
editButton.addEventListener('click', function () {
  const currentUserForm = userInfoForm.getUserInfo();
  nameInput.value = currentUserForm.name;
  jobInput.value = currentUserForm.job;

  popupUserInfo.openPopup();
});

// Open popupAddPost
addButton.addEventListener('click', function () {
  formValidators[formAdd.getAttribute('name')].resetValidation();

  addCardForm.openPopup();
});

addCardForm.setEventListeners();

section.renderItems();

//const cardList = new Section({
//  data: initialCards,
//  renderer: (item) => {
//      const cardshtml = createCard(item);
//      cardList.addItem(cardshtml);
//  }
//},
//cardContainer);

//const formProfileValidator = new FormValidator(formValidationObj, formEdit);
//const formNewMestoValidator = new FormValidator(formValidationObj, formAdd);

//formProfileValidator.enableValidation();
//formNewMestoValidator.enableValidation();

//const cardList = new Section({
//  data: initialCards,
//  renderer: (item) => {
//      const cardshtml = createCard(item);
//      cardList.addItem(cardshtml);
//  }
//},
//cardContainer);

//cardList.renderItems();

//function createCard(item) { // создаете карточку и возвращаете ее
//    const card = new Card('.template', item.name, item.link, item.name, handleCardClick);
//    const cardElement = card.getView();
//    return cardElement;
//};

//const handleCardSubmit = () => {
//    const newCard = {
//     name: placeName.value,
//    link: placeLink.value,
//    }

//   cardContainer.prepend(createCard(newCard));

//    formAdd.reset();

//    closePopup(popupAddCard);
//}

//function render(cardsArr, container) {
 // const cardsHTML = initialCards.map((item) => {
 // return createCard(item);
 // });

 // cardContainer.append(...cardsHTML);
//}//Создаем функцию для рендера карточек

//render(initialCards, cardContainer);

//const popupNewProfile = new Popup('.popup_edit');
//const popupNewMesto = new Popup('.popup_add');
//const popupBigImg = new Popup('.popup_image');
//popupNewProfile.setEventListeners;
//popupNewMesto.setEventListeners;
//popupBigImg.setEventListeners;

//editButton.addEventListener('click', () => {
//  nameInput.value = nameUser.textContent; //выводим в инпут данные из профиля
//  jobInput.value = jobUser.textContent;
//  popupNewProfile.openPopup();
  //formProfileValidator.resetValidation;
//  });

//  addButton.addEventListener('click', () => {
//  placeName.value = '';
//  placeLink.value = '';
//  popupNewMesto.openPopup();
  //formNewMestoValidator.resetValidation();
//  });


//function openPopup(somePopup) {
//  document.addEventListener('keydown', keyHandler);//// Прикрепляем обработчик закрытия попапа нажатием на Esc
//  somePopup.classList.add("popup_opened");
//} //Создаем функцию открытия попапа

//function openPopupEdit() {
//  nameInput.value = nameUser.textContent;//Передаем текст с именем из профайла в инпут формы
//  jobInput.value = jobUser.textContent;//Передаем текст с деятельностью из профайла в инпут формы

//  openPopup(popupEditProfile);
//}//Создаем функцию для открытия попапа редактирования

//function openPopupAdd() {
//  formAdd.reset();

//  cardAddButton.classList.add("form__button_disabled");
//  cardAddButton.disabled = true;

//  openPopup(popupAddCard);
//}//Создаем функцию для открытия попапа создания карточки

//function closePopup(somePopup) {
//  document.removeEventListener('keydown', keyHandler);//// Удаляем обработчик закрытия попапа нажатием на Esc
//  somePopup.classList.remove("popup_opened");
//} //Создаем функцию закрытия попапа

//function keyHandler(evt) {
//  if (evt.key === 'Escape') {
//    const popupOpened = document.querySelector('.popup_opened');
//    closePopup(popupOpened);
//  }
//} //Coздаем функцию закрытия попапа нажатием на Escape

//function handleCardClick(name, link, alt) {
//  openPopup(popupImage);
//  imageEl.src = link;
//  captionEl.textContent = name;
//  imageEl.alt = name;
//};

//function handleProfileFormSubmit (evt) {
//  evt.preventDefault(); // Отменяем стандартную отправку формы
//  nameUser.textContent = nameInput.value;//Передаем текст с именем из инпута в профайл
//  jobUser.textContent = jobInput.value;//Передаем текст с деятельностью из инпута в профайл
//  closePopup(popupEditProfile);
//}

//function handleCardSubmit(evt) {
//  evt.preventDefault();

//  const newCard = {
//   name: placeName.value,
//    link: placeLink.value,
//  }

//  cardContainer.prepend(createCard(newCard));

//  formAdd.reset();

//  closePopup(popupAddCard);
//}//Создаем функцию для создания карточки

//editButton.addEventListener('click', openPopupEdit);// Прикрепляем обработчик: по клику на кнопку "Редактировать" открывается попап
//addButton.addEventListener('click', openPopupAdd);// Прикрепляем обработчик открытия попапа добавления карточки
//popups.forEach((popup) => {
//    popup.addEventListener('click', (evt) => {
//        if (evt.target.classList.contains('popup__overlay')) {
//            closePopup(popup)
//        }
//        if (evt.target.classList.contains('popup__close-icon')) {
//          closePopup(popup)
//        }
//    })
//})//Oбъявляем функцию, которая проходится по всем попапам и закрывает их по клику на оверлей или иконку крестика
//formEdit.addEventListener('submit', handleProfileFormSubmit);// Прикрепляем обработчик к форме: он следит за событием “submit” редактирования профиля
//formAdd.addEventListener('submit', handleCardSubmit);// Прикрепляем обработчик к форме: он следит за событием “submit” добавления карточк
