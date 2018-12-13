/* jQuery File */
$(document).ready(() => {
 
    $('.login-button').on('click', () => {
      $('.login-form').toggle();
    });
    
    $('.menu-button').on('mouseenter', () => {
      $('.nav-menu').show();
      $('.menu-button').addClass('button-active')
      /*$('.menu-button').css({
        color: '#C3FF00',
        backgroundColor: '#535353',
      })*/
      // $('.menu-button').css('color', '#C3FF00');
      $('.nav-menu').removeClass('hide');c  
      $('.menu-button').animate({
        fontSize: '24px'
      }, 200)
    })
    
    $('.nav-menu').on('mouseleave', () => {
      $('.nav-menu').hide();
    })
    
});  