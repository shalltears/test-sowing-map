var obj = {
    sleepTime: 2000,//轮播延时
    cont: 1,//第几张
    step: -500,//步距
    state: true,//左为false，右为true
    origin: document.getElementsByClassName('main-img')[0],//拿到全部图片的父级
    btnLeft: document.getElementsByClassName('btn')[0],
    btnRight: document.getElementsByClassName('btn')[1],
    mainLi: document.getElementsByTagName('li'),
    init: function () {//主函数
        this.bottomStateChange(this.cont);
        this.timer();
        this.click();
    },
    move: function (origin) {//移动
        this.state == true ? this.cont++ : this.cont--;
        clearInterval(timer1);
        origin.style.transform = 'translate3d(' + this.cont * this.step + 'px,0px,0px)';
        origin.style.transitionDuration = '0.3s';
        this.sleepTime = 2000;
        this.timer();
        this.cont > 4 && this.state == true ? this.change(origin, 0) : 0;
        this.cont < 0 && this.state == false ? this.change(origin, 4) : 0;
        this.bottomStateChange(this.cont);
    },
    change: function (origin, cont) {//特殊处理
        clearInterval(timer1);
        this.cont = cont;
        origin.style.transitionDuration = '0s';
        origin.style.transform = 'translate3d(' + this.cont * this.step + 'px,0px,0px)';
        this.sleepTime = 50;
        this.timer();
    },
    timer: function () {//计时器
        timer1 = setInterval(function () {
            obj.move(obj.origin);
            obj.state = true;
        }, obj.sleepTime)
    },
    click: function () {
        obj.btnLeft.onclick = function () {//向左
            obj.state = false;
            obj.move(obj.origin)
        };
        obj.btnRight.onclick = function () {//向右
            obj.state = true;
            obj.move(obj.origin)
        };
    },
    bottomStateChange: function (cont) {//下面的点点
        for (var i = 0; i < 4; i++) {
            obj.mainLi[i].className = 'main-li';
        }
        cont > 0 ? obj.mainLi[cont - 1].className = 'main-li-2' : obj.mainLi[3].className = 'main-li-2';
    }
}
obj.init();