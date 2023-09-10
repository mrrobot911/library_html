import { createElement, modalMenuEvent } from "../helpers/helper.js";
import { body, userModal } from "../helpers/selectors.js";

export const menuOpen = (e) => {

    if (e.target.closest('.nav__img_container') 
        && e.target.className !== 'menu__registr' 
        && e.target.className !== 'menu__h2' 
        && e.target.className !== 'menu__a') {
    const user = localStorage.getItem('user');
    const db = JSON.parse(localStorage.getItem('users'));

    const wrapper = createElement('div', {
        className: 'modal__wrapper-clear close'
    });
    const menuContainer = createElement('div', {
        className: 'menu__registr'
    });
    const menuH2 = createElement('h2',{
        className: user ? 'menu__h2-small' : 'menu__h2',
        textContent: user ? db[user].cardNumber : 'Profile'
    });
    const menuHr = createElement('hr', {
        className: 'menu__hr'
    });
    menuContainer.append(menuH2,menuHr);
    if (user) {       
        const menuA1 = createElement('a', {
            id: 'profile',
            className: 'menu__a',
            textContent: 'My profile'
        });
        const menuA2 = createElement('a', {
            id: 'logout',
            className: 'menu__a',
            textContent: 'Log Out'
        });
        menuContainer.append(menuA1,menuA2);
    } else {
        const menuA1 = createElement('a', {
            id: 'login',
            className: 'menu__a',
            textContent: 'Log In'
        });
        const menuA2 = createElement('a', {
            id: 'registr',
            className: 'menu__a',
            textContent: 'Register'
        });
        menuContainer.append(menuA1,menuA2);
    }
    userModal.append(menuContainer);
    body.append(wrapper);
    body.addEventListener('click', modalMenuEvent);
    }
    return userModal
}
