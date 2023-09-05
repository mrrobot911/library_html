import { cards } from "../components/cards.js";
import { fotoContainer } from "./selectors.js";

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

export const sliseBook = async(e) => {
    let book = '';
    book = e.target.value;
    await cards(book);
}