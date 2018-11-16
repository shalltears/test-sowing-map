var mainImg = document.getElementsByClassName('main-img')[0];
var timer = setInterval(function () {
    move();
}, 3000);
function move() {
    var mainIMgLeft = parseInt(mainImg.style.left);
    if (mainIMgLeft == -2000) {
        back();
    }else {
        mainImg.style.left = mainIMgLeft - 500 + 'px';
    }
}
function back() {
    var mainIMgLeft = parseInt(mainImg.style.left);
    mainImg.style.transitionDuration = '0s';
    mainImg.style.left = '0px';
    mainIMgLeft = 0;
    setTimeout(function(){
        mainImg.style.transitionDuration = '1s';
        mainImg.style.left = mainIMgLeft - 500 + 'px';
    },1)
}

var btn1 = document.getElementsByClassName('btn-1')[0];
var btn2 = document.getElementsByClassName('btn-2')[0];
btn1.onclick = function () {
    move();
}
btn2.onclick = function () {
    move();
}