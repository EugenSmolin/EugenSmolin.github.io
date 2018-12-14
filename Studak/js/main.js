// ===================== fullPage ======================= //

$(document).ready(function() {
    $('#fullpage').fullpage({
        scrollOverflow: true,
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
    });
});

// ==================================================== //

// ================= ПЛАВНАЯ АНИМАЦИЯ ================= //

$(function(){
    $(document).ready(function() {
        $(".justscroll").click(function() {
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top
            }, {
                duration: 1000,
                });
            return false;
        });
    });
});

// ==================================================== //

// ================== INPUT + - ==================== //

$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

// ==================================================== //

// ====== АКТИВАЦИЯ БЛОКОВ ПРИ АДАПТИВЕ PHONES ======== //

$("#icon_1").click(function() {
  $(".triangle_block_content_left").toggle();
})

$("#icon_3").click(function() {
  $(".triangle_block_content_right").toggle();
})

// ==================================================== //

// ====== АКТИВАЦИЯ БЛОКОВ ПРИ АДАПТИВЕ TABLETS ======= //

$("#tablets_icon_1").click(function() {
  $(".tablets_triangle_block_content_left").toggle();
})

$("#tablets_icon_3").click(function() {
  $(".tablets_triangle_block_content_right").toggle();
})

// ==================================================== //

// ================== slider 1 ===================== //

var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 4000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}


// ================== slider 2 ===================== //

var slideNow_2 = 1;
var slideCount_2 = $('#slidewrapper_2').children().length;
var slideInterval_2 = 4000;
var navBtnId_2 = 0;
var translateWidth_2 = 0;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide_2, slideInterval_2);

    $('#viewport_2').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide_2, slideInterval_2);
    });

    $('#next-btn_2').click(function() {
        nextSlide_2();
    });

    $('#prev-btn_2').click(function() {
        prevSlide_2();
    });

    $('.slide-nav-btn_2').click(function() {
        navBtnId_2 = $(this).index();

        if (navBtnId_2 + 1 != slideNow_2) {
            translateWidth_2 = -$('#viewport_2').width() * (navBtnId_2);
            $('#slidewrapper_2').css({
                'transform': 'translate(' + translateWidth_2 + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth_2 + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth_2 + 'px, 0)',
            });
            slideNow_2 = navBtnId_2 + 1;
        }
    });
});


function nextSlide_2() {
    if (slideNow_2 == slideCount_2 || slideNow_2 <= 0 || slideNow_2 > slideCount_2) {
        $('#slidewrapper_2').css('transform', 'translate(0, 0)');
        slideNow_2 = 1;
    } else {
        translateWidth_2 = -$('#viewport_2').width() * (slideNow_2);
        $('#slidewrapper_2').css({
            'transform': 'translate(' + translateWidth_2 + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth_2 + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth_2 + 'px, 0)',
        });
        slideNow_2++;
    }
}

function prevSlide_2() {
    if (slideNow_2 == 1 || slideNow_2 <= 0 || slideNow_2 > slideCount_2) {
        translateWidth_2 = -$('#viewport_2').width() * (slideCount_2 - 1);
        $('#slidewrapper_2').css({
            'transform': 'translate(' + translateWidth_2 + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth_2 + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth_2 + 'px, 0)',
        });
        slideNow_2 = slideCount_2;
    } else {
        translateWidth_2 = -$('#viewport_2').width() * (slideNow_2 - 2);
        $('#slidewrapper_2').css({
            'transform': 'translate(' + translateWidth_2 + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth_2 + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth_2 + 'px, 0)',
        });
        slideNow_2--;
    }
}


// ================== slider 2 ===================== //

var slideNow_3 = 1;
var slideCount_3 = $('#slidewrapper_3').children().length;
var slideInterval_3 = 4000;
var navBtnId_3 = 0;
var translateWidth_3 = 0;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide_3, slideInterval_3);

    $('#viewport_3').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide_3, slideInterval_3);
    });

    $('#next-btn_3').click(function() {
        nextSlide_3();
    });

    $('#prev-btn_3').click(function() {
        prevSlide_3();
    });

    $('.slide-nav-btn_3').click(function() {
        navBtnId_3 = $(this).index();

        if (navBtnId_3 + 1 != slideNow_3) {
            translateWidth_3 = -$('#viewport_3').width() * (navBtnId_3);
            $('#slidewrapper_3').css({
                'transform': 'translate(' + translateWidth_3 + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth_3 + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth_3 + 'px, 0)',
            });
            slideNow_3 = navBtnId_3 + 1;
        }
    });
});


function nextSlide_3() {
    if (slideNow_3 == slideCount_3 || slideNow_3 <= 0 || slideNow_3 > slideCount_3) {
        $('#slidewrapper_3').css('transform', 'translate(0, 0)');
        slideNow_3 = 1;
    } else {
        translateWidth_3 = -$('#viewport_3').width() * (slideNow_3);
        $('#slidewrapper_3').css({
            'transform': 'translate(' + translateWidth_3 + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth_3 + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth_3 + 'px, 0)',
        });
        slideNow_3++;
    }
}

function prevSlide_3() {
    if (slideNow_3 == 1 || slideNow_3 <= 0 || slideNow_3 > slideCount_3) {
        translateWidth_3 = -$('#viewport_3').width() * (slideCount_3 - 1);
        $('#slidewrapper_3').css({
            'transform': 'translate(' + translateWidth_3 + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth_3 + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth_3 + 'px, 0)',
        });
        slideNow_3 = slideCount_3;
    } else {
        translateWidth_3 = -$('#viewport_3').width() * (slideNow_3 - 2);
        $('#slidewrapper_3').css({
            'transform': 'translate(' + translateWidth_3 + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth_3 + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth_3 + 'px, 0)',
        });
        slideNow_3--;
    }
}
