$(document).ready(function () {

    //package
    const p_list = new Swiper('.p_list', {
        autoplay: {
            delay: 2500, // 2.5초
            disableOnInteraction: false, // 마우스로 제어한 후 자동여부(false=자동)
        },
        loop: true, // 반복여부
        speed: 1000, // 슬라이드넘어가는 속도 ms
        slidesPerView: 1.2, //화면에 보이는 슬라이드 갯수
        spaceBetween: 30,
        breakpoints: {
            768: {
                slidesPerView: 1.5,
                spaceBetween: 50,
            },
            1200: {
                slidesPerView: 2.8,
                spaceBetween: 50,
            },
        },
    });

    // $(".package_dec").hide();
    // $(".p_list li").mouseenter(function () {
    //     // let idx = $(this).index();
    //     $(this).find(".package_dec").fadeIn();
    // });
    // $(".p_list li").mouseleave(function () {
    //     // let idx = $(this).index();
    //     $(this).find(".package_dec").fadeOut();
    // });

    $(".package_dec, .dec_wrapper").hide();
    $(".p_list li").hover(function () {
        $(this).find(".package_dec, .dec_wrapper").stop().slideToggle();
    });

    $(".object").hide();
    // 각 more_wrapper에 대해 이벤트 리스너 설정
    $(".more_wrapper").hover(
        function () {
            // 마우스가 들어왔을 때
            $(this).find(".object").stop().fadeIn();
        },
        function () {
            // 마우스가 나갔을 때
            $(this).find(".object").stop().fadeOut();
        }
    );

    //membership
    const m_list = new Swiper('.m_list', {
        autoplay: {
            delay: 1,
            disableOnInteraction: false, // 마우스로 제어한 후 자동여부(false=자동)
        },
        loop: true, // 반복여부
        speed: 1800, // 슬라이드넘어가는 속도 ms
        slidesPerView: 1.3, //화면에 보이는 슬라이드 갯수
        spaceBetween: 10,
        breakpoints: {
            768: {
                slidesPerView: 3.4,
                spaceBetween: 0,
            },
            1400: {
                slidesPerView: 5.5,
                spaceBetween: 0,
            },
        },
    });
    m_list.slides[1].style.marginLeft = '70px';


});