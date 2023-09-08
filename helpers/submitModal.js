import { findCardContainer } from "../components/findCardContainer.js";
import { getCardsMenu } from "../components/getCardsMenu.js";
import { userAvatar } from "../components/userAvatar.js";
import { User } from "../db/user.js";
import { randomNumber, visitsCount } from "./helper.js";

export const submitModal = (e, users) => {
    let flag = false;
    e.preventDefault();
    const formData = new FormData(e.target);
    e.target.reset();

    if (e.target.className === 'login__container'){
        users.length > 0 && users.forEach(el => {
            if (el.hasOwnProperty('Email') && el.Email === formData.get('email')){
                flag = true;
                localStorage.setItem('user', users.indexOf(el));
                userAvatar();
                findCardContainer();
                getCardsMenu();
                visitsCount();
            }
        })
    } else if (e.target.className === 'registr__container') {
        const userData = new User();
        formData.has('firstName') && (userData.firstName = formData.get('firstName'));
        formData.has('lastName') && (userData.lastName = formData.get('lastName'));
        formData.has('email') && (userData.Email = formData.get('email'));
        formData.has('password') && (userData.Password = formData.get('password'));
        userData.cardNumber = randomNumber(9);
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
    } else if (e.target.className === 'curdBuy__formContainer_content') {
        const userId = localStorage.getItem('user');
        const db = JSON.parse(localStorage.getItem('users'));
        const user = db[userId];
        user.hasCard = true;
        db[userId] = user;
        localStorage.setItem('users', JSON.stringify(db));
    } else {
        console.log(e.target);
    }

    const closeEl = document.querySelector('.close');
    closeEl && closeEl.click();
}