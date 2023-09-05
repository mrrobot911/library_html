import { createElement } from "../helpers/helper.js";

export const registrMenu = () => {
    const registrContainer = createElement('form', {
        className: 'registr__container'
    });
    const registrH3 = createElement('h3', {
        textContent: 'Register'
    });
    const registrInputFirstName = createElement('input', {
        className: 'registr__input',
        type: 'text',
        name: 'firstName'
    });
    const registrLabelFirstName = createElement('label', {
        className: 'registr__label',
        textContent: 'First name'
    });
    registrLabelFirstName.append(registrInputFirstName);

    const registrInputLastName = createElement('input', {
        className: 'registr__input',
        type: 'text',
        name: 'lastName'
    });
    const registrLabelLastName = createElement('label', {
        className: 'registr__label',
        textContent: 'Last name'
    });
    registrLabelLastName.append(registrInputLastName);

    const registrInputEmail = createElement('input', {
        className: 'registr__input',
        type: 'email',
        name: 'email'
    });
    const registrLabelEmail = createElement('label', {
        className: 'registr__label',
        textContent: 'E-mail'
    });
    registrLabelEmail.append(registrInputEmail);

    const registrInputPassword = createElement('input', {
        className: 'registr__input',
        type: 'password',
        name: 'password'
    });
    const registrLabelPassword = createElement('label', {
        className: 'registr__label',
        textContent: 'Password'
    });
    registrLabelPassword.append(registrInputPassword);

    const registrSubmitButton = createElement('input', {
        type: 'submit',
        className: 'registr__submit',
        value: 'Sign Up'
    });
    const registrString = createElement('div', {
        className: 'registr__menu-string'
    });
    const registrParagraf = createElement('p', {
        textContent: 'Already have an account?'
    });
    const registrLink = createElement('a', {
        textContent: 'Login',
        id: 'login'
    });
    registrString.append(registrParagraf, registrLink);
    const registrExitButton = createElement('button', {
        innerHTML: `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 16.8507L17 2.00003" stroke="#0C0C0E" stroke-width="3"/>
        <path d="M2 2.14926L17 17" stroke="#0C0C0E" stroke-width="3"/>
      </svg>`,
        className: 'registr__close close',
    });
    registrContainer.append(registrH3, 
        registrLabelFirstName, 
        registrLabelLastName, 
        registrLabelEmail, 
        registrLabelPassword,
        registrSubmitButton,
        registrString,
        registrExitButton);
    return registrContainer
}