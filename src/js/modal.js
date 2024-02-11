const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');
const btnOpen = document.querySelector('.header__button');
const btnClose = document.querySelector('.modal__content-close');
const body = document.querySelector('body');

import scrollWidth from './scrollWidth';

btnOpen.onclick = () => {
    modal.classList.remove('none');
    body.style.overflow = 'hidden';
    body.style.paddingRight = `${scrollWidth}px`;
}

btnClose.onclick = () => {
    modal.classList.add('none');
    body.style.overflow = 'auto';
    body.style.paddingRight = '0px';
}

modal.onclick = () => {
    modal.classList.add('none');
    body.style.overflow = 'auto';
    body.style.paddingRight = '0px';
}

modalContent.onclick = (event) => {
    event.stopPropagation();
}

document.onkeydown = (elem) => {
    if(elem.key === 'Escape') {
        modal.classList.add('none');
        body.style.overflow = 'auto';
        body.style.paddingRight = '0px';
    }
}
