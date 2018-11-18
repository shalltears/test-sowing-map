var obj = {
    sleepTime: 2000,//轮播延时
    cont: 0,//第几张
    origin: document.getElementsByClassName('main-img')[0],//拿到全部图片的父级
    btnLeft: document.getElementsByClassName('btn')[0],
    btnRight: document.getElementsByClassName('btn')[1],
    init: function () {
        this.timer();
    },
    move: function (origin) {
        this.cont++;
        clearInterval(timer1);
        origin.style.transform = 'translate3d(' + this.cont * (-500) + 'px,0px,0px)';
        origin.style.transitionDuration = '0.3s';
        this.sleepTime = 2000;
        this.timer();
        if (this.cont > 4) {
            clearInterval(timer1);
            this.cont = 0;
            origin.style.transitionDuration = '0s';
            origin.style.transform = 'translate3d(' + this.cont * (-500) + 'px,0px,0px)';
            this.sleepTime = 50;
            this.timer();
        }
    },
    timer: function () {
        timer1 = setInterval(function () {
            obj.move(obj.origin);
        }, obj.sleepTime)
    }
}
obj.init();
obj.btnLeft.onclick = function(){
    obj.move(obj.origin);
}
obj.btnRight.onclick = function(){
    obj.move(obj.origin);
}