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
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    //INIT '.slider-pods' SWIPER in tabs
    let pods_tab = document.querySelector('#pods-tab');
    if (pods_tab) {
        pods_tab.addEventListener('click', () => {
            setTimeout(() => {
                new Swiper('.slider-pods', {
                    // Optional parameters
                    loop: true,

                    // If we need pagination
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        dynamicBullets: true
                    },
                    initialSlide: 1,
                    slidesPerView: 3,
                    breakpoints: {
                        1024: {
                            slidesPerView: 4
                        },
                        767: {
                            slidesPerView: 3
                        },
                        567: {
                            slidesPerView: 2
                        },
                        280: {
                            slidesPerView: 1
                        }
                    }
                });
            }, 200)
        })
    }


    // slider-device SWIPER
    let slider_device = document.querySelector('.slider-device');
    if (slider_device) {
        new Swiper('.slider-device', {
            // Optional parameters
            loop: true,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            },
            initialSlide: 1,
            slidesPerView: 3,
            breakpoints: {
                1024: {
                    slidesPerView: 4
                },
                767: {
                    slidesPerView: 3
                },
                567: {
                    slidesPerView: 2
                },
                280: {
                    slidesPerView: 1
                }
            }
        });
    }

    // slider-news SWIPER
    let slider_news = document.querySelector('.slider-news');
    if (slider_news) {
        new Swiper('.slider-news', {
            // Optional parameters
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            initialSlide: 1,
            slidesPerView: 3,
            breakpoints: {
                1024: {
                    slidesPerView: 3
                },
                767: {
                    slidesPerView: 2
                },
                280: {
                    slidesPerView: 1
                }
            }
        });
    }


    new WOW().init();


});