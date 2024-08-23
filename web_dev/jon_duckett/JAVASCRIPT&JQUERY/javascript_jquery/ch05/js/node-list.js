// Get all class--> 'hot' using the querySelectorAll method
var el = document.querySelectorAll('li.hot');

// check if the el has items
if(el.length > 0){

    for (let i = 0; i < el.length; i++) {
        el[i].className = 'cool';
        
    }


}