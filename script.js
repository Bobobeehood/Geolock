let arena = document.getElementById('welcome');
let actionArea = document.getElementById('action');
let hiddenArea = document.getElementById('hidden');
let submitButton = document.getElementById('btn');
let appStarted = false;



arena.style.visibility='visible';
actionArea.style.visibility ='visible';   
hiddenArea.style.display = "none";




submitButton.addEventListener('click', function() {
    if(document.getElementById('r1').checked) {
        hiddenArea.style.display = "block";
        arena.style.display='none';
        actionArea.style.display ='none';
        
    }
    else{
        arena.style.visibility='visible';
        actionArea.style.visibility ='visible';   
        hiddenArea.style.display = "none";
    }
});