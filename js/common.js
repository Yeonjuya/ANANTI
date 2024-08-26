$(document).ready(function () {
    $(".gnb").hide();

    $(".ham_wrap").click(function () {
        $(".gnb").fadeToggle(); // fadeToggle을 사용하여 열고 닫기 가능하게 함
    });


    $(".gnb > li").hover(
        function () {
            // 현재 호버된 li를 제외한 다른 li들의 색상 변경
            $(this).siblings().find('.menu__link').css('color', '#ddd');
        },
        function () {
            // 마우스가 나갔을 때
            // 모든 li의 색상을 원래대로 복원
            $(".gnb > li .menu__link").css('color', '#04C4D9');
        }
    );

});