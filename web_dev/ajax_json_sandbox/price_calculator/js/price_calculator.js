var xhr = new XMLHttpRequest();
var total_price = document.getElementById('total-price');
var price = document.getElementsByClassName('price');
var item = document.getElementsByClassName('sku');
var sum = 0 ;
var chooseItem = "200ml";

xhr.onload = function(){
    if(xhr.status === 200){
        //First stage show the price
        total_price.innerHTML = xhr.responseText + '<br>';
        for (let i = 0; i < price.length; i++) {
            if(chooseItem == item[i].textContent){
                // show the price of the choosen item
                total_price.innerHTML += 'You have selected ' + chooseItem + ' and its price is: ' + price[i].textContent;
            }
        }

    }
}

xhr.open('GET','data/data-price.html',true);
xhr.send(null);
