window.addEventListener('load', function() {
    // 1.实现瀑布流
    waterFul('main', 'box');
    //2.实现数据加载
    window.addEventListener('scroll',function(){
    	if(scrollTrue()){
			var dataArr=[
				{"src":"12.jpg"},
				{"src":"31.jpg"},
				{"src":"14.jpg"},
				{"src":"17.jpg"},
				{"src":"1.jpg"},
				{"src":"21.jpg"},
				{"src":"26.jpg"},
				{"src":"5.jpg"},
			];
			for(var i=0;i<dataArr.length;i++){
				var divBox=document.createElement('div');
				divBox.setAttribute('class','box');
				document.getElementById('main').appendChild(divBox);

				var divPic=document.createElement('div');
				divPic.setAttribute('class','pic');
				divBox.appendChild(divPic);

				var divImage=document.createElement('img');
				divImage.setAttribute('src',`pic/${dataArr[i].src}`);
				divPic.appendChild(divImage);
			}
			waterFul('main', 'box');

    	}
    });
});
/**
 * 实现瀑布流布局	
 */
function waterFul(parent, children) {
    // 1.设置box居中
    //1.1获得标签
    var boxs = document.getElementById(parent).getElementsByClassName(children);

    //1.2获得box的一个子元素宽度
    var boxWidth = boxs[0].offsetWidth;
    //1.3获得可视页面的宽度
    var wid = document.documentElement.clientWidth || document.body.clientWidth;
    //1.4main获得相应宽度
    var boxNumber = parseInt(wid / boxWidth);
    document.getElementById(parent).style.width = boxNumber * boxWidth + 'px';
    document.getElementById(parent).style.margin = '0 auto';
    //2.每个盒子的跟随
    var arr = [],
        minIndex = 0,
        minHeight = 0,
        boxHeight = 0;
    // 2.1遍历每个数组
    for (var i = 0; i < boxs.length; i++) {
        //2.2获得每个数组的高度
        boxHeight = boxs[i].offsetHeight;
        if (i < boxNumber) { //第一行的高度
            arr.push(boxHeight);
        } else { //剩下的盒子
            //最矮盒子的高度
            minHeight = _.min(arr);
            //最矮盒子的索引
            minIndex = minI(arr, minHeight);
            //设置剩余盒子的绝对定位
            boxs[i].style.position = 'absolute';
            boxs[i].style.left = boxWidth * minIndex + 'px';
            boxs[i].style.top = minHeight + 'px';
            //跟新数组
            arr[minIndex] += boxHeight;

        }
    }
}

function minI(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
}

//判定是否到加载新的盒子
function scrollTrue(){
	var boxs = document.getElementById('main').getElementsByClassName('box');
	var scroll=document.documentElement.scrollTop;
	var clientHeight=document.documentElement.clientHeight;
	var lastImageHeight=boxs[boxs.length-1].offsetHeight*0.5+boxs[boxs.length-1].offsetTop;
	// console.log(lastImageHeight);
	// console.log(clientHeight);
	// console.log(scroll);
	return lastImageHeight<=clientHeight+scroll;
}