var noteInput, noteName, textEntered, target;

noteName = document.getElementById('noteName');
noteInput = document.getElementById('noteInput');

function writeLabel(e){
    if (!e){
        e = window.event;
    }
    target = e.target || e.srcElement;
    textEntered = e.target.value;
    noteName.textContent= textEntered;
}

// record / pause function

if (document.addEventListener){
    document.addEventListener('click',function(e){
        recorderControls(e);
    },false);

    // If input event fires on username input call writeLable()
    noteInput.addEventListener('input', writeLabel,false);
} else {
    noteInput.attachEvenlistener('onclick',function(e){
        recorderControls(e);
    });

    // If keyup event fires on username input call writeLabel()
    noteName.attachEvenlistener('onkeyup',writeLabel,false);
}

function recorderControls(e){
    if (!e){
        e = window.event;
    }
    target = e.target || e.srcElement;
    if(e.preventDefault){
        e.preventDefault();
    } else {
        e.returnValue = false;
    }

    switch(target.getAttribute('data-state')){
        case 'record':
            record(target);
            break;
        case 'stop':
            stop(target);
            break;
    }
}

function record(target){
    target.setAttribute('data-state','stop');
    target.textContent = 'stop';
}

function stop(target){
    target.setAttribute('data-state','record');
    target.textContent = 'record';
}


