$(document).ready(function(){const a=$(document).width();function o(e){e<=1190?($(".header__menu, .header__contact").appendTo(".header__menu_mobile .column.start"),$(".header__social").appendTo(".header__menu_mobile .column.start"),$(".header__main .burger__holder").show().on("click",n),e<=890?($(".header__to-catalog.row_flex-10, .header__aside-icons").prependTo(".header__menu_mobile .column.start"),$(".header__search").prependTo(".header__menu_mobile .column.start"),$(".header__aside").hide()):$(".header__to-catalog.row_flex-10, .header__search, .header__aside-icons").prependTo(".header__aside .wrapper")):($(".header__menu, .header__social").appendTo(".header__main"),$(".header__contact").appendTo(".header__main"),$(".burger__holder").hide())}function n(){"block"!==$(".header__menu_mobile").css("display")?($(".header__menu_mobile").slideDown(500),$("#black_back").css({display:"block",opacity:"1"}),$(".header__main .burger__holder").addClass("close")):r(),$("#black_back").on("click",function(e){e.stopPropagation(),r()})}function r(){$(".header__menu_mobile").slideUp(200),$("#black_back").prop("style",""),$(".header__main .burger__holder").removeClass("close")}$(window).resize(function(){var e=$(document).width();(a<=1190&&1190<e||1190<a&&e<=1190)&&o(e)}),o(a),$(".select2").select2({language:{noResults:function(){return"Результаты не найдены"}}});var e=$(".carousel__holder");0<e.length&&e.slick({slidesToShow:1,slidesToScroll:1,speed:1500,arrows:!1,dots:!0,infinite:!0,autoplay:!1}),$('a[disabled="disabled"], button[disabled="disabled"]').on("click",function(e){return e.preventDefault(),e.stopPropagation(),!1}),0<$("#totop").length&&$("#totop").on("click",function(){$("body, html").animate({scrollTop:0},600)}),0<$("#container_main").length&&$(".scrollbar-inner").scrollbar()});