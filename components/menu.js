import { createElement } from "../helpers/helper.js";
import { userModal } from "../helpers/selectors.js";
import { registrMenu } from "./registr.js";
import { loginMenu } from "./login.js";

let menu = true;
export const menuOpen = (e) => {
    menu = !menu;
    if (e.target.id === 'registr'){
        userModal.lastChild.remove();
        const container = registrMenu();
        userModal.append(container);
    } else if (e.target.id === 'login') {
        userModal.lastChild.remove();
        const container = loginMenu();
        userModal.append(container);
    } else if (menu === false) {
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
