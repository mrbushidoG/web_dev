// function getTarget(e){
//     return e.target;
// }

function tickOff(e){
    var target, elparentNode, elGrandParentNode, clickedItem;

    target = e.target;
    elparentNode = target.parentNode;
    elGrandParentNode = target.parentNode.parentNode;
    clickedItem = document.createTextNode('Clicked');
    makeitAsList = document.createElement('li');
    makeitAsList.append(clickedItem);

    elGrandParentNode.replaceChild(makeitAsList,elparentNode);

    e.preventDefault();
}

el = document.getElementById('check-list');
el.addEventListener('click',function(e){
    tickOff(e);
}
,false);