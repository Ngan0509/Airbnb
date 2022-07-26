const listItemNavbar = document.querySelectorAll('.header__list-item');
const locationBtn = document.querySelector('.header-search__location');
const locationFlexible = document.querySelector('.location-flexible');


locationBtn.addEventListener('click', (e) => {
    locationFlexible.classList.toggle('show');
})

listItemNavbar.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.header__list-item.header__list-item-link--active').classList.remove('header__list-item-link--active');
        this.classList.add('header__list-item-link--active');
    })
});

const headerMenubtn = document.querySelector('.header__setup-menu');
const headerMenulist = document.querySelector('.header__setup-menu-list');

headerMenubtn.addEventListener('click', function () {
    headerMenulist.classList.toggle('show');
})

const modal = document.getElementById('myModal');
const closeBtn = document.querySelector('.close');
const modalContent = document.querySelector('.modal-content');

const btnList = headerMenulist.querySelectorAll('.header__setup-menu-verify .btn');

btnList.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        modal.classList.add('show');
    })
})

closeBtn.addEventListener('click', function () {
    modal.classList.remove('show');
})

modal.addEventListener('click', function (e) {
    if (e.target === e.currentTarget) {
        modal.classList.remove('show');
    }
})

// scroll
var header = document.getElementById('header');
var searchListBtn = document.querySelector('.header__list-search');

window.addEventListener('scroll', function () {
    var scrollHeight = window.pageYOffset;
    if (scrollHeight > 80) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
})
searchListBtn.addEventListener('click', function () {
    header.classList.add('show');
    if (header.classList.contains('show')) {
        window.addEventListener('scroll', function () {
            header.classList.remove('show');
        })
    }
})
