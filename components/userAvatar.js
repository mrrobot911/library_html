import { userAvatarLogo } from "../helpers/selectors.js"

export const userAvatar = () => {
    const flag = localStorage.getItem('flag');
    const userId = localStorage.getItem('user');
    const db = JSON.parse(localStorage.getItem('users'));
    if (flag === 'false') {
        userAvatarLogo.innerHTML = `<svg id="user__img" width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14ZM18.6667 7.77778C18.6667 10.3551 16.5774 12.4444 14.0001 12.4444C11.4227 12.4444 9.33339 10.3551 9.33339 7.77778C9.33339 5.20045 11.4227 3.11111 14.0001 3.11111C16.5774 3.11111 18.6667 5.20045 18.6667 7.77778ZM19.4998 16.2781C20.9584 17.7367 21.7778 19.715 21.7778 21.7778H14L6.22225 21.7778C6.22225 19.715 7.0417 17.7367 8.50031 16.2781C9.95893 14.8194 11.9372 14 14 14C16.0628 14 18.0411 14.8194 19.4998 16.2781Z"></path>
    </svg>`;
    } else {
        console.log('1');
        userAvatarLogo.innerHTML = `<p>${db[userId].firstName[0].toUpperCase()}${db[userId].lastName[0].toUpperCase()}</p>`;
    }
}