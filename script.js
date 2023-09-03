import { menuOpen } from "./components/menu.js";
import { userModal } from "./helpers/selectors.js";
import { resize } from "./helpers/helper.js";

const btn = document.querySelector("#burgerBtn");
const test = document.querySelector(".menu");
const body = document.querySelector(".body__container");
const sliderRadioContainer = document.querySelector(".about__radio-container");
const fotoContainer = document.querySelector(".about__photo-wrapper");
const favorites = document.querySelector(".favorites__ul");
let left = 0;
let book = '';
let {arrayRadio, windowSize} = resize(window.innerWidth);

function func(e){
    (btn.checked === true && e.target !== btn && e.target !== test && e.target !== test.childNodes[1]) && (btn.checked = false);
}
body.addEventListener('click', func);
window.addEventListener('resize', function() {
    arrayRadio, windowSize = resize(windowSize);
    resizeDom(arrayRadio);
}, true);

const resizeDom = (arrayRadio) => {
    const items = arrayRadio.map((item) => {
        const sliderRadioItem = document.createElement('li');
        sliderRadioItem.className = 'widget__day-item';
        sliderRadioItem.insertAdjacentHTML('beforeend', `
            <input type="radio" id="radio${item}" class="radio-input" name="about" ${item == 1 ? 'checked=""' : ''} value="${item}"/>
            <label tabindex="0" class="about__radio-label" for="radio${item}">
                <span class="about__label-span"></span>
            </label>`);
        return sliderRadioItem;
    });
    sliderRadioContainer.replaceChildren(...items);
}
resizeDom(arrayRadio);

const sliseSlider = (e) => {
    left = e.target.value;
    fotoContainer.style.left=`${(left - 1) * -475}px`;
}
const sliseBook = (e) => {
    book = e.target.value;
    console.log(book);
}

sliderRadioContainer.addEventListener('click', (e)=>sliseSlider(e));
favorites.addEventListener('click', (e)=>sliseBook(e));
userModal.addEventListener('click', (e)=>menuOpen(e));




