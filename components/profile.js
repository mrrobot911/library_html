import { createElement } from "../helpers/helper.js";

export const profileUser = () => {
    const array = [['The Last Queen', 'Clive Irving'],['Dominicana', 'Angie Cruz']];
    const profileContainer = createElement('div', {
        className: 'profile__container'
    });
    const profileUsernameContainer = createElement('div', {
        className: 'username__container'
    });
    const profileInitials = createElement('p', {
        className: 'username__container_initials',
        textContent: 'JD'
    });
    const profileUsername = createElement('p', {
        className: 'username__container_username',
        textContent: 'John Doe'
    });
    profileUsernameContainer.append(profileInitials, profileUsername);

    const profileUserdataContainer = createElement('div', {
        className: 'userdata__container'
    });
    const profileUserdataH2 = createElement('h2', {
        textContent: 'My profile'
    });
    const profileUserdata = createElement('div', {
        className: 'userdata__container_data'
    });
    const profileUserdataVisits = createElement('div', {
        className: 'userdata__container_dataElement'
    });
    const profileVisits = createElement('p', {
        textContent: 'visits',
        className: 'userdata__container_dataElement_title'
    });
    const profileVisitsImg = createElement('p', {
        innerHTML: `<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 10C13.2614 10 15.5 7.76143 15.5 5C15.5 2.23857 13.2614 0 10.5 0C7.73857 0 5.5 2.23857 5.5 5C5.5 7.76143 7.73857 10 10.5 10ZM17.5711 13.9289C19.4464 15.8043 20.5 18.3478 20.5 21H10.5H0.5C0.5 18.3478 1.55357 15.8043 3.42894 13.9289C5.30429 12.0536 7.84784 11 10.5 11C13.1522 11 15.6957 12.0536 17.5711 13.9289Z" fill="#BB945F"/>
      </svg>`
    });
    const profileVisitsNumber = createElement('p', {
        textContent: '23',
        className: 'userdata__container_dataElement_data'
    });
    profileUserdataVisits.append(profileVisits, profileVisitsImg, profileVisitsNumber);

    const profileUserdataBonuses = createElement('div', {
        className: 'userdata__container_dataElement'
    });
    const profileBonuses = createElement('p', {
        textContent: 'bonuses',
        className: 'userdata__container_dataElement_title'
    });
    const profileBonusesImg = createElement('p', {
        innerHTML: `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0L12.2249 3.31001L15.8779 2.00532L15.8249 6.05634L19.5106 7.25532L17.2 10.5L19.5106 13.7447L15.8249 14.9437L15.8779 18.9947L12.2249 17.69L10 21L7.77508 17.69L4.12215 18.9947L4.17508 14.9437L0.489435 13.7447L2.8 10.5L0.489435 7.25532L4.17508 6.05634L4.12215 2.00532L7.77508 3.31001L10 0Z" fill="#BB945F"/>
      </svg>`
    });
    const profileBonusesNumber = createElement('p', {
        textContent: '1240',
        className: 'userdata__container_dataElement_data'
    });
    profileUserdataBonuses.append(profileBonuses, profileBonusesImg, profileBonusesNumber);

    const profileUserdataBooks = createElement('div', {
        className: 'userdata__container_dataElement'
    });
    const profileBooks = createElement('p', {
        textContent: 'Books',
        className: 'userdata__container_dataElement_title'
    });
    const profileBooksImg = createElement('p', {
        innerHTML: `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="21" fill="#BB945F"/>
        <rect x="2" width="1" height="19" fill="#826844"/>
        <rect x="1" width="1" height="21" fill="white"/>
      </svg>`
    });
    const profileBooksNumber = createElement('p', {
        textContent: '2',
        className: 'userdata__container_dataElement_data'
    });
    profileUserdataBooks.append(profileBooks, profileBooksImg, profileBooksNumber);
    profileUserdata.append(profileUserdataVisits, profileUserdataBonuses, profileUserdataBooks);

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
        textContent: 'F00234030',
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