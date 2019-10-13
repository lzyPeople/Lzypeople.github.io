function Ball(options){
	this._init(options)
}

Ball.prototype={
	_init:function(options){
		//球的基本属性
		this.r=50;
		this.left=options.left;
		this.top=options.top;
		this.bgColor=options.bgColor||'red';
		this.parentId=options.parentId;
		//球变化的属性
		this.dL=_.random(-5,5);
		this.dT=_.random(-5,5);
		this.dR=_.random(1,3);
	},
	//构建小球的方法
	render:function(){
		var parentNode=document.getElementById(this.parentId);
		var child=document.createElement('div');
		parentNode.appendChild(child);

		child.style.position='absolute';
		child.style.left=this.left+'px';
		child.style.top=this.top+'px';
		child.style.width=this.r+'px';
		child.style.height=this.r+'px';
		child.style.backgroundColor=this.bgColor;
		child.style.borderRadius='50%';
	},
	//跟新小球
	update:function(){
		this.left+=this.dL;
		this.top+=this.dT;
		this.r-=this.dR;

		if(this.r<=0){
			this.r=0;
			arr=_.without(arr,this);
		}
	}
};