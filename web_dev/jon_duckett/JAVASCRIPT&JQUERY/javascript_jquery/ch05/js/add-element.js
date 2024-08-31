// Create new element and store it in a variable
var newEl = document.createElement('li');

// Create text node and store in variable
var newText = document.createTextNode('quinoa');

// Attach the text node to the new element
newEl.appendChild(newText);

// Find the position where the new element should be added
var position = document.getElementsByTagName('ul')[0];

// Insert the new element into its position
position.appendChild(newEl);

/*************** 
 For Cold beverages list
****************/

// Create new element
var newColdbeveratesList = document.createElement('li');

// Create a text node
var beveragesTextNode = document.createTextNode('Palestine');

//Append the text node to the new element
newColdbeveratesList.appendChild(beveragesTextNode);

// Add class attribute of value 'cool'
newColdbeveratesList.className = 'cool';

// Find the element that we need to add the new element to
var position = document.getElementsByTagName('ul')[1];

// Append the new element to the position
position.appendChild(newColdbeveratesList);