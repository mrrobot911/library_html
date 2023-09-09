import { createElement } from "../helpers/helper.js";
import { profileData } from "./profileData.js";

export const profileUser = () => {
    const userId = localStorage.getItem('user');
    const db = JSON.parse(localStorage.getItem('users'));

    const array = db[userId].Books;
    const profileContainer = createElement('div', {
        className: 'profile__container'
    });
    const profileUsernameContainer = createElement('div', {
        className: 'username__container'
    });
    const profileInitials = createElement('p', {
        className: 'username__container_initials',
        textContent: `${db[userId].firstName[0].toUpperCase()}${db[userId].lastName[0].toUpperCase()}`
    });
    const profileUsername = createElement('p', {
        className: 'username__container_username',
        textContent: `${db[userId].firstName.toUpperCase()[0] + db[userId].firstName.toLowerCase().slice(1)} ${db[userId].lastName.toUpperCase()[0] + db[userId].lastName.toLowerCase().slice(1)}`
    });
    profileUsernameContainer.append(profileInitials, profileUsername);

    const profileUserdataContainer = createElement('div', {
        className: 'userdata__container'
    });
    const profileUserdataH2 = createElement('h2', {
        textContent: 'My profile'
    });
    const profileUserdata = profileData(false, userId);

    const profileRentedBooks = createElement('h3', {
        textContent: 'Rented books',
    });
    const profileRentedBooksList = createElement('ul', {
        className: 'userdata__bookslist'
    });
    array.forEach(el => {
        const book = createElement('li', {
            textContent: el
        });
        profileRentedBooksList.append(book);
    });
    const profileCard = createElement('div', {
        className: 'userdata__card'
    }); 
    const profileCardParagraf = createElement('p', {
        textContent: 'Card number',
        className: 'userdata__card_title'
    });
    const profileCardNumber = createElement('p', {
        textContent: db[userId].cardNumber,
        className: 'userdata__card_number'
    });
    const profileCardImg = createElement('p', {
        innerHTML: `<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.46826" y="0.25" width="10.5917" height="9.5" rx="0.75" stroke="black" stroke-width="0.5"/>
        <rect x="0.25" y="2.25" width="10.5917" height="9.5" rx="0.75" fill="white" stroke="black" stroke-width="0.5"/>
      </svg>`      
    });
    profileCard.append(profileCardParagraf, profileCardNumber, profileCardImg);
    profileUserdataContainer.append(
        profileUserdataH2, 
        profileUserdata, 
        profileRentedBooks, 
        profileRentedBooksList,
        profileCard);
    const profileClose = createElement('button', {
        innerHTML: `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 16.8507L17 2.00001" stroke="#0C0C0E" stroke-width="3"/>
        <path d="M2 2.14928L17 17" stroke="#0C0C0E" stroke-width="3"/>
      </svg>`,
      className: 'userdata__close close'
    })
    profileContainer.append(profileUsernameContainer, profileUserdataContainer, profileClose);
    return profileContainer
}