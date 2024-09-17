var displayDiv = document.getElementById('show-myhome');
// // Create object using literal notation
// var myhome={
//     name:'myHome',
//     location:'Al Khan Beach',
//     description: '2 BHK',
//     window:'To the sea'
// }

// // display the information on the page


// displayDiv.innerHTML='<p>' + myhome.location + '</p>' + '<p>' + myhome.description + '</p>';

// Create Object using 

function MyHome (name, location,description) {
    this.name = name;
    this.location = location;
    this.description = description;
}

var home = new MyHome('myHome','Al Khan Beach');

displayDiv.innerHTML = '<p>' + home.name + '</p>' + '<p>' + home.location + '</p>';


