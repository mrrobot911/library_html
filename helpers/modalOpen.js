import { registrMenu } from "../components/registr.js";
import { loginMenu } from "../components/login.js";
import { createElement, modalEvent } from "./helper.js";
import { body } from "./selectors.js";
import { curdBuy } from "../components/curdBuy.js";
import { profileUser } from "../components/profile.js";
import { findCardContainer } from "../components/findCardContainer.js";
import { getCardsMenu } from "../components/getCardsMenu.js";
import { userAvatar } from "../components/userAvatar.js";

export const modalOpen = (e) => {
    const user = localStorage.getItem('user');
    const closeEl = document.querySelector('.close');

    const wrapperContainer = createElement('div', {
        className: 'modal__el'
    });
    const wrapper = createElement('div', {
        className: 'modal__wrapper close'
    });
    if (e.target.id === 'registr'){
        closeEl && closeEl.click();
        const container = registrMenu();
        wrapperContainer.append(container, wrapper);
        body.append(wrapperContainer);
        body.addEventListener('click', modalEvent);
    } else if (e.target.id === 'login') {
        closeEl && closeEl.click();
        const container = loginMenu();
        wrapperContainer.append(container, wrapper);
        body.append(wrapperContainer);
        body.addEventListener('click', modalEvent);
    } else if (e.target.id === 'profile'){
        closeEl && closeEl.click();
        const container = profileUser();
        wrapperContainer.append(container, wrapper);
        body.append(wrapperContainer);
        body.addEventListener('click', modalEvent);
    } else if (e.target.id === 'logout'){
        closeEl && closeEl.click();
        localStorage.removeItem('user');
        userAvatar();
        findCardContainer();
        getCardsMenu();
    } else if (e.target.className === 'article-btn') {
        const container = user ? curdBuy() : loginMenu();
        wrapperContainer.append(container, wrapper);
        body.append(wrapperContainer);
        body.addEventListener('click', modalEvent);
    }
}