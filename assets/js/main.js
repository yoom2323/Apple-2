$(function(){
  
    $('.menu-btn').click(function(e){
        $('.menu-btn,.menu-bg, .gnb-bg-wrap').toggleClass('on')
        $('body').toggleClass('hidden')
        $('.menu-btn svg').toggleClass('active')
    })



    // 이미지효과
    gsap.to('.main-img',{ 
        scrollTrigger:{
            trigger:".main-img",
            start:"0% 0%", 
            end:"100% 0%", 
            scrub:0,
        },
        yPercent:-45,
        ease:'none'
    })

    //band-gallery 클릭이벤트
    $('.colornav li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        if ($('.btn1').parent().hasClass('on')) {
            $('.caption1').addClass('current').siblings().removeClass('current');
            $('.gallery-casaque .img-container').removeClass('on');
        } else {
            $('.caption2').addClass('current').siblings().removeClass('current');
            $('.gallery-casaque .img-container').addClass('on');
        }
    })

    // 메뉴 드롭다운
$(function(){
    var $menu = $('.gnb-item'),
        $header = $('.gnb'),
        $headerHeight = $header.outerHeight();

    $menu.mouseenter(function(){

        var currentMenu = $(this);
        var subHeight = currentMenu.find('.sub-menu').outerHeight();
        $header.stop().animate({height: $headerHeight + subHeight + 'px'},300);
        //setTimeout(할일, 시간);
        setTimeout(function(){currentMenu.find('.sub-menu').show();}, 200);
        $(".inner").css ({
            "-webkit-backdrop-filter":"blur(20px)",
            "-webkit-filter":"blur(20px)",
            "backdrop-filter":"blur(20px)",
        });

    })
    .mouseleave(function(){
        $header.stop().animate({height: $headerHeight + 'px'},300);
        $(this).find('.sub-menu').hide();
        $(".inner").css ({
            "-webkit-backdrop-filter":"",
            "-webkit-filter":"",
            "backdrop-filter":"",
        });
    });


})







    // $('.gnb-item #store, #mac').hover(function(){
    //     // $('#store-sub').slideToggle('on');
    //     // $(this).siblings().toggleClass('on');
    //     // if($(this).parent.children('.store-sub').hasClass('on')){
    //     //     $(this).parent.children('.store-sub').removeClass('on')
    //     // }else{

    //     // }
    // })

    // $('.gnb-item').mouseenter(function(){
    //     $(this).children('.store-sub').stop().slideDown('on');
    // })

    // $('.gnb-list').mouseleave(function(){
    //     $('.gnb-item').children('.store-sub').stop().slideUp();
    // });


    ScrollTrigger.create({
        trigger:".sc-custom .img-container",
        start:"0% 70%", 
        end:"100% 0%", 
        markers:false,
        onEnter:function(){
            $('.sc-custom .img-container').addClass('slide')
        }
    })





})