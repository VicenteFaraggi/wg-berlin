$(window).scroll(function () {
    $scroll = $(window).scrollTop();
    
    if ($scroll > 0) {
        $('#navbar').css('background', "#212529");
    } else {
        $('#navbar').css('background', 'transparent');
    }
});

//Reviews
$('.reviews-carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:false,
    items:1,
    smartSpeed: 600,
    dots: true,
}); 




