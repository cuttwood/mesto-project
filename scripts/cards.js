function createCard(card) {
    const cardTemp = document.querySelector('#card-template').content;
    const cardEl = cardTemp.querySelector('.card').cloneNode(true);
    const cardImage = cardEl.querySelector('.card__image');
    const binButton = cardEl.querySelector('.card__delete-button');
    const likeButton = cardEl.querySelector('.card__like-button');

    cardEl.querySelector('.card__title').textContent = card.name;
    cardEl.querySelector('.card__image').src = card.link;
    cardEl.querySelector('.card__image').alt = card.alt;
    placesList.prepend(cardEl);

    cardImage.addEventListener('click', () => {
        fillCardPopup(cardEl);
    });
    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('card__like-button_is-active');
    });

    binButton.addEventListener('click', () => {
        likeButton.closest('.card').remove();
    });
}

const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

const placesList = document.querySelector('.places__list');

initialCards.reverse().forEach(createCard);