function checkusername(){
    var username = el.value;
    if (username.length < 5){
        elMsg.className = 'warning';
        elMsg.textContent = 'Not long enough';

    } else {
        elMsg.textContent = '';
    }
}


function tipUsername(){
    elMsg.className = 'tip';
    elMsg.textContent = 'Username must be at least 5 characters';
}

var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');

// when the username input gains / lose focus call functions above:
el.addEventListener('focus',tipUsername,false);
el.addEventListener('blur',checkusername,false);