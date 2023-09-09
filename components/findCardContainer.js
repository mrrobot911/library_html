import { createElement } from "../helpers/helper.js"
import { findCardElem } from "../helpers/selectors.js";
import { profileData } from "./profileData.js";

export const findCardContainer = () => {
    const userId = localStorage.getItem('user');
    const db = JSON.parse(localStorage.getItem('users'));

    const findCardH3 = createElement('h3', {
        textContent: !userId ? 'Find your Library card' : 'Your Library card'
    });
    const findCardForm = createElement('form');
    const findCardContainer = createElement('div', {
        className: 'form__container'
    });
    const findCardParagraf = createElement('p', {
        textContent: 'Brooklyn Public Library'
    });
    findCardContainer.append(findCardParagraf);
    
    if (userId){
        const findCardInputName = createElement('p', {
            textContent: `${db[userId].firstName.toUpperCase()[0] + db[userId].firstName.toLowerCase().slice(1)} ${db[userId].lastName.toUpperCase()[0] + db[userId].lastName.toLowerCase().slice(1)}`,
            id: 'form__container-p'
        });
        const findCardInputNumber = createElement('p', {
            textContent: `${db[userId].cardNumber}`,
            id: 'form__container-p'
        });
        findCardContainer.append(findCardInputName, findCardInputNumber);
    } else {
        const findCardInputName = createElement('input', {
            type: 'text',
            placeholder: 'Reader\'s name',
            name: 'username'
        });
        const findCardInputNumber = createElement('input', {
            type: 'text',
            placeholder: 'Card number',
            name: 'curdnumber'
        });
        findCardContainer.append(findCardInputName, findCardInputNumber);
    }
    if (userId){
        const formSubmit = profileData(true);
        findCardForm.append(findCardContainer, formSubmit);
    } else {
        const formSubmit = createElement('input', {
            type: 'submit',
            className: 'submit__btn',
            value: 'Check the card'
        });
        findCardForm.append(findCardContainer, formSubmit);
    } 
    findCardElem.replaceChildren(findCardH3, findCardForm);
};
