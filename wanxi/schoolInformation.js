var jianjie=document.querySelector('.jianjie');
var zhangcheng=document.querySelector('.zhangcheng');

var right=document.querySelector('.right');
var right1=document.querySelector('.right1');

jianjie.addEventListener('click',function()
	{
		right.style.display='block';
		right1.style.display='none';
	});
zhangcheng.addEventListener('click',function()
	{
		right.style.display='none';
		right1.style.display='block';
	});