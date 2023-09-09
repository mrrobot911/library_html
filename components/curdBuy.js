import { createElement } from "../helpers/helper.js";

export const curdBuy = () => {
    const curdBuyContainer = createElement('div', {
        className: 'curdBuy__container'
    });
    const curdBuyTitle = createElement('div', {
        className: 'curdBuy__container_title'
    });
    const curdBuyTitleH2 = createElement('h2', {
        textContent: 'Buy a library card'
    });
    const curdBuyClose = createElement('button',{
        className: 'curdBuy__closeBtn close',
        innerHTML: `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 16.8507L17 2" stroke="white" stroke-width="3"/>
        <path d="M2 2.14929L17 17" stroke="white" stroke-width="3"/>
      </svg>`
    })
    curdBuyTitle.append(curdBuyTitleH2, curdBuyClose);

    const curdBuyFormContent = createElement('form', {
        className: 'curdBuy__formContainer_content'
    });
    const curdBuyForm = createElement('div', {
        className: 'curdBuy__formContainer'
    });

    const curdBuyFormNumberInput = createElement('input', {
        className: 'curdBuy__formContainer_input',
        pattern: "[0-9]{16}",
        required: true,
        maxLength: "16"
    });
    const curdBuyFormNumberLabel = createElement('label', {
        className: 'curdBuy__formContainer_label',
        textContent: 'Bank card number'
    });
    curdBuyFormNumberLabel.append(curdBuyFormNumberInput);

    const curdBuyFormContentInputContainer = createElement('div', {
        className: 'curdBuy__formContainer_inputContainer'
    });
    const curdBuyFormCodeInput1 = createElement('input', {
        className: 'curdBuy__formContainer_inputShort',
        pattern: "[0-9]{2}",
        required: true,
        maxLength: "2"
    });
    const curdBuyFormCodeInput2 = createElement('input', {
        className: 'curdBuy__formContainer_inputShort',
        pattern: "[0-9]{2}",
        required: true,
        maxLength: "2"
    });
    curdBuyFormContentInputContainer.append(curdBuyFormCodeInput1, curdBuyFormCodeInput2);

    const curdBuyFormCodeLabel = createElement('label', {
        className: 'curdBuy__formContainer_label',
        textContent: 'Expiration code'
    });
    curdBuyFormCodeLabel.append(curdBuyFormContentInputContainer);

    const curdBuyFormCVCInput = createElement('input', {
        className: 'curdBuy__formContainer_inputShort',
        pattern: "[0-9]{3}",
        required: true,
        maxLength: "3"
    });
    const curdBuyFormCVCLabel = createElement('label', {
        className: 'curdBuy__formContainer_label',
        textContent: 'CVC'
    });
    curdBuyFormCVCLabel.append(curdBuyFormCVCInput);

    const curdBuyFormCardholderInput = createElement('input', {
        className: 'curdBuy__formContainer_input',
        required: true
    });
    const curdBuyFormCardholderLabel = createElement('label', {
        className: 'curdBuy__formContainer_label curdBuy_label',
        textContent: 'Cardholder name'
    });
    curdBuyFormCardholderLabel.append(curdBuyFormCardholderInput);

    const curdBuyFormPostalInput = createElement('input', {
        className: 'curdBuy__formContainer_input',
        required: true
    });
    const curdBuyFormPostalLabel = createElement('label', {
        className: 'curdBuy__formContainer_label',
        textContent: 'Postal code'
    });
    curdBuyFormPostalLabel.append(curdBuyFormPostalInput);

    const curdBuyFormCityInput = createElement('input', {
        className: 'curdBuy__formContainer_input',
        required: true
    });
    const curdBuyFormCityLabel = createElement('label', {
        className: 'curdBuy__formContainer_label',
        textContent: 'City / Town'
    });
    curdBuyFormCityLabel.append(curdBuyFormCityInput);

    const curdBuyFormSubmit = createElement('div', {
        className: 'curdBuy__container_form'
    });
    const curdBuyFormSubmitButton = createElement('input', {
        type: 'submit',
        className: 'curdBuy__container__submit',
        value: 'Buy'
    });
    const curdBuyFormSubmitSum = createElement('p', {
        textContent: '$ 25.00'
    });
    curdBuyFormSubmit.append(curdBuyFormSubmitButton, curdBuyFormSubmitSum);
    curdBuyForm.append(
        curdBuyFormNumberLabel, 
        curdBuyFormCodeLabel, 
        curdBuyFormCVCLabel, 
        curdBuyFormCardholderLabel,
        curdBuyFormPostalLabel,
        curdBuyFormCityLabel,
        curdBuyFormSubmit
        );
    const curdBuyText = createElement('p', {
        textContent: 'If you are live, work, attend school, or pay property taxes in New York State, you can get a $25 digital library card right now using this online form. Visitors to New York State can also use this form to apply for a temporary card.',
        className: 'curdBuy__container_text',
    });
    curdBuyFormContent.append(curdBuyForm, curdBuyText)
    curdBuyContainer.append(curdBuyTitle, curdBuyFormContent);
    return curdBuyContainer
}