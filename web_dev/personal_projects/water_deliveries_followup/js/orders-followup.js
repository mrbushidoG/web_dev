// Refactore the program
function getTarget(e){
    return e.target;
}


// Delivery Is Done
function deliveryDone(e){
    var target, elParent, elGrandparent,displayStatus,textNode;

    target= getTarget(e);
    elParent = target.parentNode;
    elGrandparent = target.parentNode.parentNode;
    //elGrandparent.removeChild(elParent);

    // Display the delivery status

    displayStatus = document.createElement('p');
    textNode = document.createTextNode('Deliery Done');
    displayStatus.appendChild(textNode);
    elParent.append(displayStatus);
    elParent.setAttribute('style','background-color:green');
    displayStatus.setAttribute('style','color:white');
    


    e.preventDefault();
}

// If delivery did not happen (For any reason)
function deliveryNotDone(e){
    var target, elParent, elGrandparent,displayStatus,textNode;

    target= getTarget(e);
    elParent = target.parentNode;
    elGrandparent = target.parentNode.parentNode;
    //elGrandparent.removeChild(elParent);

    // Display the delivery status
    // The reason behind the non delivery
    var reasonForNonDelivery = prompt("Enter the reason for not delivering");
    displayStatus = document.createElement('p');
    textNode = document.createTextNode(reasonForNonDelivery);
    displayStatus.appendChild(textNode);
    elParent.append(displayStatus);
    elParent.setAttribute('style','background-color:#ef476f');
    displayStatus.setAttribute('style','color:#f8f9fa');
    
    // If no reason was entered
    // At 1:00 consider the order not delivered and make the status delivery failure
    


    e.preventDefault();
}

var deliveryButton = document.getElementsByClassName('delivery-status');
var getDeliveryStatus = document.getElementsByClassName('update-delivery-status');
    
 for (let i = 0; i < getDeliveryStatus.length; i++) {
    
        getDeliveryStatus[i].addEventListener('click',function(e){
            if(getDeliveryStatus[i].value === 'yes'){
                getDeliveryStatus[i].setAttribute('style','display:none');
                getDeliveryStatus[i+1].setAttribute('style','display:none');
                deliveryDone(e);
                
            } else if(getDeliveryStatus[i].value === 'no') {
                getDeliveryStatus[i].setAttribute('style','display:none');
                getDeliveryStatus[i-1].setAttribute('style','display:none');
                deliveryNotDone(e);
                
                
            }
        }, false);
        
 }






// var elAllButton = document.getElementsByClassName('update-delivery-status');
// //var elButton = elAllButton[0];
// var elShowinput = document.getElementById('feedback');
// var elDeliveryStatus = document.getElementsByClassName('display-status');
// var elOutOfTableButtons = document.getElementsByClassName('button-outside');


// console.log(elDeliveryStatus[0]);

// for (let i = 0; i < elAllButton.length; i++) {
    
// elAllButton[i].addEventListener('click', function () {
//     if (elAllButton[i].value === 'yes') {

//         elAllButton[i].setAttribute('style', 'display:none');
//         elAllButton[i+1].setAttribute('style', 'display:none');
//         // var elDisplayStatus = document.createElement('p');
//         // var elTextStatus = document.createTextNode('Delivery Is Done');
//         // elDisplayStatus.appendChild(elTextStatus);
//         // elDeliveryStatus[i].appendChild(elDisplayStatus);
//         // elDeliveryStatus[i].setAttribute('style', 'color:white');
//         // elDeliveryStatus[i].parentNode.setAttribute('style', 'background-color:green');
//     }
// }, false);
    
// }







