// Create element/node
var add_more_game = document.createElement('li');

// Create a textNode
var game_name = document.createTextNode('Red Dead Redemption');

// Attach text node to the element
add_more_game.appendChild(game_name);

// Get the position of the required element
var get_list = document.getElementsByTagName('ul')[0];

// Attach the created element to requried element
get_list.appendChild(add_more_game);
