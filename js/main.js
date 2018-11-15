var mainImg = document.getElementsByClassName('main-img')[0];

var timer = setInterval(function(){
    move();
},2000)
var timer1 = setInterval(function(){
    move1();
},10)

function move(){
    var mainIMgLeft = parseInt(mainImg.style.left);
    mainImg.style.left = mainIMgLeft - 500 + 'px';
}
function move1(){
    var mainIMgLeft = parseInt(mainImg.style.left);
    if(mainIMgLeft == -2500){
        mainImg.style.transitionDuration = '0s';
        mainImg.style.left = '0px';
    }
    if(mainIMgLeft == 0){
        mainImg.style.transitionDuration = '1s';
        mainImg.style.left = '-500px';
    }
}