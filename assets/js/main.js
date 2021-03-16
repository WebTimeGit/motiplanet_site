document.addEventListener("DOMContentLoaded", () => {

    // PRELOADER ACTIVATED
    setTimeout(()=> {
        let page_preloader = document.querySelector('#page_preloader');
        if (!page_preloader.classList.contains('done')) {
            page_preloader.classList.add('done')
        }
    }, 500);




    //OPEN HEADER SEARCH MODAL

    let headerSearchBtn = document.querySelector('.header_search-btn');
    let headerSearchModal = document.querySelector('.search_modalBlock');
    let searchModalClose = document.querySelector('.search_modalBlock-close');

    if (headerSearchBtn) {
        headerSearchBtn.addEventListener('click', ()=> {
            headerSearchModal.classList.add('open');
            document.body.style.overflow='hidden';
        })
        searchModalClose.addEventListener('click', ()=> {
            headerSearchModal.classList.remove('open');
            document.body.style.overflow='initial';
        })
    }


});