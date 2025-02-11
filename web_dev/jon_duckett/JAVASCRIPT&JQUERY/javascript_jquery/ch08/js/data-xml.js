var xhr = new XMLHttpRequest();
xhr.onload = function () {
  if (xhr.status === 200) {
    var response = xhr.responseXML;
    var events = response.getElementsByTagName("event");

    for (let i = 0; i < events.length; i++) {
      var container, image, location, city, newline, max_num_passegers;
      container = document.createElement("div");
      container.className = "event";
      
      

      image = document.createElement("img");
      image.setAttribute("src", getNodeValue(events[i], "map"));
      image.appendChild(
        document.createTextNode(getNodeValue(events[i], "map"))
      );
      container.appendChild(image);

      location = document.createElement('p');
      city = document.createElement('b');
      newline = document.createElement('br');
      city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
      location.appendChild(newline);
      location.insertBefore(city,newline);
      location.appendChild(document.createTextNode(getNodeValue(events[i],'date')));
      container.appendChild(location);

      // show the maximum 
      max_num_passegers = document.createElement('p');
      

      
      




      document.getElementById('content').appendChild(container);
    }

    function getNodeValue(obj, tag){
        return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
    }
  }

  console.log(events[0].getElementsByTagName('location'));
};

xhr.open("GET", "data/data.xml", true);
xhr.send(null);
