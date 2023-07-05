let icon_bar = document.querySelector('.icon_bars');
let icon_close = document.querySelector('.icon_close');
let list_nav = document.querySelector('.list_nav');

icon_bar.addEventListener('click', function() {
    list_nav.classList.remove('close_nav');
});

icon_close.addEventListener('click', function() {
    list_nav.classList.add('close_nav');
});