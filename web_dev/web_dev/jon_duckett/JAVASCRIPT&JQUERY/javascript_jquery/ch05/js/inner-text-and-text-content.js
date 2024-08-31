var firstItem = document.getElementById('one');
var showTextContent = firstItem.textContent;
var showinnerText = firstItem.innerText;

var msg = '<p>TextContent: ' + showTextContent + '</p>';
    msg += '<p>innerText: ' + showinnerText + '</p>';

var elText = document.getElementById('script-result');
elText.innerHTML = msg;

firstItem.textContent = 'Okonomiyaki';
