const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    links = document.querySelectorAll('.a-link'),
    overlay = document.querySelector('.menu__overlay'),
    counters = document.querySelectorAll('.skills__percentages-value'),
    lines = document.querySelectorAll('.skills__percentages-scale');

hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('menu_active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('menu_active');
});

links.forEach( li => {
    li.addEventListener('click', () => {
        menu.classList.remove('menu_active');
    });
});

counters.forEach( (item, i) => {
 lines[i].style.width = item.innerHTML;
});

