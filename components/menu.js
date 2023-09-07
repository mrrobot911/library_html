import { createElement } from "../helpers/helper.js";
import { userModal } from "../helpers/selectors.js";

let menu = true;
export const menuOpen = () => {

    menu = !menu;
    const flag = localStorage.getItem('flag');
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
        menuContainer.append(menuH2,menuHr);
        if (flag === "false") {       
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
        } else {
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
        }
        userModal.append(menuContainer);

    } else {
        userModal.lastChild.remove();
    }
    return userModal
}
