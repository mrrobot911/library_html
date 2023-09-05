import { bookCards } from "../helpers/selectors.js";

export const cards = async (season) => {
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
        <img alt="The Book Eaters" loading="lazy" width="200" height="300" decoding="async" data-nimg="1" src="${element.image}"/>
        <button class="article-btn">Buy</button>
        `);
        return seasonArrayItem
    });
    if (bookCards.childNodes.length > 1) {
        let flag = true;
        bookCards.childNodes.forEach(el => el.className="article opacity");
        setTimeout(() => {
            bookCards.replaceChildren(...items);
            flag = false;
        }, 1000);
        setTimeout(() => {
            bookCards.childNodes.forEach(el => el.className="article");
            flag = true;
        }, 2000);
    } else {
        bookCards.replaceChildren(...items);
        bookCards.childNodes.forEach(el => el.className="article");
    }
    return bookCards
}