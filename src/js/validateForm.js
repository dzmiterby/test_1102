const validator = require('validator');

function validateForm(array) {
    let result = true;

    for (let el of array) {
        let count = 0;
        if (el.value === '') {
            document.querySelector(`.form__${el.getAttribute('name')}`).style.border = '1px solid red';
            document.querySelector(`.form__${el.getAttribute('name')}-error`).textContent = 'заполните поле';
            setTimeout(() => {
                document.querySelector(`.form__${el.getAttribute('name')}`).style.border = '1px solid black';
                document.querySelector(`.form__${el.getAttribute('name')}-error`).textContent = '';        
            }, 2000);
            count++;
        } else if (el.getAttribute('name') === 'email' && !validator.isEmail(el.value)) {
            document.querySelector(`.form__${el.getAttribute('name')}`).style.border = '1px solid red';
            document.querySelector(`.form__${el.getAttribute('name')}-error`).textContent = 'некорректный электронный адрес';
            setTimeout(() => {
                document.querySelector(`.form__${el.getAttribute('name')}`).style.border = '1px solid black';
                document.querySelector(`.form__${el.getAttribute('name')}-error`).textContent = '';        
            }, 2000);
            count++;
        }
        if (count !== 0) result = false;
    }
    return result;
}

module.exports = validateForm;