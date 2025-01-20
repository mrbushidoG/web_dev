$(document).ready(function () {
  var $showDate = $("#show-date");
  var date = new Date();
  var $remarks = $('.remarks');
  var $remarks_option = $('td.remarks-option');

  $showDate.text(date.toDateString());
  console.log(date);

  // Delivery Is Done
  function deliveryIsDone(e) {
    e.preventDefault();
    var $target = $(e.target);
    var $elParent = $target.parent();
    var displayStatus;

    if ($target.val() === "yes") {
      displayStatus = $("<p>").text("Delivery Done");
      $elParent.append(displayStatus);
      $elParent.css("background-color", "green");
      displayStatus.css("color", "white");
    }

    if ($target.val() === "no") {
      // If delivery did not happen (For any reason)
      var reasonForNonDelivery = prompt("Enter the reason for not delivering");
      displayStatus = $("<p>").text(reasonForNonDelivery);
      $elParent.append(displayStatus);
      $elParent.css("background-color", "#d00000");
      displayStatus.css({
        color: "#f8f9fa",
        "font-weight": "990",
      });
    }

    // Hide the button
    $target.hide();
    $elParent.find("button").hide();
  }

  $(".delivery-status").on("click", deliveryIsDone);

  $remarks.on("click", function(){
    var $remarks_input = prompt("Enter the remarks");
    var $displayText = $('<p>').text($remarks_input);
    $(this).parent().append($displayText);
    $(this).hide();
    
    
  });
  


});
