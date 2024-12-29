// for (let i = 0; i < 30; i++) {
//   $('ul').append(function () {
//     return '<li><img src="images/2xkinglogo.png" alt="" style="background-color: black; display: inline-block;"></img></li>';
//   });
// };

// remove the element using the .remove() method
// $('li.item1').remove();

// Adding new content
$(function(){
  $('ul').before('<h1 style="color:red;">This is a new Heading</h1>');
  var $newListItem1 = $('<li>Malaysia</li>');
  var $newListItem2 = $('<li>Thailand</li>');
  var $newListItem3 = $('<li>Vietnam</li>');

  // add the new items to the list
  $('ul').prepend($newListItem1);
  $('li:last').append($newListItem2,$newListItem3);
  $('ul').prepend('<li>Japan</li>','<li>Laos</li>','<li>Cambodia</li>','<li>Taiwan</li>','<li>Morocco</li>');

  $('p:first').addClass('red-font');
  $('p:contains("Yellow")').addClass('yellow-font');
  $('p:last').addClass('brown-font');
  $('p').removeClass('yellow-font');

  $('li').on('click',function(){
    $(this).fadeOut(700);
  });
});