import { findCardContainer } from "../components/findCardContainer.js";
import { getCardsMenu } from "../components/getCardsMenu.js";
import { User } from "../db/user.js";

export const submitModal = (e, users) => {
    let flag = false;
    e.preventDefault();
    const formData = new FormData(e.target);
    e.target.reset();

    if (e.target.className === 'login__container'){
        users.length > 0 && users.forEach(el => {
            if (el.hasOwnProperty('Email') && el.Email === formData.get('email')){
                flag = true;
                localStorage.setItem('flag', flag);
                findCardContainer();
                getCardsMenu();
            }
        })
    } else {
        const userData = new User();
        formData.has('firstName') && (userData.firstName = formData.get('firstName'));
        formData.has('lastName') && (userData.lastName = formData.get('lastName'));
        formData.has('email') && (userData.Email = formData.get('email'));
        formData.has('password') && (userData.Password = formData.get('password'));
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
    }
    document.querySelector('.close').click();
}