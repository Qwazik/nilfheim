
//myPlugins
  ;(function($){
    $.fn.qTabs = function(){
        var global = this;
        global.find('.tabs-content__item').hide();
        global.find('.tabs-content__item.active').show();
        $(this).find('.tabs-nav li').click(function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            var data = $(this).find('a').attr('href');
            $(global).find('.tabs-content__item').hide().removeClass('active');
            $(global).find('.tabs-content__item' + data + '').fadeIn(300).addClass('active');
            return false;
        })
    }

    $.fn.qToggle = function(){
        var global = this;
        $(this).click(function(e){
            e.preventDefault();
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        })
    }
  }(jQuery));

$(document).ready(function(){
    mainBgHeight();
  /*###########
  ### hover ###
  ############*/

  $('.social__item').hover(function(){
    $(this).addClass('animated tada');
    console.log('obj');
  },function(){
    $(this).removeClass('animated tada')
  })

  $('.btn--bird').hover(function(){
    $(this).addClass('hover');
  }, function(){
    $(this).removeClass('hover');
  })

  /*############
  ## fancybox ##
  ############*/
  $('.fancybox').fancybox({
    padding: 0,
    wrapCSS: 'popup-callback__wrap'
  });
  /*############
  #### mask ####
  ############*/

  $('.phone-mask').inputmask('+7(999) 999-99-99');

})//ready


$(window).resize(function(){
    mainBgHeight();
})//resize



function mainBgHeight(){
    $('.page__main-bg').height($(window).height() - $('.main-header').height());;
}