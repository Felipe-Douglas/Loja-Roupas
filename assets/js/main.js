$(document).ready(function() {

    /* Javascript Menu */

    icon = $('.social__icon');
    acessorios = $('.submenu__acessorios');
    categorias = $('.submenu__categorias');

    $('.social__image').hover(() => {
        icon.toggleClass('icone');
    });

    $('.drop__menu__acessorio').hover(() => {
        acessorios.toggleClass('ativa__submenu');
    });
    
    $('.drop__menu__categoria').hover(() => {
        categorias.toggleClass('ativa__submenu');
    });

    /* Javascript carrousel */

});
