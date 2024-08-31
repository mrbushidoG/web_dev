// querySelector() returns only the first match
// var element = document.querySelector('li.hot');

// element.className = 'cool';


// querySelectorAll() returns a NodeList
var el_list = document.querySelectorAll('li.hot');
console.log(el_list.length);
el_list[3].className = 'cool';