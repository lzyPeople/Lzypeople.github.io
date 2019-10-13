(function(w) {
    w.myTool = {
        //通过id获得元素节点
        $: function(id) {
            return typeof id === 'string' ? document.getElementById(id) : null;
        },
        //获得css的样式
        getStyleAttr: function(obj, attr) {
            if (obj.currentStyle) { //IE和opera
                return obj.currentStyle[attr];
            } else {
                return window.getComputedStyle(obj, null)[attr];
            }
        },
        //改变css的样式
        changeCssStyle: function(eleObj, attr, value) {
            eleObj.style[attr] = value;
        },
        //缓动函数
        buffer: function(eleObj, json, fn) {
            // 1.先清后设
            clearInterval(eleObj.bufferInterval);
            // 1.2定义变量
            var step = 0,
                begin = 0,
                flag = false,target = 0;
            // 1.3设置定时器
            eleObj.bufferInterval = setInterval(function() {
                //标志（标签的所有属性有没有执行完动画）
                flag = true;
                for (var key in json) {
                    //获得要做动画属性的初始值
                    if (key === 'opacity') {
                        begin = parseInt(myTool.getStyleAttr(eleObj, key) * 100) || 100;
                        target = parseInt(json[key] * 100);
                    } else {
                        begin = parseInt(myTool.getStyleAttr(eleObj, key)) || 0;
                        target = parseInt(json[key]);
                    }

                    //求出步长
                    step = (target - begin) * 0.2;
                    step = (target > begin) ? Math.ceil(step) : Math.floor(step);

                    //动起来
                    if (key === 'opacity') {
                        eleObj.style.opacity = (begin + step) / 100;
                    } else {
                        eleObj.style[key]= begin + step + 'px';
                    }

                    //判断
                    if (begin !== target) {
                        flag = false;
                    }

                }

                //清除定时器
                if (flag) {
                    clearInterval(eleObj.bufferInterval);
                    //开启另一组动画
                    fn && fn();
                }
            }, 100);
        },
        //使用scroll
        scroll:function(){
            if(window.pageXOffset !==null){
                return{
                    top:window.pageYOffset,
                    left:window.pageXOffset
                }
            } else if (document.compatMode==='CSS1Compat'){
                return{
                    top:document.documentElement.scrollTop,
                    left:document.documentElement.scrollLeft
                }
            }
            return{
                    top:document.body.scrollTop,
                    left:document.body.scrollLeft
                }
        },
        //阻止冒泡
        stopPragation:function(){
            if(event&&event.stopPragation){
                 return event.stopPragation();
            }else{
                return window.event.cancelBubble=true;
            }
        }




    };
})(window)