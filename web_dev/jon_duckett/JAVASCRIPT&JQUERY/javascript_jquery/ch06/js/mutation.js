var elList, addLink, newEl, newText, counter ,listItem, inputValue;

elList      = document.getElementById('list');
addLink     = document.querySelector('a');
counter     = document.getElementById('counter');
inputValue  = document.getElementById('list-items');

function addItem(e) {
    e.preventDefault();

    newEl = document.createElement('li');
    newText = document.createTextNode(inputValue.value);
    newEl.appendChild(newText);
    elList.appendChild(newEl);
}

function updateCount(){
    listItem = list.getElementsByTagName('li').length;
    counter.innerHTML = listItem;
}

addLink.addEventListener('click',addItem,false);
elList.addEventListener('DOMNodeInserted',updateCount,false);
console.log(inputValue.value);