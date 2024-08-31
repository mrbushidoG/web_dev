var score = 75; // Score
var msg;

if (score >= 50){
    msg = 'Congratulation ';
    msg +='Proceed to the next level';
}

var el = document.getElementById('answer');
el.textContent = msg;