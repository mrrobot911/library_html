import { registrMenu } from "../components/registr.js";
import { loginMenu } from "../components/login.js";
import { buyTheBook, createElement, modalEvent } from "./helper.js";
import { body } from "./selectors.js";
import { curdBuy } from "../components/curdBuy.js";
import { profileUser } from "../components/profile.js";
import { findCardContainer } from "../components/findCardContainer.js";
import { getCardsMenu } from "../components/getCardsMenu.js";
import { userAvatar } from "../components/userAvatar.js";
import { cards } from "../components/cards.js";

const formMap = {
    'registr': (closeEl)=>{
        closeEl && closeEl.click();
        const container = registrMenu();
        return container;
    },
    'login': (closeEl)=>{
        closeEl && closeEl.click();
        const container = loginMenu();
        cards();
        return container;
    },
    'profile': (closeEl)=>{
        closeEl && closeEl.click();
        const container = profileUser();
        return container;
    },
    'logout': (closeEl)=>{
        closeEl && closeEl.click();
        localStorage.removeItem('user');
        userAvatar();
        findCardContainer();
        getCardsMenu();
        cards('Winter');
    }
};

export const modalOpen = (target) => {
    const user = localStorage.getItem('user');
    const closeEl = document.querySelector('.close');

    const wrapperContainer = createElement('div', {
        className: 'modal__el'
    });
    const wrapper = createElement('div', {
        className: 'modal__wrapper close'
    });
    const db = JSON.parse(localStorage.getItem('users'));
    const flag = user ? JSON.parse(db[user].hasCard) : false;

    if (target.className === 'article-btn') {
            const db = JSON.parse(localStorage.getItem('users'));
            const flag = user ? JSON.parse(db[user].hasCard) : false;
            const container = flag ? buyTheBook(target) : user ? curdBuy() : loginMenu();
            flag ? wrapperContainer.append(container) : wrapperContainer.append(container, wrapper);
            body.append(wrapperContainer);
            body.addEventListener('click', modalEvent);
    } else {
        const container = formMap[target.id] && formMap[target.id](closeEl, target, flag);
        if (container){
            wrapperContainer.append(container, wrapper);
            body.append(wrapperContainer);
            body.addEventListener('click', modalEvent);
        }
    }
}