var mai_order = {
    items: [['500', 16.28], ['200B', 15.23], ['330', 8.14],['330 Silver',34.35]],
    offer: false,
    total_price: 1500
};

var price, sku, offer, total_price;

price = document.getElementById('price');
sku = document.getElementById('sku');
offer = document.getElementById('offer');
total_price = document.getElementById('total_price');

for (var i = 0; i < mai_order.items.length; i++) {
    var row = '<tr><td>' + mai_order.items[i][0] + '</td><td>'+ mai_order.items[i][1] + '</td></tr>';
    sku.innerHTML += row;

}

// offer.textContent = mai_order.offer;
sum_prices = 0;
for (let i = 0; i < mai_order.items[i].length; i++) {
    sum_prices += mai_order.items[i][1];
    
}
total_price.textContent = sum_prices.toFixed(2) + ' Number of items ' + mai_order.items.length;

