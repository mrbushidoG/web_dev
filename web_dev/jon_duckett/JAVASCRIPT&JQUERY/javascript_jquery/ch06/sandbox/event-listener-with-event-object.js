var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');


function checkLength(e, minLength) {
    var el;
    el = e.target;
    console.log(el.type);
    if (el.value.length < minLength) {
        elMsg.textContent = 'Username characters must be at least ' + minLength + ' characters';
    } else {
        elMsg.textContent = '';
    }
}


elUsername.addEventListener('blur',function(e){
    checkLength(e,5);
}, false);



