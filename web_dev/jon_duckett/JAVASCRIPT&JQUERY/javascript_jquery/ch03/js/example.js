/* the script is placed inside an immdiately invoked funciton expression
    which helps protect the scope of variables */


(function(){
    // PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS

    // Create a hotel object using object literal syntax
    var hotel = {
        name: 'Park',
        roomRate: 240, // Amount in dollars
        discount: 15,  // Percentage discount
        offerPrice: function(){
            var offerRate = this.roomRate *((100 - this.discount)/ 100);
            return offerRate;
        }
    }

    // Write out the htoel name,standard rate , and the special rate
    var hotelName, roomRate, specialRate;

    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name;
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
    specialRate.textContent = '$' + hotel.offerPrice();

    // PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETIALS FOR THE OFFER
    var expiryMsg; // Message displayed to users
    var today;  // Today's date
    var elEnds; // The element that shows the message about the offer ending

    function offerExpires(today) {
        // Declare variables within the function for local scope
        var weekFromToday, day, date, month , year, dayNames, monthName;
        // Add 7 days time (added in milliseconds)
        weekFromToday = new Date(today.getTime() + 7 *24 *60 *60 *1000);
        // Create arrays to hold the names of days / months
        dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        monthName = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        // Collect the parts of the date to show on the page
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthName[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();
        // Create the message
        expiryMsg = 'Offer expires next ';
        expiryMsg += day + ' <br/> (' + date + ' ' + month + ' ' + year + ')';
        return expiryMsg;
    }

    today = new Date();
    elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);


}());