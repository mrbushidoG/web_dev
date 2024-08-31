var score = 75; // Score
var msg = '';        // Message

function congratz(){
    msg += 'Congratulations! ';
}

if (score >= 50){
    congratz();
    msg+= 'Proceed to the next next level';
}

var el = document.getElementById('answer');
el.textContent = msg;