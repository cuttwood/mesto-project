function openModal(popup) {
    popup.classList.add('popup_is-opened');
    const popupCloseButton = popup.querySelector('.popup__close');
    popupCloseButton.addEventListener('click', () => {closeModal(popup)});
}

function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
}

function popupAnimationActivation() {
    const popups = document.querySelectorAll('.popup');
    debugger;
    popups.forEach((popup) => {popup.classList.add('popup_is-animated')});
}

function fillProfilePopup(popup) {
    openModal(popup);

    nameInput.value = name.textContent;
    jobInput.value = description.textContent;
}

function fillCardPopup(card) {
    openModal(imagePopup);

    const placeName = card.querySelector('.card__description').textContent;
    const photoLink = card.querySelector('.card__image').src;

    imagePopupName.textContent = placeName;
    imagePopupLink.src = photoLink;
}

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    name.textContent = nameInput.value;
    description.textContent = jobInput.value;
    closeModal(profilePopup);
}

function handleCardFormSubmit(evt) {
    evt.preventDefault();

    const cardName = cardPopup.querySelector('.popup__input_type_card-name').value;
    const cardLink = cardPopup.querySelector('.popup__input_type_url').value;

    createCard({
        name: cardName,
        link: cardLink,
    });

    closeModal(cardPopup);
}


const profilePopup = document.querySelector('.popup_type_edit');
const cardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');
const profileFormElement  = profilePopup.querySelector('.popup__form');
const cardFormElement = cardPopup.querySelector('.popup__form');

const name = document.querySelector('.profile__title');
const description = document.querySelector('.profile__description');
const nameInput  = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const imagePopupName = imagePopup.querySelector('.popup__caption');
const imagePopupLink = imagePopup.querySelector('.popup__image');

const cardAddButton = document.querySelector('.profile__add-button');
const profileEditButton = document.querySelector('.profile__edit-button');

popupAnimationActivation();

profileEditButton.addEventListener('click', () => {fillProfilePopup(profilePopup)});
profileFormElement .addEventListener('submit', handleProfileFormSubmit);
cardFormElement.addEventListener('submit', handleCardFormSubmit);
cardAddButton.addEventListener('click', () => {openModal(cardPopup)});


// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
