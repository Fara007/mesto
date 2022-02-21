export const initialCards = [
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
export const popups = document.querySelectorAll('.popup');//Находим попап
export const popupEditProfile = document.querySelector(".popup_edit");//Находим попап редактирования профиля
export const popupAddCard = document.querySelector(".popup_add");//Находим попап добавления карточки
export const popupImage = document.querySelector(".popup_image");//Находим попап с картинкой
export const imageEl = document.querySelector(".figure__image");//Находим в документе элемент с картинкой
export const captionEl = document.querySelector(".figure__subtitle");//Находим в документе подзаголовок к картинке
//------------------------------------------------Profile----------------------------------------------------//
export const editButton = document.querySelector(".profile__edit-button");//Находим в документе кнопку "Редактировать"
export const addButton = document.querySelector(".profile__add-button");//Находим в документе кнопку "Добавить"
export const profileNameUser = document.querySelector(".profile__info-name");//Находим в документе имя пользователя
export const profileJobUser = document.querySelector(".profile__info-job");//Находим в документе деятельность пользователя
//-------------------------------------------------Form------------------------------------------------------//
export const formEdit = document.querySelector(".form_edit");//Находим форму редактирования
export const formAdd = document.querySelector(".form_add");//Находим форму добавления
export const nameInput = formEdit.querySelector(".form__input_user_name");//Находим в форме первую строчку, содержащую имя пользователя
export const jobInput = formEdit.querySelector(".form__input_user_job");//Находим в форме вторую строчку, содержащую деятельность пользователя
export const placeName = document.querySelector(".form__input_place_name");//Находим в форме первую строчку, содержащую название
export const placeLink = document.querySelector(".form__input_place_link");//Находим в форме первую строчку, содержащую ссылку на картинку
export const cardAddButton = document.querySelector(".form__button_add_card")//Находим в форму кнопку "Создать" карточку
//------------------------------------------------Template----------------------------------------------------//
export const cardContainer = ".elements"//Находим в документе контейнер с карточками
