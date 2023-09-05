import { registrMenu } from "../components/registr.js";
import { loginMenu } from "../components/login.js";
import { createElement } from "./helper.js";
import { body } from "./selectors.js";

export const modalOpen = (e) => {
    const modalEvent = (e) => {
        if (e.target.closest('.close')) 
        {
            body.lastChild.remove();
            body.removeEventListener('click', modalEvent);
        }
    }
    const wrapperContainer = createElement('div', {
        className: 'modal__el'
    });
    const wrapper = createElement('div', {
        className: 'modal__wrapper close'
    });

    if(body.lastChild.className === 'modal__el' && (e.target.id ==='registr' || e.target.id === 'login')){
        document.querySelector('.close').click();
    };

    if (e.target.id === 'registr'){
        const container = registrMenu();
        wrapperContainer.append(container, wrapper);
        body.append(wrapperContainer);
        body.addEventListener('click', modalEvent);
    } else if (e.target.id === 'login') {
        const container = loginMenu();
        wrapperContainer.append(container, wrapper);
        body.append(wrapperContainer);
        body.addEventListener('click', modalEvent);
    } 
}