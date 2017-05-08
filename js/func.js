

//顶部小块的文字切换方法
function sliToggle(){
    if($('#top-advert').css('display') == 'block'){
        $('#advert-close-span span').html('超游世界');
        $('#advert-close-span i').removeClass('close-before').addClass('close-after');

    }else{
        $('#advert-close-span span').html('关闭');
        $('#advert-close-span i').removeClass('close-after').addClass('close-before');
    }
}

//选项卡滑动效果方法
function move(obj,target){
    clearTimeout(obj.timer);
    var speed;
    obj.offsetLeft > target ? speed = 10: speed = -10;
    obj.timer = setInterval(function(){
        var res = obj.style.left;
        res = parseInt(obj.style.left) - speed + 'px';
        obj.style.left = res;
        if(speed == 10) {
            if (parseInt(res) <= target) {
                res = target + 'px';
                obj.style.left = res;
                clearInterval(obj.timer);
            }
        }else{
            if (parseInt(res) >= target) {
                res = target + 'px';
                obj.style.left = res;
                clearInterval(obj.timer);
            }
        }
    },20);

}

//上下滑动自创方法
function scrollMove(target){
    if(flagTag){
        flagTag=false;
        var speed = 15;
        var offTop;
        var sTimers;
        $(window).scrollTop() < target ? speed = 15 : speed = -15;
        clearInterval(sTimers);
        sTimers = setInterval(function () {
            offTop = $(window).scrollTop() + speed;
            $(window).scrollTop(offTop);
            if (speed == 15) {
                if (offTop > target) {
                    $(window).scrollTop(target);
                    clearInterval(sTimers);
                    flagTag=true;
                }
            } else if (speed == -15) {
                if (offTop < target) {
                    $(window).scrollTop(target);
                    clearInterval(sTimers);
                    flagTag=true;
                }
            }

        }, 3);
    }
}















