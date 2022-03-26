import '../pages/index.css';
import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import UserInfo from "../scripts/components/UserInfo.js";
import {
  popupEditProfile,
  popupAddCard,
  popupImage,
  popupConfirm,
  popupAvatar,
  editButton,
  addButton,
  avatarButton,
  profileNameUser,
  profileJobUser,
  profileAvatar,
  formAdd,
  formAvatar,
  nameInput,
  jobInput,
  placeName,
  placeLink,
  cardContainer,
  formValidationObj
} from "../scripts/utils/Constants.js";
import {api} from '../scripts/components/Api.js';

let userId;

Promise.all([api.getProfile(), api.getInitialCards()])
  .then(([res, data]) => {
    userId = res._id;
    userInfoForm.setUserInfo(res.name, res.about, res.avatar);
    cardsList.renderItems(data);
  })
  .catch((err) => { console.log(`Ошибка: ${err}`) });

// AddCard Form
const addCardForm = new PopupWithForm(popupAddCard, (inputs) => {
  addCardForm.renderLoading(true);
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
  cardsList.addItem(cardElement);
  addCardForm.closePopup();
  })
    .catch((err) => { console.log(`Ошибка: ${err}`) })
    .finally(() => { addCardForm.renderLoading(false) })
});

// UserInfo Form
const userInfoForm = new UserInfo({profileName: profileNameUser, profileJob: profileJobUser, profileAvatar: profileAvatar});

// Popups
const popupUserInfo = new PopupWithForm(popupEditProfile, (inputs) => {
  popupUserInfo.renderLoading(true);
  api.editProfile(inputs[nameInput.name], inputs[jobInput.name])
    .then((res) => {
      userInfoForm.setUserInfo(inputs[nameInput.name], inputs[jobInput.name], res.avatar);
      popupUserInfo.closePopup();
    })
    .catch((err) => { console.log(`Ошибка: ${err}`) })
    .finally(() => { popupUserInfo.renderLoading(false) })
});

//Popup confirm
const popupWithConfirm = new PopupWithForm(popupConfirm);

// Popup With Image
const popupWithImage = new PopupWithImage(popupImage);

//Popup New Avatar
const popupWithAvatar = new PopupWithForm(popupAvatar, (res) => {
  popupWithAvatar.renderLoading(true);
  api.updateAvatar(res.avatar)
    .then((res) => {
      userInfoForm.setUserInfo(res.name, res.about, res.avatar);
      popupWithAvatar.closePopup();
    })
    .catch((err) => { console.log(`Ошибка: ${err}`) })
    .finally(() => { popupWithAvatar.renderLoading(false) })
});

// Forms Validation
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
  const card = new Card('.template', data.name, data.link, data.name, data.likes, data.id, data.userId, data.ownerId,
    () => {
    popupWithImage.openPopup(data);
  },
    (id) => {
    popupWithConfirm.openPopup();
    popupWithConfirm.changeSubmitHandler(() => {
      api.deleteCard(id)
        .then(() => {
         card.deleteCard();
         popupWithConfirm.closePopup();
      })
        .catch((err) => { console.log(`Ошибка: ${err}`) });
    })
  },
  (id) => {
    if(card.isLiked()) {
      api.deleteLike(id)
        .then((res) => {
          card.setLikes(res.likes);
        })
        .catch((err) => { console.log(`Ошибка: ${err}`) })
    } else {
      api.addLike(id)
        .then((res) => {
          card.setLikes(res.likes);
        })
        .catch((err) => { console.log(`Ошибка: ${err}`) });
   }
  })
  const cardElement = card.getView();

  return cardElement;
}

const cardsList = new Section({
  items: [],
  renderer: (res) => {
      const newCard = getItem({
          name: res.name,
          link: res.link,
          likes: res.likes,
          id: res._id,
          userId: userId,
          ownerId: res.owner._id
      });
      cardsList.addItem(newCard);

  }
},
cardContainer
);

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

avatarButton.addEventListener('click', function () {
  formValidators[formAvatar.getAttribute('name')].resetValidation();

  popupWithAvatar.openPopup();
})

addCardForm.setEventListeners();
popupUserInfo.setEventListeners();
popupWithConfirm.setEventListeners();
popupWithImage.setEventListeners();
popupWithAvatar.setEventListeners();