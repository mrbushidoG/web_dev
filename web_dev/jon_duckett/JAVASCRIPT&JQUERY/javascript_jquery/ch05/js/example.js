// Adding Items to the start and end of the list
var list = document.getElementsByTagName('ul')[0];


// Add the item to the end of the list
var newItemLast = document.createElement('li');
var textNodeLast = document.createTextNode('cream');
newItemLast.appendChild(textNodeLast);
list.appendChild(newItemLast);


// Add the item to the start of the list
var newItemFIrst =  document.createElement('li');
var textNodeFirst =document.createTextNode('Kunafa');
newItemFIrst.appendChild(textNodeFirst);
list.insertBefore(newItemFIrst,list.firstChild);

var listItem = document.querySelectorAll('li');    // All <li> elements

// ADD class 'cool' to li element by looping through the list
for(var i = 0;i < listItem.length;i++){
    listItem[i].className = 'cool';
}

// Add number ofitems in the list to the heading
var heading = document.querySelector('h2');     // get the h2 element
var headingText = heading.firstChild.nodeValue; // h2 text
var totalListNumbers = listItem.length;
var newHeading = headingText + '<span>' + totalListNumbers + '</span>';
heading.innerHTML = newHeading;
