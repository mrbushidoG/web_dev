function getTarget(e){
    if(!e){
        e = window.event;
    }
    return e.target || e.srcElement;
}

function itemDone(e){
    // Remove item from the list
    var target, elParent, elGrandparent;
    target= getTarget(e);
    elParent = target.parentNode;
    elGrandparent = target.parentNode.parentNode;
    elGrandparent.removeChild(elParent);

    // Prevent the link from taking you elsewhere
    if(e.preventDefault){
        e.preventDefault();
    } else{
        e.returnValue = false;
    }
}

var el = document.getElementById('shopping-list');
el.addEventListener('click', function(e){
    itemDone(e);
},false);