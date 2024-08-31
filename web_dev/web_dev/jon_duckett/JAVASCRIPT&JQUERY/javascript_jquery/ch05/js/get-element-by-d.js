// Select the element and store it in a variable
var el = document.getElementById('one');

// Change the value of the class attribute.
el.className = 'cool';

// Get the nodelist of the elements with the class attribute of 'hot'
var the_hot_element = document.getElementsByClassName('hot');

console.log(the_hot_element.length);

if(the_hot_element.length >= 1){
    var el2 = the_hot_element[2]
    el2.className = 'cool';  
}



