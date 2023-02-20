$(function () {
    $('#banner_slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        animateOut: 'fadeOut',
        dots: true,
        touchDrag: false,
        mouseDrag: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 1
            }
        }
    });
    $('#suggestion_slider').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        navText: ["<span class='slidebtn_left'></span>","<span class='slidebtn_right'></span>"],
        touchDrag: true,
        mouseDrag: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            768: {
                items: 3,
                margin: 10
            },
            1024: {
                items: 3,
                margin: 25
            }
        }
    });
    $('#resource_slider').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        navText: ["<span class='slidebtn_left'></span>","<span class='slidebtn_right'></span>"],
        touchDrag: true,
        mouseDrag: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            768: {
                items: 3,
                margin: 10
            },
            1024: {
                items: 3,
                margin: 30
            }
        }
    });
});
$(function () {
    $(document).off('click.bs.tab', '[data-hover="tab"]');
    $(document).on('mouseenter.bs.tab', '[data-toggle="tab"], [data-hover="tab"]', function () {
        $(this).tab('show');
    });
});
var vid = document.getElementById("myVideo");
function playVid() {
    vid.play();
   $('svg.svg_pause').show();
   $('svg.svg_play').hide();
}
function pauseVid() {
    vid.pause();
    $('svg.svg_play').show();
    $('svg.svg_pause').hide();
}