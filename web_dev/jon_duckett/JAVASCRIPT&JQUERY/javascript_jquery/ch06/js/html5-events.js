function setup(){
    var textInput;
    textInput = document.getElementById('message');
    textInput.focus();
}

window.addEventListener('DOMContentLoaded',setup,false);

window.addEventListener('beforeunload',function(event){
    var message = 'You have changes that have not been saved...';
    (event || this.window).returnValue = message;
    return message
});