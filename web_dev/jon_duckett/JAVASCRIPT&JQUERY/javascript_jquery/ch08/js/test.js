// List the games names and their genre and release date

var xhr = new XMLHttpRequest();

// Check if there is a repsonse from the server
xhr.onload = function () {
  if (xhr.status === 200) {
    var listGames = "";
    responseObject = JSON.parse(xhr.responseText);

    for (let i = 0; i < responseObject.games.length; i++) {
      listGames += '<div class="games-list">';
      listGames += "<h1>" + responseObject.games[i].name + "</h1>";
      listGames += "<p> Genre: " + responseObject.games[i].genre + "</p><br>";
      listGames += "<p> Release Date: " + responseObject.games[i].release_date+ "</p>";
    }

    document.getElementById("content").innerHTML = listGames;
  }
};

xhr.open("GET", "data/test.json", true);
xhr.send(null);
