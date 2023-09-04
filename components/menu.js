import { createElement } from "../helpers/helper.js";
import { userModal } from "../helpers/selectors.js";

let menu = true;
export const menuOpen = () => {

    menu = !menu;

    if (menu === false) {
        const menuContainer = createElement('div', {
            className: 'menu__registr'
        });
        const menuH2 = createElement('h2',{
            className: 'menu__h2',
            textContent: 'Profile'
        });
        const menuHr = createElement('hr', {
            className: 'menu__hr'
        });
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
        menuContainer.append(menuH2,menuHr,menuA1,menuA2);

        userModal.append(menuContainer);

    } else {
        userModal.lastChild.remove();
    }
    return userModal
}
