$(document).ready(function(){
    //jquery for toggle sub menus
    $('.sub-btn').click(function(){
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
    });
});


// add css classes when click on 
// sidebar
const menuLinks = document.querySelectorAll('.home-wrapper__menu--item--link');

menuLinks.forEach(link => {
    link.addEventListener('click', function() {
    if (!this.parentElement.classList.contains('logout')) {
        // Remove the 'active' class from all links
        menuLinks.forEach(link => {
            link.classList.remove('active');
        });
    
        // Add the 'active' class to the clicked link
        this.classList.add('active');
    }
    });
});

// categories
const tabLinks = document.querySelectorAll('.home-wrapper__categories--item');
tabLinks.forEach(link => {
    link.addEventListener('click', function() {
        tabLinks.forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
    });
});



// Initialize Swiper 
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        620: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});