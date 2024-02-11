const openMessage = require('./pop-up');
const statusInfo = document.querySelector('.main-container__status span');
const messageInfo = document.querySelector('.main-container__message span');

function ajax(url, method, data) {
    document.querySelector('.loading').classList.remove('none');
    let xhttp = new XMLHttpRequest();
    xhttp.open(method, url);
    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhttp.send(JSON.stringify(data));
    xhttp.onload = function() {
        document.querySelector('.loading').classList.add('none');
        if (method === 'GET' && xhttp.status === 200) {
            statusInfo.textContent = JSON.parse(xhttp.response).status;
            messageInfo.textContent = JSON.parse(xhttp.response).message;
        } else if (method === 'GET') {
            openMessage('Произошла ошибка!');
        }
        if (method === 'POST' && xhttp.status === 200 || method === 'POST' && xhttp.status === 400) {
            openMessage(JSON.parse(xhttp.response).message);
        } else if (method === 'POST') {
            openMessage('Произошла ошибка!');
        }
    };
    xhttp.onerror = function() {
        document.querySelector('.loading').classList.add('none');
        openMessage('Произошла ошибка!');
    };
}

module.exports = ajax;