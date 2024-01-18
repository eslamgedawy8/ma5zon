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
// Function to set the 'active' class based on the current URL
function setActiveClass() {
    const currentUrl = window.location.href;

    menuLinks.forEach(link => {
        const linkUrl = link.getAttribute('href');

        if (currentUrl.includes(linkUrl) && linkUrl !== '#') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Set initial 'active' class based on the current URL
setActiveClass();

// Add click event listener for navigation
menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Check if the clicked link is not a logout link
        if (!this.parentElement.classList.contains('logout')) {
            // Prevent the default behavior of the link
            event.preventDefault();

            // Get the href attribute of the clicked link
            const href = this.getAttribute('href');

            // Manually navigate to the link's href
            if (href && href !== '#') {
                window.location.href = href;

                // Set 'active' class after navigation
                setActiveClass();
            }
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
    autoplay: {
        delay: 6000,
        disableOnInteraction: false, 
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