var xhr = new XMLHttpRequest();

xhr.onload = function(){
    if(xhr.status === 200){
        responseObject = JSON.parse(xhr.responseText);

        console.log(responseObject);

        var newContent = '';
        for (let i = 0; i < responseObject.events.length; i++) {
            newContent += '<div class="event">';
            newContent += '<img src="' + responseObject.events[i].map + '">';
            newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
            newContent += responseObject.events[i].date + '</p><br>';
            newContent += '<p>' + responseObject.events[i].passenger +'</p>';
            newContent += '</div>';
            
        }

        document.getElementById('content').innerHTML = newContent;
    }
}

xhr.open('GET','data/data.json',true);
xhr.send(null);