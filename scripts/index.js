const editButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const popupCloseButton = popup.querySelector(".popup__close-icon");
let formElement = document.querySelector(".form");
let nameInput = formElement.querySelector(".form__input_user_name");
let jobInput = formElement.querySelector(".form__input_user_job");
let nameUser = document.querySelector(".profile__info-name");
let jobUser = document.querySelector(".profile__info-job");

function open() {
  nameInput.value = nameUser.textContent;
  jobInput.value = jobUser.textContent;
  popup.classList.add("popup_opened");
}

function close() {
  popup.classList.remove("popup_opened");
}

editButton.addEventListener('click', open);
popupCloseButton.addEventListener('click', close);

function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  nameUser.textContent = nameInput.value;
  jobUser.textContent = jobInput.value;
  close();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
