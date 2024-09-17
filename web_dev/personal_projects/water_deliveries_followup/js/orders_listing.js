/* function AppendRow(elBody,item){

//     var tr = document.createElement('tr');

//     item.map(o =>{
//         var td = document.createElement('td');
//         td.innerText = o;
//         tr.append(td);
//     });

//     elBody.append(tr);
// }


// var orders = [1, 2, 3, 4, 6, 7, 8, 9, 10];
// var orders2 = [1, 2, 3, 33, 44, 444, 3121, 9, 330];
// var orders3 = [1, 2, 3, 4, 6, 7, 8, 9, 3938];
// var el = document.getElementById('orders');


// // Populate the table with the array items
// AppendRow(el,orders);
// AppendRow(el,orders2);
// AppendRow(el,orders3);

// // Test DOM
// // Create new div
// const newDiv = document.createElement('div');

// // Create Text node
// const textNode = document.createTextNode('This is my first time creating elements using DOM way');

// // Append text as child to the div
// newDiv.appendChild(textNode);

// const currentDiv = document.getElementById('test-dom');
// document.body.insertBefore(newDiv,currentDiv);

// Get the user input
var user_input = document.getElementById('xss-attack');
user_input.setAttribute('value',user_input); 

// Get the position where the user input is going to be displayed
var display_input = document.getElementsByClassName('show-form-input')[0];

// Display the user input
display_input.innerHTML = user_input.value;

console.log(user_input);*/

/* Real Application */
var selectAllTd = document.querySelectorAll('td');

for (let i = 0; i < selectAllTd.length; i++) {
    selectAllTd[i].setAttribute('class','change-background-color');
    
}