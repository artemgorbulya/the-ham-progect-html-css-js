/*  section swich */


$('.menu-work li a').click(function (event) {

    event.preventDefault();

    $('.menu-work li').removeClass('selected');
    $(this).parent('li').addClass('selected');

    let thisItem = $(this).attr('data-section');

    console.log(thisItem);

    if (thisItem !== 'all') {
        $('.category-work-items[data-section != ' + thisItem + ']').hide(300);
        $('.category-work-items[data-section = ' + thisItem + ']').show(300);
    } else {
        $('.category-work-items').show(300);
    }
});


/*  tabs swich */

$('ul.tabs-navigation').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active')
        .siblings()
        .removeClass('active')
        .closest('div.tabs')
        .find('div.tabs-content')
        .removeClass('active')
        .eq($(this).index())
        .addClass('active');
});

/*  slick slider */

$('.classForSlick').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,

});
$('.classForSlick2').slick({
    dots: false,
    centerMode: true,
    arrows: true,
    prevArrow: '.myNawLeft',
    nextArrow: '.myNawRight',
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    adaptiveHeight: true,
    asNavFor: '.classForSlick',
    focusOnSelect: true,
    variableHeight: true,
    variableWidth: true,
});

/*  load more img */

function createNewImg() {

    $('#load-more-button').hide();
    $('.preloader').show();

    setTimeout(getMoreImgs, 2000);
    function getMoreImgs() {
        $('.category-work-items-two').addClass('category-work-items').removeClass('not-visible category-work-items-two');
        $('.preloader').hide();
        $('.category-work-items').show(300);
        $('.menu-items-work').removeClass('selected');
        $('.menu-items-work:first').addClass('selected');
        $('.content-amazing-work').css('min-height','850px');
        $('.content-amazing-work').css('height','auto');
        $('#load-more-button-more').show();
    }
}

function createNewImgNext() {

    $('#load-more-button-more').hide();
    $('.preloader').show();

    setTimeout(getMoreImgsNext, 2000);
    function getMoreImgsNext() {
        $('.category-work-items-three').addClass('category-work-items').removeClass('not-visible category-work-items-three');
        $('.preloader').hide();
        $('.category-work-items').show(300);
        $('.menu-items-work').removeClass('selected');
        $('.menu-items-work:first').addClass('selected');
        $('.content-amazing-work').css('min-height','1400px');
        $('.content-amazing-work').css('height','auto');

    }
}

$('#load-more-button').on('click', createNewImg);

$('#load-more-button-more').on('click', createNewImgNext);



/*  load more img mansory */

function createNewImgMasonry(){

    $('#gallery-load-more-button').hide();
    $('.preloader-masonry').show();

    setTimeout(getMoreImgsMsnr, 2000);
    function getMoreImgsMsnr(){
        $('.preloader-masonry').hide();
        $('.grid-item').removeClass('not-visible');

        $('.wrap-left').masonry({
            // options
            itemSelector: '.grid-item',
            columnWidth: 1
        });

        $('.wrap-center').masonry({
            // options
            itemSelector: '.grid-item',
            columnWidth: 1
        });

        $('.wrap-right').masonry({
            // options
            itemSelector: '.grid-item',
            columnWidth: 1,
        });

        $('.gallery').css('height','1370px');

    }
}

$('#gallery-load-more-button').on('click', createNewImgMasonry);

/*  masonry gallery */

document.addEventListener("DOMContentLoaded", ready);

function ready() {

    $('.wrap-left').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: 1
    });

    $('.wrap-center').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: 1
    });

    $('.wrap-right').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: 1,
    });

}