import { createElement } from "../helpers/helper.js";

export const loginMenu = () => {
    const registrContainer = createElement('div', {
        className: 'login__container'
    });
    const registrH3 = createElement('h3', {
        textContent: 'Login'
    });

    const registrInputEmail = createElement('input', {
        className: 'registr__input'
    });
    const registrLabelEmail = createElement('label', {
        className: 'registr__label',
        textContent: 'E-mail or readers card'
    });
    registrLabelEmail.append(registrInputEmail);

    const registrInputPassword = createElement('input', {
        className: 'registr__input'
    });
    const registrLabelPassword = createElement('label', {
        className: 'registr__label',
        textContent: 'Password'
    });
    registrLabelPassword.append(registrInputPassword);

    const registrSubmitButton = createElement('button', {
        className: 'registr__submit',
        textContent: 'Log In'
    });
    const registrString = createElement('div', {
        className: 'registr__menu-string'
    });
    const registrParagraf = createElement('p', {
        textContent: 'Don\’t have an account?'
    });
    const registrLink = createElement('a', {
        textContent: 'Register'
    });
    registrString.append(registrParagraf, registrLink);
    const registrExitButton = createElement('button', {
        innerHTML: `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 16.8507L17 2.00003" stroke="#0C0C0E" stroke-width="3"/>
        <path d="M2 2.14926L17 17" stroke="#0C0C0E" stroke-width="3"/>
      </svg>`,
        className: 'registr__close',
        id: 'close'
    });
    registrContainer.append(registrH3, 
        registrLabelEmail, 
        registrLabelPassword,
        registrSubmitButton,
        registrString,
        registrExitButton);
    return registrContainer
}