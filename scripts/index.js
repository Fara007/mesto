const editButton = document.querySelector(".profile__edit-button");//Находим в документе кнопку "Редактировать"
const popup = document.querySelector(".popup");//Находим попап
const popupCloseButton = popup.querySelector(".popup__close-icon");//Находим кнопку "Закрыть" попап
let formElement = document.querySelector(".form");//Находим форму
let nameInput = formElement.querySelector(".form__input_user_name");//Находим в форме первую строчку, содержащую имя пользователя
let jobInput = formElement.querySelector(".form__input_user_job");//Находим в форме вторую строчку, содержащую деятельность пользователя
let nameUser = document.querySelector(".profile__info-name");//Находим в документе имя пользователя
let jobUser = document.querySelector(".profile__info-job");//Находим в документе деятельность пользователя

function openPopup() {
  nameInput.value = nameUser.textContent;//Передаем текст с именем из профайла в инпут формы
  jobInput.value = jobUser.textContent;//Передаем текст с деятельностью из профайла в инпут формы
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

editButton.addEventListener('click', openPopup);// Прикрепляем обработчик: по клику на кнопку "Редактировать" открывается попап
popupCloseButton.addEventListener('click', closePopup);// Прикрепляем обработчик к форме: по клику на кнопку "Закрыть" закрывается попап
formElement.addEventListener('submit', formSubmitHandler);// Прикрепляем обработчик к форме: он следит за событием “submit”
