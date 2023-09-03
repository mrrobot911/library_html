export const createElement = (tagName,attr) => {
    const elem = document.createElement(tagName);
    Object.assign(elem, attr);
    return elem
};

export function resize(windowSize){
    let arrayRadio = [];
    if (windowSize < 768) {
        arrayRadio = [1,2,3,4,5];
    } else if (windowSize < 1024) {
        arrayRadio = [1,2,3,4];
    } else {
        arrayRadio = [1,2,3];
    }
    return {arrayRadio, windowSize};
};