// alert('working')
function blurInOne(){
// alert('working')
var h = document.getElementById('one')
var title = document.getElementsByClassName('content')


h.style.display = 'hidden';
h.style.opacity = 0.5;
title[0].style.display = 'block';
title[0].style.opacity = 1
}

function blurOutOne(){
    var h = document.getElementById('one')
var title = document.getElementsByClassName('content')
    h.style.display = 'block'; 
    h.style.opacity = 1;
    title[0].style.display = 'none';
}


function blurInTwo(){
    var h = document.getElementById('two')
    var title = document.getElementsByClassName('content')
    console.log(title)
    
    h.style.display = 'hidden';
    h.style.opacity = 0.5;
    title[1].style.display = 'block';
    title[1].style.opacity = 1
}

function blurOutTwo(){
    var h = document.getElementById('two')
    var title = document.getElementsByClassName('content')
    h.style.display = 'block'; 
    h.style.opacity = 1;
    title[1].style.display = 'none';
}

function blurInThree(){
var h = document.getElementById('three');
var title = document.getElementsByClassName('content')
h.style.display = 'hidden';
h.style.opacity = 0.5;
title[2].style.display = 'block';
title[2].style.opacity = 1
}

function blurOutThree(){
    var h = document.getElementById('three')
    var title = document.getElementsByClassName('content')
    h.style.display = 'block'; 
    h.style.opacity = 1;
    title[2].style.display = 'none';
}

function blurInFour(){
    var h = document.getElementById('four');
var title = document.getElementsByClassName('content')
h.style.display = 'hidden';
h.style.opacity = 0.5;
title[3].style.display = 'block';
title[3].style.opacity = 1
}

function blurOutFour(){
    var h = document.getElementById('four')
    var title = document.getElementsByClassName('content')
    h.style.display = 'block'; 
    h.style.opacity = 1;
    title[3].style.display = 'none';
}


function countIncrementor(){
    console.log('working')
    var count = document.getElementById('counter')
    for (let i = 0; i < parseInt(count.value); i++) {
        console.log(i+1)
    }
}