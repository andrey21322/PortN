
window.addEventListener('DOMContentLoaded',() => {

const tabs = document.querySelectorAll('.li_one'),
      tabsContent = document.querySelectorAll('.our_img'),
      tabsParents = document.querySelector('ul.our_lin');

    function hideTabCont (){
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        tabs.forEach(item => {
            item.classList.remove('li_active');
        });
    }

    function showTabCont (i = 0) {
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');
      tabs[i].classList.add('li_active');
    }
    
    hideTabCont();
    showTabCont();
    
    tabsParents.addEventListener('click', (event) => {
        const target = event.target;
        if(target && target.classList.contains('li_one')){
            tabs.forEach((item , i ) => {
                if(target == item){
                    hideTabCont();
                    showTabCont(i);
                }
            });
        }
    });
});
$(document).ready(function(){
    $('.hamburger').click(
        function(){
            $('.hamburger').fadeOut(),
            $('.nav_wrapper').fadeIn(1000);
        }
    );
    $('.close_nav').click(
        function(){
            $('.nav_wrapper').fadeOut(),
            $('.hamburger').fadeIn();
        }
    );
    $('.effect').click(
        function(){
        $('.persons').fadeOut(1),
        $('.effect').fadeOut(1),
        $('.persons_links').fadeIn(1000).css({
            display:'flex'
        });
        });
    $('.about').click(
        function(){
        $('.persons').fadeIn(1000),
        $('.effect').fadeIn(1000),
        $('.persons_links').fadeOut(1);
        });
    $('.corusel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: false
      });
    $('.feed-form').validate({
        messages: {
            name: "" ,
            mail:"",
            subject:"",
            company:"",
            com:"",
        }
    });    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('.posup').fadeIn();
        } else{
            $('.posup').fadeOut();
        }
        });
        $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
         return false;
        });
    });
