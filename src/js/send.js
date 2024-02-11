import validateForm from './validateForm';
import ajax from './ajax';

document.querySelector('.form__send').onclick = (event) => {
    event.preventDefault();

    const name = document.querySelector('.form__name').value;
    const email = document.querySelector('.form__email').value;
    const tel = document.querySelector('.form__tel').value;
    const textMessage = document.querySelector('.form__message').value;

    const dataForm = {
        "name": name,
        "email": email,
        "tel": tel,
        "textMessage": textMessage
    }

    const valid = validateForm([
        document.querySelector('.form__name'),
        document.querySelector('.form__email'),
        document.querySelector('.form__tel'),
        document.querySelector('.form__message')
    ]);

    if (valid) {
        ajax('http://localhost:9090/api/registration', 'POST', dataForm);
    }

    document.querySelector('.form__name').value = '';
    document.querySelector('.form__email').value = '';
    document.querySelector('.form__tel').value = '';
    document.querySelector('.form__message').value = '';
    document.querySelector('.modal').classList.add('none');
    document.querySelector('body').style.overflow = 'auto';
    document.querySelector('body').style.paddingRight = '0px';
}
