function checkUsername(){
    var elMsg = document.getElementById('feedback');
    var elButton = document.getElementById('submit-button');

    if(this.value.length < 5) {
        elMsg.textContent = 'Username must be 5 characters or more';
    }
}

var elUsername = document.getElementById('username');
elUsername.onblur = checkUsername;
