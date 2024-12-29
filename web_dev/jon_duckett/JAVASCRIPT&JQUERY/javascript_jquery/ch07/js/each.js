$(function(){
    // $('li').each(function(){
    //     var ids = this.id;
    //     $(this).append('<span class="order"> ' + ids + '</span>');
    // });
    $('li').on('click', function(){
        $(this).fadeOut().delay(3000);
    })
});