$(function(){
    var listHeight = $('#page').height();
    $('ul').append('<p>Height: ' + listHeight + 'px</p>');
    $('li').width('50%');
    $('li#one').width(500);
    $('li#two').width('75%');
})