/*banner区域图片轮播*/
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 300,
        centeredSlides: true,
        autoplay: 5000,
        autoplayDisableOnInteraction: false
    });