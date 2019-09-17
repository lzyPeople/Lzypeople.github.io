window.onload=function(){a();b();c()};

var rightAn=document.querySelector('.rightan');
var leftAn=document.querySelector('.leftan');
var picture=document.querySelector('.picture');

var all=3;
var action=1;
function a()
{
	rightAn.addEventListener('click',function()
		{
			if(action<all)
			{
				action++;
			}
			else if(action===all)
			{
				action=1;
			}
			setPicture();
		},false);

	leftAn.addEventListener('click',function()
		{
			if(action===1)
			{
				action=3;
			}
			else if (action>0)
			{
				action--;
			}
			setPicture();
		},false);
	setTimeout(autoPicture,2000);
}

function setPicture()
{
	picture.setAttribute('src',"images/"+action+".png");
}

function autoPicture()
{
	if(action<all)
			{
				action++;
			}
			else if(action===all)
			{
				action=1;
			}
			setPicture();
			setTimeout(autoPicture,2000);
}
/*这上面的是图像的切换部分*/
var search1=document.querySelector('.search1');
var sousuo=document.querySelector('.sousuo');
function b()
{	
	sousuo.addEventListener('click',function()
	{
		alert('What do you mean?'+search1.value);

	});
}
/*以上是第二部分的搜索模块*/

var arr=document.querySelectorAll('.photos');
function c()
{	
	for(var i=0;i<arr.length;i++)
	{
		arr[i].style.left=i*200+'px';
	}
}

function leftMove()
{
	for(var i=0;i<arr.length;i++)
	{
		var left=parseFloat(arr[i].style.left);
		left-=5;
		if(left<=-200)
		{
			left=(arr.length-1)*200;
		}
		arr[i].style.left=left+'px';
	}
}
var move=setInterval(leftMove,50);
function stop()
{
	clearInterval(move);
}
function start()
{
	clearInterval(move);
	move=setInterval(leftMove,50);
}

onblur=function()
{
    stop();
};
onfocus=function()
{
	start();
}











