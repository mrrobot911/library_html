import { sliderRadioContainer } from "./selectors.js";

export const resizeDom = (arrayRadio) => {
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
    return sliderRadioContainer
}