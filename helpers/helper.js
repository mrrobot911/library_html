import { cards } from "../components/cards.js";
import { body, btn, fotoContainer, leftBtn, rightBtn, test, userModal } from "./selectors.js";

export const createElement = (tagName,attr) => {
    const elem = document.createElement(tagName);
    Object.assign(elem, attr);
    return elem
};

export function resize(windowSize){
    let arrayRadio = [];
    if (windowSize < 970) {
        arrayRadio = [1,2,3,4,5];
    } else if (windowSize < 1460) {
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
export const randomNumber = (length) => {
        const number = Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1)).toString(16).toUpperCase();
        return number.length < 9 ? '0'.repeat(9 - number.length) + number : number
}
export function checkButton(e){
    (btn.checked === true && e.target !== btn && e.target !== test && e.target !== test.childNodes[1]) && (btn.checked = false);
}
export const buyTheBook = (target) => {
    const userId = localStorage.getItem('user');
    const db = JSON.parse(localStorage.getItem('users'));
    target.className = 'own';
    target.textContent = 'Own';
    const name = target.parentElement.childNodes[3].textContent;
    const author = target.parentElement.childNodes[5].textContent;
    db[userId].Books.push([name, author.slice(3)]);
    localStorage.setItem('users', JSON.stringify(db));
}
export const copyToClip = (e) => {
    if (e.target.closest('.copyNumber')){
        navigator.clipboard.writeText(e.target.closest('.copyNumber').parentElement.childNodes[1].textContent);
    }
}
export const sliderMove = (e) => {
    let position = parseInt(fotoContainer.style.left);
    leftBtn.removeAttribute('disabled');
    rightBtn.removeAttribute('disabled');

    if (e.target.closest('.btn__left') && position < 0) {
        position += 475;
        document.querySelector(`#radio${Math.abs(position/475 - 1)}`).click();
    } else if (e.target.closest('.btn__right') && position > -1900) {
        position -= 475;
        document.querySelector(`#radio${Math.abs(position/475 - 1)}`).click();
    }
    if (position === 0){
        leftBtn.setAttribute('disabled', '');
    } else if (position === -1900){
        rightBtn.setAttribute('disabled', '');
    }
    return fotoContainer, leftBtn, rightBtn
}