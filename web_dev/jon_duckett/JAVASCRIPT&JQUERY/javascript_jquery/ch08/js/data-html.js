var xhr = new XMLHttpRequest();
var counter = 10;

setInterval(
  (xhr.onload = function () {
    if (xhr.status === 200) {
      document.getElementById("content").innerHTML = xhr.responseText;
    }
    if (counter === 0) {
      counter = 10;
    } else {
      document.getElementById("counter").textContent = counter--;
    }
  }),
  1000
);

xhr.open("GET", "data/data.html", true);
xhr.open("GET", "data/data.html", true);
xhr.send(null);
