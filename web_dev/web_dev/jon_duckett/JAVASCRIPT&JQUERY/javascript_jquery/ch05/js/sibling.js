// Select the starting point and find its siblings
var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

// Change the classes
prevItem.className = 'complete';
nextItem.className = 'cool';