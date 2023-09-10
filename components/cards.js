import { bookCards } from "../helpers/selectors.js";

export const cards = async (season) => {
    const userId = localStorage.getItem('user') || -1;
    const db = JSON.parse(localStorage.getItem('users'));
    function fetchDB() {
        return fetch("../db/books.json")
            .then(result => {return result.json()});
    }
    const seasonArray = await fetchDB();
    const items = seasonArray[`${season}`].map(element => {
        const seasonArrayItem = document.createElement('article');
        seasonArrayItem.className = "article opacity";
        seasonArrayItem.insertAdjacentHTML('beforeend', `
        <h3 >Staff Picks</h3> 
        <h4 >${element.name}</h4>
        <h5 >${element.author}</h5>
        <p >${element.text}</p>
        <img alt=${element.name} width="200" height="300" src="${element.image}"/>
        <button 
            class=${userId === -1 ? "article-btn" : db[userId].Books.some(el => el.includes(element.name)) ? "own" : "article-btn" }
        >${userId === -1 ? 'Buy' : db[userId].Books.some(el => el.includes(element.name)) ? 'Own' : 'Buy'}</button>
        `);
        
        return seasonArrayItem
    });
    if (bookCards.childNodes.length > 1) {
        let flag = true;
        bookCards.childNodes.forEach(el => el.className="article opacity");
        setTimeout(() => {
            bookCards.replaceChildren(...items);
            flag = false;
        }, 500);
        setTimeout(() => {
            bookCards.childNodes.forEach(el => el.className="article");
            flag = true;
        }, 550);
    } else {
        bookCards.replaceChildren(...items);
        bookCards.childNodes.forEach(el => el.className="article");
    }
    return bookCards
}