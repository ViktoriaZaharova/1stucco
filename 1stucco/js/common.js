$('.receipts-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon fill-none"><use xlink:href="../img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon fill-none"><use xlink:href="../img/sprite.svg#arrow-right"></use></svg></button>',
    appendArrows: '.receipts-slider__nav',
    appendDots: '.receipts-slider__nav',
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 830,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$('.sales-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon fill-none"><use xlink:href="../img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon fill-none"><use xlink:href="../img/sprite.svg#arrow-right"></use></svg></button>',
    appendArrows: '.sales-slider__nav',
    appendDots: '.sales-slider__nav',
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 830,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$('.product-slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon fill-none"><use xlink:href="../img/sprite.svg#arrow-left2"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon fill-none"><use xlink:href="../img/sprite.svg#arrow-right2"></use></svg></button>',
});

$('.product-preview').slick({
    slidesToShow: 3,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.product-slider',
    variableWidth: true,
});

$('.mobile-menu .dropdown').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('open').find('.dropdown-menu').fadeToggle();
});

$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeIn();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('.btn-search').on('click', function () {
    $('.form-search').fadeToggle();
});

$('.select').select2();