const btn = document.querySelector("#burgerBtn");
const test = document.querySelector(".menu");
const body = document.querySelector(".body__container");
const sliderRadioContainer = document.querySelector(".about__radio-container");
const fotoContainer = document.querySelector(".about__photo-wrapper");
const favorites = document.querySelector(".favorites__ul");
const userModal = document.querySelector(".nav__img_container");
let left = 0;
let book = '';
let menu = true;

const createElement = (tagName,attr) => {
    const elem = document.createElement(tagName);
    Object.assign(elem, attr);
    return elem
};
resize();
function func(e){
    (btn.checked === true && e.target !== btn && e.target !== test && e.target !== test.childNodes[1]) && (btn.checked = false);
}
body.addEventListener('click', func);
window.addEventListener('resize', function() {
    resize();
    resizeDom();
}, true);

function resize(){
    let windowSize = window.innerWidth;
    if (windowSize < 768) {
        arrayRadio = [1,2,3,4,5];
    } else if (windowSize < 1024) {
        arrayRadio = [1,2,3,4];
    } else {
        arrayRadio = [1,2,3];
    }
    return windowSize, arrayRadio;
}

const resizeDom = () => {
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
resizeDom();

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
const menuOpen = () => {
    menu = !menu;
    if (menu === false) {
        const menuContainer = createElement('div', {
            className: 'menu__registr'
        });
        const menuH2 = createElement('h2',{
            className: 'menu__h2',
            textContent: 'Profile'
        });
        const menuHr = createElement('hr');
        const menuA1 = createElement('a', {
            textContent: 'Log In'
        });
        const menuA2 = createElement('a', {
            textContent: 'Register'
        });
        menuContainer.append(menuH2,menuHr,menuA1,menuA2);
        userModal.append(menuContainer);
    } else {
       userModal.lastChild.remove();
    }
    return userModal
}
userModal.addEventListener('click', (e)=>menuOpen());



