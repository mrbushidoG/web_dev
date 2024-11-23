$(function(){
    $(':header').addClass('headline');
    $('li:lt(3)').hide().fadeIn(4000);
    $('li').on('click',function(){
    $(this).remove();
    });
});
