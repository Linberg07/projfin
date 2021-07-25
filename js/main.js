const tabHeaders = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');



tabHeaders.forEach(function (item) {
    item.addEventListener('click', function () {

        contentBoxes.forEach(function (item) {
            item.classList.add('hidden')
        })

        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('hidden');
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            tabHeaders.forEach(el => {
                el.classList.remove('active');
        });
        this.classList.add('active');
        }
    })
});

$(function () {

    


    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
        $('.menu__btn').toggleClass('menu__btn--active');
        $('body').toggleClass('no-scroll');
        
    });

    $('.choice__slider').slick({
        arrows: false,
        // autoplay: true,
        // autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 880,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.request__btn').on('click', function() {
        $('.request').addClass('active');
        $('body').addClass('no-scroll');
        setTimeout(function () {
            $('.request__form').css({"transform": "none", "opacity": "1"});
        }, 1);
        $('.request__form').on('click', function (event){
            event.stopPropagation();
        })
    });

    $('.request').on('click', function (event){
        let currentSignup = event.currentTarget;

        $('.request__form').removeAttr('style');
        setTimeout(function(){
            $('.request').removeClass('active');
            $('body').removeClass('no-scroll');
        }, 200);
    });
    $('.menu__link').on('click', function(){
        if($('.menu__btn').css('display') !='none'){
            $('.menu__btn').trigger('click');
        }
    });
    $('.menu__item').on('click', function () {
        $('.menu__item').removeClass('active');
        $(this).addClass('active');
    });
})

wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       false,       // default
    live:         true        // default
}
)
wow.init();