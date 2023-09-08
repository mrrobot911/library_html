import { createElement } from "../helpers/helper.js"
import { futerMenu } from "../helpers/selectors.js";

export const getCardsMenu = () => {
    const flag = localStorage.getItem('flag');
    const title = createElement('h4', {
        textContent: flag === 'false' ? "Get a reader card" : "Visit your profile"
    });
    const paragraf = createElement('p', {
        textContent: flag === 'false' 
        ? "You will be able to see a reader card after logging into account or you can register a new account"
        : "With a digital library card you get free access to the Library\’s wide array of digital resources including e-books, databases, educational resources, and more."
    });
    const container = createElement('div');
    const cardContainer = createElement('div', {
        className: "card__container-btn"
    });
    if (flag === 'false') {
        const buttonSignIn = createElement('button', {
            id: "registr",
            textContent: "Sign Up"
        });
        const buttonLogIn = createElement('button', {
            id: "login",
            textContent: "Log in"
        });
        cardContainer.append(buttonSignIn, buttonLogIn);
    } else {
        const buttonProfile = createElement('button', {
            id: "profile",
            textContent: "Profile"
        });
        cardContainer.append(buttonProfile);
    }
    container.append(cardContainer);
    futerMenu.replaceChildren(title, paragraf, container);
}
