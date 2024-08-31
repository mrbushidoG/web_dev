var table = 3;				// Unit of table
var operator = 'multiplication';	// Type of calculation (defaults to addition)
var i = 1;				// Set counter to 1
var msg = '';				// Message


if (operator === 'addition'){
	while(i < 11){
		msg += i + ' + ' + table + ' = ' + (i + table) + '<br/>';
		i++;
	}
} else {
	while(i < 11){
		msg += i + ' x ' + table + ' = ' + (i * table) + '<br/>';
		i++;
	}
}


// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;