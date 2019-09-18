window.onload=function(){

let date=new Date();
let nowTime=date.getTime();
let end=new Date("2019-08-02 23:00:00");
let endTime=end.getTime();
let overTime=endTime-nowTime;

let hour0=document.querySelector('.hour0');
let hour1=document.querySelector('.hour1');
let minites0=document.querySelector('.minites0');
let minites1=document.querySelector('.minites1');
let seconds0=document.querySelector('.seconds0');
let seconds1=document.querySelector('.seconds1');
let millisecond0=document.querySelector('.millisecond0');
let millisecond1=document.querySelector('.millisecond1');

function display(){
        let hour=Math.floor(overTime/1000/60/60);
      	let minites=Math.floor(overTime/1000/60%60);
      	let seconds=Math.floor(overTime/1000%60);
        let millisecond=Math.floor(overTime%1000);

    if(hour>=10){
    	hour0.textContent=hour.toString()[0];
    	hour1.textContent=hour.toString()[1];
    } else{
    	hour0.textContent=0;
        hour1.textContent=hour.toString()[0];
    }

    if(minites>=10){
    	minites0.textContent=minites.toString()[0];
    	minites1.textContent=minites.toString()[1];
    } else{
    	minites0.textContent=0;
        minites1.textContent=minites.toString()[0];
    }

    if(seconds>=10){
    	seconds0.textContent=seconds.toString()[0];
    	seconds1.textContent=seconds.toString()[1];
    } else{
    	seconds0.textContent=0;
        seconds1.textContent=seconds.toString()[0];
    }


    if(millisecond>=100){
    	millisecond0.textContent=millisecond.toString()[0];
    	millisecond1.textContent=millisecond.toString()[1];
    } else {
    	millisecond0.textContent=0;
        millisecond1.textContent=millisecond.toString()[0];
    }


        if(overTime>0){
        	overTime-=10;
        }  else{
          overTime=0;
          clearInterval(display);
        }

      }
      setInterval(display,10);





let endx=new Date("2019-08-03 23:00:00");
let endTimex=endx.getTime();
let overTimex=endTimex-nowTime;

let hour0x=document.querySelector('.hour0x');
let hour1x=document.querySelector('.hour1x');
let minites0x=document.querySelector('.minites0x');
let minites1x=document.querySelector('.minites1x');
let seconds0x=document.querySelector('.seconds0x');
let seconds1x=document.querySelector('.seconds1x');
let millisecond0x=document.querySelector('.millisecond0x');
let millisecond1x=document.querySelector('.millisecond1x');

function displayx(){
        let hourx=Math.floor(overTimex/1000/60/60);
        let minitesx=Math.floor(overTimex/1000/60%60);
        let secondsx=Math.floor(overTimex/1000%60);
        let millisecondx=Math.floor(overTimex%1000);

    if(hourx>=10){
        hour0x.textContent=hourx.toString()[0];
        hour1x.textContent=hourx.toString()[1];
    } else{
        hour0x.textContent=0;
        hour1x.textContent=hourx.toString()[0];
    }

    if(minitesx>=10){
        minites0x.textContent=minitesx.toString()[0];
        minites1x.textContent=minitesx.toString()[1];
    } else{
        minites0x.textContent=0;
        minites1x.textContent=minitesx.toString()[0];
    }

    if(secondsx>=10){
        seconds0x.textContent=secondsx.toString()[0];
        seconds1x.textContent=secondsx.toString()[1];
    } else{
        seconds0x.textContent=0;
        seconds1x.textContent=secondsx.toString()[0];
    }


    if(millisecondx>=100){
        millisecond0x.textContent=millisecondx.toString()[0];
        millisecond1x.textContent=millisecondx.toString()[1];
    } else {
        millisecond0x.textContent=0;
        millisecond1x.textContent=millisecondx.toString()[0];
    }


        if(overTimex>0){
            overTimex-=10;
        }  else{
          overTimex=0;
          clearInterval(displayx);
        }

      }
      setInterval(displayx,10);




};