$(document).ready(function () {

    // overview
    $(".tab_img li:not(:first-child)").hide();
    $(".tab_btn li").click(function () {
        let idx = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".tab_img li").eq(idx).fadeIn().siblings().fadeOut();
    });

    //amenities
    $(".tab_content .bath").hide();
    $(".amenities .tab_btn div").click(function () {
        let tabClass = $(this).hasClass('r_tab') ? 'room' : 'bath';
        $(this).addClass("on").siblings().removeClass("on");
        $(".tab_content ." + tabClass).fadeIn().siblings("ul").hide();
    });

    if (tabClass === 'room') {
        $(".tab_btn .b_tab").removeClass("on");
    } else {
        $(".tab_btn .r_tab").removeClass("on");
    }
    $(".tab_content ." + tabClass).fadeIn().siblings("ul").fadeOut();
});