var sayiing = 'Home sweet home';
var msg = '<h2>Length</h2><p> ' + sayiing.length + '</p>' ;
msg += '<h2>toUppercase</h2><p> ' + sayiing.toUpperCase() + '</p>';
msg += '<h2>tolowercase</h2><p> ' + sayiing.toLowerCase() + '</p>';
msg += '<h2>character index: 12</h2><p> ' + sayiing.charAt(12) + '</p>';



var el = document.getElementById('info');
el.innerHTML = msg;