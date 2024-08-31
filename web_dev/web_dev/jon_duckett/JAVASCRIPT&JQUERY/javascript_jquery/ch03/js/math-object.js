var randomNum = Math.floor((Math.random()*10)+ 1);
var today = new Date();

var el = document.getElementById('info');
el.innerHTML = "<h2>Random Number</h2>" +  randomNum + '<br/>' + today.toDateString();