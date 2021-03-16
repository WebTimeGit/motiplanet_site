document.addEventListener("DOMContentLoaded", () => {

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