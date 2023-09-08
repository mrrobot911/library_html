import { cards } from "../components/cards.js";
import { body, fotoContainer, userModal } from "./selectors.js";

export const createElement = (tagName,attr) => {
    const elem = document.createElement(tagName);
    Object.assign(elem, attr);
    return elem
};

export function resize(windowSize){
    let arrayRadio = [];
    if (windowSize < 768) {
        arrayRadio = [1,2,3,4,5];
    } else if (windowSize < 1024) {
        arrayRadio = [1,2,3,4];
    } else {
        arrayRadio = [1,2,3];
    }
    return {arrayRadio, windowSize};
};

export const sliseSlider = (e) => {
    let left = 0;
    left = e.target.value;
    fotoContainer.style.left=`${(left - 1) * -475}px`;
    return fotoContainer
}

export const sliseBook = (e) => {
    let book = '';
    book = e.target.value;
    cards(book);
}
export const modalMenuEvent = (e) => {
    if (e.target.closest('.close')) 
    {
        userModal.lastChild.remove();
        body.lastChild.remove();
        body.removeEventListener('click', modalMenuEvent);
    }
}
export const modalEvent = (e) => {
    if (e.target.closest('.close')) 
    {
        body.lastChild.remove();
        body.removeEventListener('click', modalEvent);
    }
}
export const visitsCount = () => {
    const userId = localStorage.getItem('user');
    const db = JSON.parse(localStorage.getItem('users'));
    const user = db[userId];
    user.visits += 1;
    db[userId] = user;
    localStorage.setItem('users', JSON.stringify(db));
}