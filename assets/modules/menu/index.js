class Menu {
    constructor() {
        this._menu = document.querySelector('.menu');
        
        this._clik = this._menu.querySelector('.menu__clik');

        this._addListeners();
    }

    _addListeners() {
        this._clik.addEventListener('click', this._handleClikOpen);
    }

    _handleClikOpen = () => {
        const menuclik = this._menu.querySelector('.menu__window');
        const close = menuclik.querySelector('.menu__close');
        document.body.classList.add('no-scroll');

        const background = document.createElement('div');
        background.classList.add('menu__background');
        this._menu.appendChild(background);

        menuclik.classList.add('menu__window--opened');
        close.addEventListener('click', this._handleClikClose);
        background.addEventListener('click', this._handleClikClose);

        this._clik.addEventListener('click', this._handleClikClose);
        this._clik.removeEventListener('click', this._handleClikOpen);
    }

    _handleClikClose = () => {
        const menuclik = this._menu.querySelector('.menu__window');
        const close = menuclik.querySelector('.menu__close');
        const background = document.querySelector('.menu__background');
        document.body.classList.remove('no-scroll');

        menuclik.classList.remove('menu__window--opened');

        close.removeEventListener('click', this._handleClikClose);
        background.removeEventListener('click', this._handleClikClose);
        background.remove();

        this._clik.removeEventListener('click', this._handleClikClose);
        this._clik.addEventListener('click', this._handleClikOpen);
    }
}

export default new Menu();