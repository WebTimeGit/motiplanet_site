document.addEventListener("DOMContentLoaded", () => {

    // PRELOADER ACTIVATED
    setTimeout(() => {
        let page_preloader = document.querySelector('#page_preloader');
        if (!page_preloader.classList.contains('done')) {
            page_preloader.classList.add('done')
        }
    }, 1000);


    // STICKY SELECTOR .header_menuBar
    let header = document.querySelector('#header');
    let main = document.querySelector('.main');
    let main_homePage = document.querySelector('.main_homePage');
    let headerHeight = header.offsetHeight;
    let menuBarHeight = document.querySelector('.header_menuBar').offsetHeight;
    let scrollToSticky = headerHeight - menuBarHeight;

    if (!main_homePage) {
        main.style.padding = `${headerHeight}px 0 0 0`;
    } else {
        main.style.padding = `0 0 0 0`;
    }

    function addSticky() {
        if (window.pageYOffset >= scrollToSticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    window.onscroll = function () {
        addSticky()
    };


    //INIT HEADER SEARCH MODAL
    let headerSearchBtn = document.querySelector('.header_search-btn');
    let headerSearchModal = document.querySelector('.search_modalBlock');
    let searchModalClose = document.querySelector('.search_modalBlock-close');

    if (headerSearchBtn) {
        headerSearchBtn.addEventListener('click', () => {
            headerSearchModal.classList.add('open');
            document.body.style.overflow = 'hidden';
        })
        searchModalClose.addEventListener('click', () => {
            headerSearchModal.classList.remove('open');
            document.body.style.overflow = 'initial';

        })
    }


    // MAIN SWIPER BANNER
    new Swiper('.main-banner', {
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


});