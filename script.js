const btn = document.querySelector("#burgerBtn");
const test = document.querySelector(".menu");
function func(e){
    (btn.checked === true && e.target !== btn && e.target !== test && e.target !== test.childNodes[1]) && (btn.checked = false);
}
document.addEventListener('click', func);

