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
        addSticky();
        fadeScroll ();
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
    let main_banner = document.querySelector('.main-banner');
    if (main_banner) {
        new Swiper('.main-banner', {
            loop: true,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }


    //INIT '.slider-pods' SWIPER in tabs
    let pods_tab = document.querySelector('#pods-tab');
    if (pods_tab) {
        pods_tab.classList.add('init');
        pods_tab.addEventListener('click', () => {
            if (pods_tab.classList.contains('init')) {
                setTimeout(() => {
                    new Swiper('.slider-pods', {
                        // Optional parameters
                        loop: true,
                        autoplay: {
                            delay: 5000,
                        },
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
            }
            pods_tab.classList.remove('init');
        })
    }


    // slider-device SWIPER
    let slider_device = document.querySelector('.slider-device');
    if (slider_device) {
        new Swiper('.slider-device', {
            // Optional parameters
            loop: true,
            autoplay: {
                delay: 5000,
            },
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
            spaceBetween: 10,
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


    //prev_product_slr SWIPER
    let prev_product_slr = document.querySelector('.prev_product_slr');
    if (prev_product_slr) {
        new Swiper('.prev_product_slr', {
            // Optional parameters
            slidesPerView: 1,
            thumbs: {
                swiper: {
                    el: '.prev_product_slr-mini',
                    slidesPerView: 4,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    spaceBetween: 10,
                    breakpoints: {
                        1024: {
                            slidesPerView: 4
                        },
                        567: {
                            slidesPerView: 3
                        },
                        280: {
                            slidesPerView: 2
                        }
                    }
                }
            }
        });
    }


    //slider_collection SWIPER
    let slider_collection = document.querySelector('.slider-collection');
    if (slider_collection) {
        new Swiper('.slider-collection', {
            // Optional parameters
            loop: true,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
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


    //SCROLL TO TOP
    let toTopBtn = document.querySelector('#scroll-top');
    if (toTopBtn) {
        toTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            scrollTo(0, 0);
        })
        function fadeScroll () {
            if (window.scrollY !== 0) {
                toTopBtn.classList.add('visible');
            } else {
                toTopBtn.classList.remove('visible');
            }
        }
    }


    // CUSTOM SELECT
    const CustomSelect = function (e) {
        let mainInitId = e.elem ? document.getElementById(e.elem) : e.elem,
            optGroup = mainInitId.querySelectorAll('optgroup'),
            options = mainInitId.options,
            selectedIndex = options[mainInitId.selectedIndex],
            dataIndexCount = 0,
            dataImgCount = 0,
            createSelectLi,
            createSelectImg,
            prefixContainer = 'custom',
            titleClass = 'select_title',
            selectedClass = 'selected',
            selectContainerClass = 'custom_select',
            selectUlClass = 'select_list',
            optGroupClass = 'select_optgroup',
            imgClass = 'select_img',
            imgLazyClass = 'lazy',
            titleClassActive = 'active',
            ulOpenClass = 'open';

        const createSelectContainer = document.createElement('div');
        createSelectContainer.className = selectContainerClass;
        if (mainInitId.id) createSelectContainer.id = `${prefixContainer}-${mainInitId.id}`;

        let createSelectBtn = document.createElement('div');
        let btnSpan = document.createElement('span');
        createSelectBtn.appendChild(btnSpan);
        createSelectBtn.className = titleClass;
        btnSpan.textContent = options[0].textContent;

        if (selectedIndex.getAttribute('data-srcImg')) {
            let selectedImg = document.createElement('img');
            selectedImg.setAttribute('src', `${selectedIndex.getAttribute('data-srcImg')}`);
            createSelectBtn.appendChild(selectedImg);
        }

        const createSelectUl = document.createElement("ul");
        createSelectUl.className = selectUlClass;

        if (optGroup.length > 0) {
            for (let p = 0; p < optGroup.length; p++) {
                const createOptgroupItem = document.createElement('div');
                createOptgroupItem.classList.add(optGroupClass);
                createOptgroupItem.innerText = optGroup[p].label;
                createSelectUl.appendChild(createOptgroupItem);
                createLi(optGroup[p].querySelectorAll('option'));
            }
        } else createLi(options);

        function createLi(e) {
            for (let t = 0; t < e.length; t++) {
                createSelectLi = document.createElement('li');
                let liSpan = document.createElement('span');
                createSelectLi.appendChild(liSpan)
                liSpan.textContent = e[t].textContent;

                createSelectLi.setAttribute('data-value', e[t].value);
                createSelectLi.setAttribute('data-index', `option-${dataIndexCount++}`);
                createSelectUl.appendChild(createSelectLi);

                if (selectedIndex.textContent === e[t].textContent) {
                    createSelectLi.classList.add(selectedClass);
                    btnSpan.textContent = e[t].textContent;
                }

                if (options[dataImgCount++].getAttribute('data-srcImg')) {
                    let srcImg = e[t].getAttribute('data-srcImg');
                    createSelectImg = document.createElement('img');
                    createSelectImg.classList.add(imgClass, imgLazyClass);
                    createSelectImg.setAttribute('src', srcImg);
                    createSelectLi.appendChild(createSelectImg);
                }
            }
        }

        createSelectUl.addEventListener('click', e => {
            const target = e.target;

            if ('DIV' === target.tagName){}
            else {
                createSelectBtn.innerHTML = target.closest('li').innerHTML;
                mainInitId.options.selectedIndex = +target.closest('li').getAttribute('data-index');

                for (let a = 0; a < options.length; a++) {
                    createSelectUl.querySelectorAll('li')[a].classList.remove(selectedClass);
                    target.closest('li').classList.add(selectedClass);
                }
            }

        });

        createSelectBtn.addEventListener('click', function () {
            createSelectUl.classList.toggle(ulOpenClass);
            createSelectBtn.classList.toggle(titleClassActive);
        });

        document.addEventListener('mouseup', function (e) {
            let isClickInside = createSelectBtn.contains(e.target);
            if (!isClickInside && !e.target.classList.contains(optGroupClass)) {
                createSelectUl.classList.remove(ulOpenClass);
                createSelectBtn.classList.remove(titleClassActive);
            }
        })

        createSelectContainer.appendChild(createSelectBtn);
        createSelectContainer.appendChild(createSelectUl);
        mainInitId.parentNode.insertBefore(createSelectContainer, mainInitId);
        mainInitId.style.display = 'none';
    };


    //CUSTOM SELECT INIT
    let category_filter = document.querySelector('#category_filter');
    if(category_filter){
        new CustomSelect({
            elem: 'category_filter'
        });
    }


    //CUSTOM SELECT INIT
    let category_show = document.querySelector('#category_show');
    if (category_show) {
        new CustomSelect({
            elem: 'category_show'
        });
    }

    //CUSTOM SELECT INIT
    let option_product = document.querySelector('#option_product');
    if (option_product) {
        new CustomSelect({
            elem: 'option_product'
        });
    }


    new WOW().init();


});