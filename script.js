const btn = document.querySelector("#burgerBtn");
const test = document.querySelector(".menu");
const body = document.querySelector(".body__container");
function func(e){
    (btn.checked === true && e.target !== btn && e.target !== test && e.target !== test.childNodes[1]) && (btn.checked = false);
}
body.addEventListener('click', func);

