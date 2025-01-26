var xhr = new XMLHttpRequest();
var show_content = document.getElementById('content');


xhr.onload = function(){
    if(xhr.status === 200){
        show_content.innerHTML = xhr.responseText;
    }
}

xhr.open('GET','data/show_image.html',);
xhr.send(null);