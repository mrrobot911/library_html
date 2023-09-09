import { menuOpen } from "./components/menu.js";
import { body, favorites, sliderRadioContainer } from "./helpers/selectors.js";
import { checkButton, resize, sliseBook, sliseSlider, visitsCount } from "./helpers/helper.js";
import { modalOpen } from "./helpers/modalOpen.js";
import { resizeDom } from "./helpers/resizeDom.js";
import { cards } from "./components/cards.js";
import { submitModal } from "./helpers/submitModal.js";
import { getCardsMenu } from "./components/getCardsMenu.js";
import { findCardContainer } from "./components/findCardContainer.js";
import { userAvatar } from "./components/userAvatar.js";

let { arrayRadio, _ } = resize(window.innerWidth);
const temp = localStorage.getItem('users');
const users = (temp == null) ? [] : JSON.parse(temp);
const userId = localStorage.getItem('user');

body.addEventListener('click', checkButton);
window.addEventListener('resize', function() {
    let size = resize(window.innerWidth);
    resizeDom(size.arrayRadio);
}, true);

resizeDom(arrayRadio);
cards('Winter');
userAvatar();
findCardContainer(userId);
getCardsMenu();

sliderRadioContainer.addEventListener('click', sliseSlider);
favorites.addEventListener('change', sliseBook);
body.addEventListener('click', menuOpen);
body.addEventListener('click', (e)=>modalOpen(e.target));
body.addEventListener('submit', (e)=>submitModal(e, users));

