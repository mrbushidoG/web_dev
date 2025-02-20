var xhr = new XMLHttpRequest();
xhr.onload = function () {
  if (xhr.status === 200) {
    var response = xhr.responseXML;
    var events = response.getElementsByTagName("event");

    console.log(events.length);
    for (let i = 0; i < events.length; i++) {
      var container, image, location, city, newline, show_numbers, max_num_passengers;
      container = document.createElement("div");
      container.className = "event";

      image = document.createElement("img");
      image.setAttribute("src", getNodeValue(events[i], "map"));
      image.appendChild(
        document.createTextNode(getNodeValue(events[i], "map"))
      );
      container.appendChild(image);

      location = document.createElement("p");
      city = document.createElement("b");
      newline = document.createElement("br");
      city.appendChild(
        document.createTextNode(getNodeValue(events[i], "location"))
      );
      location.appendChild(newline);
      location.insertBefore(city, newline);
      location.appendChild(
        document.createTextNode(getNodeValue(events[i], "date"))
      );
      container.appendChild(location);

      // show the maximum number of passengers allowed
      show_numbers = document.createElement("p");
      show_numbers.appendChild(document.createTextNode(getNodeValue(events[i],'passenger')));
      container.appendChild(show_numbers);

      document.getElementById("content").appendChild(container);
    }

    function getNodeValue(obj, tag) {
      var element = obj.getElementsByTagName(tag)[0];
      return element && element.firstChild ? element.firstChild.nodeValue : "";
    }
  }

  console.log("Just testing\n");
  console.log(events[1]);
};

xhr.open("GET", "data/data.xml", true);
xhr.send(null);
