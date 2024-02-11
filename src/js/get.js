import ajax from './ajax';

document.querySelector('.main-container__button').onclick = (event) => {
    event.preventDefault();
    ajax('http://localhost:9090/api/ping', 'GET', '');
}
