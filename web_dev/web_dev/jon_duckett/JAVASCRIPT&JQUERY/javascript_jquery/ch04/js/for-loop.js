var scores = [24,32,17];            // Arrays of scores
var arrayLength = scores.length;    // Items in array
var roundNumber = 0;                // Current round
var msg = '';                       // Message
var i;                              // counter


// Loop through the items in the array
for (i =0; i < arrayLength;i++){

    // Arrays are zero based (so 0 is round 1)
    // Add 1 to the current round
    roundNumber = (i + 1);

    // Write the current round to message
    msg += 'Round ' + roundNumber + ': ';

    // Get the score from the scores array
    msg += scores[i] + '<br/>';
}

document.getElementById('answer').innerHTML = msg;