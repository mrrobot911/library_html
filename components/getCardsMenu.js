import { createElement } from "../helpers/helper.js"
import { futerMenu } from "../helpers/selectors.js";

export const getCardsMenu = () => {
    const user = localStorage.getItem('user');
    const title = createElement('h4', {
        textContent: user ? "Visit your profile" : "Get a reader card"
    });
    const paragraf = createElement('p', {
        textContent: user 
        ? "With a digital library card you get free access to the Library\’s wide array of digital resources including e-books, databases, educational resources, and more."
        : "You will be able to see a reader card after logging into account or you can register a new account"
    });
    const container = createElement('div');
    const cardContainer = createElement('div', {
        className: "card__container-btn"
    });
    if (user) {
        const buttonProfile = createElement('button', {
            id: "profile",
            textContent: "Profile"
        });
        cardContainer.append(buttonProfile);
    } else {
        const buttonSignIn = createElement('button', {
            id: "registr",
            textContent: "Sign Up"
        });
        const buttonLogIn = createElement('button', {
            id: "login",
            textContent: "Log in"
        });
        cardContainer.append(buttonSignIn, buttonLogIn);
    }
    container.append(cardContainer);
    futerMenu.replaceChildren(title, paragraf, container);
}
