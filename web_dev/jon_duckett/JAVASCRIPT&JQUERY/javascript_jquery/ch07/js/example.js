$(function () {
  // Setup
  var $list, $newItemForm, $newItemButton;
  var item = "";
  $list = $("ul");
  $newItemForm = $("#newItemForm");
  $newItemButton = $("#newItemButton");

  $("li")
    .hide()
    .each(function (index) {
      $(this)
        .delay(450 * index)
        .fadeIn(1600);
    });

  // ITEM COUNTER
  function updateCount() {
    var items = $("li[class!=complete]").length;
    $("#counter").text(items);
  }

  updateCount();

  // SETUP FORM FOR NEW ITEMS
  $newItemButton.show();
  $newItemForm.hide();
  $("#showForm").on("click", function () {
    $newItemButton.hide();
    $newItemForm.show();
  });

  // ADDING A NEW ITEM
  $newItemForm.on("submit", function (e) {
    e.preventDefault();
    var text = $("input:text").val();

    if (text != "done" && text != "Done") {
      $list.append("<li>" + text + "</li>");
      $("input:text").val("");
    } else {
      $("input:text").val("");
      $newItemButton.show();
      $newItemForm.hide();
    }

    updateCount();
  });

  // CLICK HANDLING - USES DELEGATION ON <ul> ELEMENT

  $list.on("click", "li", function () {
    var $this = $(this);
    var complete = $this.hasClass("complete");

    if (complete == true) {
      $this.animate(
        {
          opacity: 0.0,
          paddingLeft: "+=180",
        },
        500,
        "swing",
        function () {
          $this.remove();
        }
      );
    } else {
      item = $this.text();
      $this.remove();
      $list
        .append('<li class="complete">' + item + "</li>")
        .hide()
        .fadeIn(300);
      updateCount();
    }
  });
});
