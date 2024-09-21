var elAllButton = document.getElementsByClassName('update-delivery-status');
//var elButton = elAllButton[0];
var elShowinput = document.getElementById('feedback');
var elDeliveryStatus = document.getElementsByClassName('display-status');
var elOutOfTableButtons = document.getElementsByClassName('button-outside');


console.log(elDeliveryStatus[0]);

for (let i = 0; i < elAllButton.length; i++) {
    
elAllButton[i].addEventListener('click', function () {
    if (elAllButton[i].value === 'yes') {

        elAllButton[i].setAttribute('style', 'display:none');
        elAllButton[i+1].setAttribute('style', 'display:none');
        // var elDisplayStatus = document.createElement('p');
        // var elTextStatus = document.createTextNode('Delivery Is Done');
        // elDisplayStatus.appendChild(elTextStatus);
        // elDeliveryStatus[i].appendChild(elDisplayStatus);
        // elDeliveryStatus[i].setAttribute('style', 'color:white');
        // elDeliveryStatus[i].parentNode.setAttribute('style', 'background-color:green');
    }
}, false);
    
}







