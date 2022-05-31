$(document).ready(function () {
    console.log($('.franchise-packages').offset().top)
    // анимация скролла для меню
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.header').addClass('active');

        }
        else {
            $('.header').removeClass('active');
        };
    });
    // animate scroll element 
    $(window).scroll(function () {
        if ($(this).scrollTop() > (($('.what-teplo').offset().top)-200)) {
            $('.what-teplo__item').animate({
                left: 0,
            }, 500,'linear'


            );

        }
      
        if ($(this).scrollTop() > (($('.franchise-packages').offset().top)-200)) {
            $('.left').animate ({
                left: 0,
                opacity: 1,
                
            }, 500)
            $('.right').animate ({
                left: 0,
                opacity: 1,
                
            }, 500)
        }
    })
    // feedback
    $(".button").click(function (e) {
        $('.feedback').addClass('active');
        $('.feedback').animate({
            opacity: 1,
        }, 500)

    });
    $('.feedback__exit').click(function (e) {
        $('.feedback').removeClass(`active`);
        $('.feedback').animate({
            opacity: 0,
        }, 500)

    });


    // ссылка якорь
    $('a[href^="#"]').on('click', function(e) { // Если ссылка является якорем, то выполняем следующее:
        let link = $(this).attr('href'), // берём ссылку якоря. Она же по факту id элемента
            el = $(document).find(link); // ищем элемент
        if(el.length > 0) { // если он существует
        

          el = el.eq(0).offset().top;// берём ПЕРВЫЙ элемент
          $('.menu').removeClass('active');
          $('.header__burger').removeClass('active');
          $('html, body').animate({
            scrollTop: (el-100) +'px' // выполняем к нему скролл
          }, 500);
        }
        return false; // Отменяем переход по ссылке => и вывод якоря в адресную строку
      });




});