var firstItem = document.getElementById('one');         // Get the first item

if(firstItem.hasAttribute('class')){
    var attr = firstItem.getAttribute('class');

    // Add the value of the attribute after the list
    var el = document.getElementById('scriptResult');
    el.innerHTML = '<p>The first item has class name: ' + attr +'</p>';
}