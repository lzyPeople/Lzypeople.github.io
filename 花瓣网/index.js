window.addEventListener('load',function(){
	//广告栏部分切换开始
	(function(){
		var advertisement=document.querySelector('.advertisement-action');
		var ul=advertisement.children[0];
		var lis=ul.children;
		var index=0;
		setInterval(function(){
			for(var i=0;i<lis.length;i++){
				myTool.buffer(lis[i],{"opacity":0});				
			}
			myTool.buffer(lis[index],{"opacity":1});
			index++;
			if(index===7){
				index=0;
			}
		},3000);
	})();

	//采集，推荐画板，推荐用户切换操作开始
	(function(){
		var mainUl=document.querySelector('.main-ul');
		var mainContent=document.querySelector('.main-content');
		var last=0;
		for(var i=0;i<mainUl.children.length;i++){
			(function(i){
				mainUl.children[i].onclick=function(){
					mainUl.children[last].className='';
					mainContent.children[last].style.display='none';
					last=i;
					mainUl.children[last].className='main-li-current';
					mainContent.children[last].style.display='block';
				}

			})(i);
		}
	})();
	//操作画布跟新交替
	(function(){
		waterful('.main-one-waterfull');		
		var timeout=null;
		window.addEventListener('scroll',function(){
			clearTimeout(timeout);
			timeout=setTimeout(function(){
				if(scrollTrue()){
					var array=[
						{"src":"15.jpg","p":"若只是喜欢 何必夸张成爱。——林夕"},
						{"src":"12.jpg","p":"若只是喜欢 何必夸张成爱。——林夕"},
						{"src":"25.jpg","p":"若只是喜欢 何必夸张成爱。——林夕"},
						{"src":"35.jpg","p":"若只是喜欢 何必夸张成爱。——林夕"},
						{"src":"45.jpg","p":"若只是喜欢 何必夸张成爱。——林夕"},
						{"src":"55.jpg","p":"若只是喜欢 何必夸张成爱。——林夕"},
						{"src":"46.jpg","p":"若只是喜欢 何必夸张成爱。——林夕"},
						{"src":"45.jpg","p":"若只是喜欢 何必夸张成爱。——林夕"},
						{"src":"11.jpg","p":"若只是喜欢 何必夸张成爱。——林夕"},
						{"src":"56.jpg","p":"若只是喜欢 何必夸张成爱。——林夕"},
						{"src":"54.jpg","p":"若只是喜欢 何必夸张成爱。——林夕"},
					];
					for(var a=0;a<array.length;a++){
						var div=document.createElement('div');
						div.className='waterful-big-box';
						div.style.float='left';
						div.style.paddingRight='1rem';
						div.style.paddingBottom='1.2rem';
						div.style.width='25rem';
						document.querySelector('.main-one-waterfull').appendChild(div);
						
						var divOne=document.createElement('div');
						divOne.className='waterfull-small-box';
						div.appendChild(divOne);

						var img=document.createElement('img');
						img.src=`images/${array[a].src}`;
						divOne.appendChild(img);

						var p=document.createElement('p');
						p.innerHTML=`${array[a].p}`;
						divOne.appendChild(p);

						var divOneOne=document.createElement('div');
						divOneOne.className='small-box-collect';
						divOneOne.innerHTML='采集';
						divOne.appendChild(divOneOne);

						var divOneTwo=document.createElement('div');
						divOneTwo.className='small-box-box';
						divOne.appendChild(divOneTwo);

						var span=document.createElement('span');
						span.className='small-box-like';
						divOneTwo.appendChild(span);
					}
					waterful('.main-one-waterfull');
				}
			},1000);
		});

		function waterful(parent){
					var waterful=document.querySelector(parent);
					var boxs=waterful.children;
					var boxWidth=boxs[0].offsetWidth;
					var minIndex=0,arr=[],minHeight=0,boxHeight=0;
					for(var i=0;i<boxs.length;i++){
						boxHeight=boxs[i].offsetHeight;
						if(i<5){
							arr.push(boxHeight);
						} else {
							minHeight=_.min(arr);
							minIndex=minIndexSearch(arr,minHeight);

							boxs[i].style.position='absolute';
							boxs[i].style.top=minHeight+'px';
							boxs[i].style.left=minIndex*boxWidth+'px';

							arr[minIndex]+=boxHeight;
						}
					}
		}
		function scrollTrue(){
			var waterful=document.querySelector('.main-one-waterfull');
			var boxs=waterful.children;
			var scroll=myTool.scroll().top;

			var height=document.documentElement.clientHeight;
			var lastHeight=boxs[boxs.length-1].offsetHeight/2+boxs[boxs.length-1].offsetTop;
			return scroll+height>=lastHeight;
		}

		function minIndexSearch(arr,value){
			for(var i=0;i<arr.length;i++){
				if(arr[i]===value){
					return i;
				}
			}
		}
	})();

    //吸顶操作
    (function(){
    	window.addEventListener('scroll',function(){
    		var scrollHeight=myTool.scroll().top/10;
    		var suction=myTool.$('suction');
    		if(scrollHeight>=17){
    			suction.style.display='block';
    		} else{
    			suction.style.display='none';
    		}
    });

    //回顶操作
    (function(){
    	var side=document.querySelector('#side');
    	window.addEventListener('scroll',function(){
    		if(myTool.scroll().top>0){
    			side.children[0].style.display='block';
    			side.children[1].style.display='block';
    		} else{
    			side.children[0].style.display='none';
    			side.children[1].style.display='none';
    		}
    	});
    	var end=0,sideInterval=null;
    	var begin=myTool.scroll().top;
    	side.children[0].addEventListener('click',function(){
    		clearInterval(sideInterval);
    		SideInterval=setInterval(function(){
    			begin+=(end-begin)*0.2;
    			window.scrollTo(0, begin);
    			if(Math.round(begin)===end){
    				clearInterval(SideInterval);
    			}
    		},30);


    	});
    })();





    })();













});

