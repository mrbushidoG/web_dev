// Create variable for welcome message
var greeting = "Howdy ";
var firstName = "Molly";
var message = ", Please check your order:";
//Concatenate the three variables above to create the welcome message
var welcome = greeting + firstName + message;

// Create variables to hold details about the sign
var sign = "Montague House";
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//Get the element that has an id of greeting
var el = document.getElementById("greeting");
// Replace teh content of that element with the personalized welcome message
el.textContent = welcome;

// Get the elment that has an id of userSign then update its contents
var elSign = document.getElementById("userSign");
elSign.textContent = sign;

// Get the element that has an id of tiles then update its contents
var elTiles = document.getElementById("tiles");
elTiles.textContent = tiles;

// Get the element that has an id of subTotal then update its content
var elSubTotal = document.getElementById("subTotal");
elSubTotal.textContent = '$' + subTotal;

// Get the element that has an id of shipping then update its content
var elShipping = document.getElementById("shipping");
elShipping.textContent = '$' + shipping;

// Get the element that has an id of grandTotal then update its content
var elGrandTotal = document.getElementById("grandTotal");
elGrandTotal.textContent = '$' + grandTotal;



