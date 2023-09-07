import { menuOpen } from "./components/menu.js";
import { body, btn, favorites, sliderRadioContainer, userModal } from "./helpers/selectors.js";
import { resize, sliseBook, sliseSlider } from "./helpers/helper.js";
import { modalOpen } from "./helpers/modalOpen.js";
import { resizeDom } from "./helpers/resizeDom.js";
import { cards } from "./components/cards.js";
import { submitModal } from "./helpers/submitModal.js";
import { getCardsMenu } from "./components/getCardsMenu.js";
import { findCardContainer } from "./components/findCardContainer.js";

let { arrayRadio, _ } = resize(window.innerWidth);
const temp = localStorage.getItem('users');
const users = (temp == null) ? [] : JSON.parse(temp);
localStorage.setItem('flag', false);
function func(e){
    (btn.checked === true && e.target !== btn && e.target !== test && e.target !== test.childNodes[1]) && (btn.checked = false);
}
body.addEventListener('click', func);
window.addEventListener('resize', function() {
    let size = resize(window.innerWidth);
    resizeDom(size.arrayRadio);
}, true);

resizeDom(arrayRadio);
cards('Winter');
findCardContainer();
getCardsMenu();

sliderRadioContainer.addEventListener('click', sliseSlider);
favorites.addEventListener('change', sliseBook);
userModal.addEventListener('click', menuOpen);
body.addEventListener('click', modalOpen);
body.addEventListener('submit', (e)=>submitModal(e, users));

