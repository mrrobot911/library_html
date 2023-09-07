import { createElement } from "../helpers/helper.js"
import { findCardElem } from "../helpers/selectors.js";
import { profileData } from "./profileData.js";

export const findCardContainer = () => {
    const flag = localStorage.getItem('flag');
    const findCardH3 = createElement('h3', {
        textContent: flag === 'false' ? 'Find your Library card' : 'Your Library card'
    });
    const findCardForm = createElement('form');
    const findCardContainer = createElement('div', {
        className: 'form__container'
    });
    const findCardParagraf = createElement('p', {
        textContent: 'Brooklyn Public Library'
    });
    findCardContainer.append(findCardParagraf);
    if (flag === 'false'){
        const findCardInputName = createElement('input', {
            type: 'text',
            placeholder: 'Reader\'s name'
        });
        const findCardInputNumber = createElement('input', {
            type: 'text',
            placeholder: 'Reader\'s name'
        });
        findCardContainer.append(findCardInputName, findCardInputNumber);
    } else {
        const findCardInputName = createElement('p', {
            textContent: 'John Doe',
            id: 'form__container-p'
        });
        const findCardInputNumber = createElement('p', {
            textContent: '777',
            id: 'form__container-p'
        });
        findCardContainer.append(findCardInputName, findCardInputNumber);
    }
    if (flag === 'false'){
    const formSubmit = createElement('input', {
        type: 'submit',
        className: 'submit__btn',
        value: 'Check the card'
    });
    findCardForm.append(findCardContainer, formSubmit);
    } else {
        const formSubmit = profileData(true);
        findCardForm.append(findCardContainer, formSubmit);
    } 
    findCardElem.replaceChildren(findCardH3, findCardForm);
};
