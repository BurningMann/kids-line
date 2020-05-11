window.onload = function(){
    $(".main_slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
        prevArrow: '<div class="main_arrow_prev"><img src="img/icon/main_next.svg"></div>',
        nextArrow: '<div class="main_arrow_next"><img src="img/icon/main_next.svg"></div>',

    })
    $(".main_catalog .slide_section .catalog").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<div class="main_categ_arrow_prev circle_arrow"><img src="img/icon/main_categ_arrow.svg"></div>',
        nextArrow: '<div class="main_categ_arrow_next circle_arrow"><img src="img/icon/main_categ_arrow.svg"></div>',
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    })
    $(".slide_section.related .catalog").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<div class="main_categ_arrow_prev circle_arrow"><img src="img/icon/main_categ_arrow.svg"></div>',
        nextArrow: '<div class="main_categ_arrow_next circle_arrow"><img src="img/icon/main_categ_arrow.svg"></div>',
        responsive: [
            {
              breakpoint: 1120,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    })

    $(".main_slider_section").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:false,
        asNavFor: '.vertical_slider_section',
        prevArrow: '<div class="main_arrow_prev"><img src="img/icon/main_next.svg"></div>',
        nextArrow: '<div class="main_arrow_next"><img src="img/icon/main_next.svg"></div>',
    })
    $(".vertical_slider_section").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots:false,
        vertical:true,
        verticalSwiping:true,
        asNavFor: '.main_slider_section',
        focusOnSelect: true,
        prevArrow: '<div class="vertical_slider_arrow_prev circle_arrow"><img src="img/icon/slider_arrow_up.svg"></div>',
        nextArrow: '<div class="vertical_slider_arrow_next circle_arrow"><img src="img/icon/slider_arrow_up.svg"></div>',
        responsive: [
            {
              breakpoint: 998,
              settings: {
                vertical:false,
                verticalSwiping:false,
              }
            },
            {
                breakpoint: 520,
                settings: {
                    vertical:false,
                    verticalSwiping:false,
                  slidesToShow: 4,
                }
            }

        ]
    })
    /* перевод картинки svg в код */
    $('.news_element img, .circle_arrow img').each(function(){
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
          var $svg = $(data).find('svg');
          if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
          }
          $svg = $svg.removeAttr('xmlns:a');
          if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
          }
          $img.replaceWith($svg);
        }, 'xml');
      });
    /* end перевод картинки svg в код */


    $(".pagination_box .pagination.active").click(function(EO){
        EO.preventDefault()
    }) 
    $(".menu_element.parent").click(function(EO){
        EO.preventDefault()
    }) 

/*     $(".form_button").click(function(EO){
        EO.preventDefault();
    }) */
    /* Вывод форм, кнопке формы нужно указывать атрибут "data-to" с название класса высшего блока формы и класс "form_button" */
    $(".form_button").click(function(EO){
        let target = '.'+$(this).data("to")
        $("body").addClass("hidden")
        $(".modal_bg").css("display","flex");
        $(target).css("display","block")
        $("body").click(function(EO){
            if(EO.target == $(".modal_bg")[0]){
                $(".modal_bg").fadeOut()
                $("body").removeClass("hidden")
                $(target).css("display","none")
            }
        })
        $(".close_button").click(function(){
            $(this).closest(".modal_bg").fadeOut()
            $("body").removeClass("hidden")
            $(target).css("display","none")
        });
    })
    /* End вывод форм */

    /* Проверка форм */
    function form_check(EO,__this){
        /* EO.preventDefault(); */
        let rq_fields = $(__this).closest("form").find('.required');
        rq_fields.map(function(index, element){
            if($(element).val() == ""){
                $(element).closest("label").addClass("error")
            }else{
                $(element).closest("label").removeClass("error")
            }
        })
        if($(".error").length == 0){
            console.log("without error code")
        }
        
    }
    $("form input[type='submit']").click(function(EO){
        let __this = $(this)
        form_check(EO,__this)
    })
    /* End Проверка форм */
    if(window.innerWidth <= 1169){
        $(".catalog_filter").prepend('<span class="filter_mobile">Фильтр <span><i class="fas fa-sort-down"></i></span></span>')
        $(".filter_mobile").click(function(){
            $(this).toggleClass("open")
            $(".filter_wrap").slideToggle().toggleClass("open")
        })
/*         $(".menu_element.parent").click(function(){
            $(this).find(".dropdown_menu").slideToggle();
        }) */
    }

}
/*для стиля Хлебных*/
if(window.innerWidth >= 600){
    let bredcumb_position = 0
    let bredcumb_count = 10
    $(".bredcumb").each(function(index){
        bredcumb_position += 45
        $(this).css({'left' : '-' + bredcumb_position + 'px', 'z-index':bredcumb_count - index,})
    })
}

/*end для стиля Хлебных*/

/*стиализация selection*/
$('.sort').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 100;

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
});
/*end стиализация selection*/

/* функционал меню каталога */
$(".catalog_menu_element_major.open .catalog_menu_element_minor").css("display","block")
 $(".catalog_menu_element_major .title").click(function(){
    if($(this).closest(".catalog_menu_element_major").hasClass("open")){
        $(this).closest(".catalog_menu_element_major").find(".catalog_menu_element_minor").slideUp();
        $(this).closest(".catalog_menu_element_major").removeClass("open");
    }else{
        $(".catalog_menu_element_major.open .catalog_menu_element_minor").slideUp();
        $(".catalog_menu_element_major.open").removeClass("open");
        $(this).closest(".catalog_menu_element_major").addClass("open")
        $(this).closest(".catalog_menu_element_major").find(".catalog_menu_element_minor").slideDown()
    }
 })
/* end функционал меню каталога */

/* выбор звёзд в форме отзывов*/
$(".review_form_box .star_box label").click(function star(){
    let count = parseInt($(this).find("input").val())
    $(".star_box > label > span").removeClass("full_star")
    for(let i = 0; i < count; i++){
        let current = $(".star_box > label > span")[i]
        $(current).addClass("full_star")
    }
})
/* end выбор звёзд в форме отзывов*/

$(".ham").click(function(){
    $("body").addClass("hidden")
    $(".modal_bg").fadeIn("fast");
    $(".menu_wrapper").addClass("open")
    $(".menu_wrapper.open .close .ham").click(function(){
        $(this).closest(".open").removeClass("open");
        $(".modal_bg").fadeOut("fast");
        $("body").removeClass("hidden")
    })
    $("body").click(function(EO){
        if(EO.target == $(".modal_bg")[0]){
            $(".modal_bg").fadeOut()
            $("body").removeClass("hidden")
            $(this).find(".open").removeClass("open");
        }
    })
})
$(".menu_element.parent").click(function(){
    $(this).find(".dropdown_menu").slideToggle();
})
