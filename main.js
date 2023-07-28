var menuEmail = document.querySelector('.navbar-email');
var menuDesktop = document.querySelector('.desktop-menu');
var menuMobile = document.querySelector('.mobile-menu');
var logoMenu = document.querySelector('.menu');
var shopMenu = document.querySelector('.navbar-shopping-cart');
var producDetail = document.querySelector('.product-detail');



menuEmail.addEventListener('click', toggleMenuDesktop);
logoMenu.addEventListener('click', toggleMenuMobile);
shopMenu.addEventListener('click', toggleMenuShop);


function toggleMenuDesktop() {
    var isAsideClosed = producDetail.classList.contains('inactive');

    if (!isAsideClosed) {
        producDetail.classList.add('inactive');
    }
    menuDesktop.classList.toggle('inactive');
}

function toggleMenuMobile() {
    var isAsideClosed = producDetail.classList.contains('inactive');

    if (!isAsideClosed) {
        producDetail.classList.add('inactive');
    }
    menuMobile.classList.toggle('inactive');


};

function toggleMenuShop() {
    var isMenuMobileClosed = menuMobile.classList.contains('inactive');

    if (!isMenuMobileClosed) {
        menuMobile.classList.add('inactive');
    }
    producDetail.classList.toggle('inactive');
};


