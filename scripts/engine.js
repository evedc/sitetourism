function toggleMenu() {
    const menu = document.querySelector('.menu');
    const menuIcon = document.querySelector('.menu-icon');

    // Alterna a classe 'menu-active' no menu
    menu.classList.toggle('menu-active');

    // Verifica se o menu está ativo e alterna os ícones
    if (menu.classList.contains('menu-active')) {
        menuIcon.innerHTML = '&#10005;'; // Ícone de fechar (X)
    } else {
        menuIcon.innerHTML = '&#9776;'; // Ícone de hambúrguer
    }
}