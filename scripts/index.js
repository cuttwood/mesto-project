function openModal(popup) {
    popup.classList.add('popup_is-opened');
}

function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
}

function fillPopup(popup) {
    openModal(popup);

    nameInput.value = name.textContent;
    jobInput.value = description.textContent;
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    name.textContent = nameInput.value;
    description.textContent = jobInput.value;
    closeModal(profilePopup);
}


const profilePopup = document.querySelector('.popup_type_edit');
const cardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');
const profileFormElement  = document.querySelector('.popup__form');

const name = document.querySelector('.profile__title');
const description = document.querySelector('.profile__description');
const nameInput  = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');

const profileButton = document.querySelector('.profile__add-button');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close');

profileEditButton.addEventListener('click', () => {fillPopup(profilePopup)});
popupCloseButton.addEventListener('click', () => {closeModal(profilePopup)});
profileFormElement .addEventListener('submit', handleProfileFormSubmit);


// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
