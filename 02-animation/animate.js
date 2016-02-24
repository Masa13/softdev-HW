var c = document.getElementById("playground");
var ctx = c.getContext("2d");

ctx.strokeStyle="#ADD8E6";
ctx.fillStyle = "#ADD8E6";
ctx.strokeRect(0,0,c.width,c.height);

var r = 8;
var growing = true;
var requestID;

//DVD variables
var x;
var y;
var width;
var height;

var vertical=true;
var horizontal=true;

var logo = new Image();
logo.src = "logo_dvd.jpg";

var draw = function(){
    ctx.clearRect(0,0,c.width,c.height);
    ctx.strokeRect(0,0,c.width,c.height);
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, r, 0, 2*Math.PI);
    ctx.fill();

    if (r <= 0){
	growing = !growing;
    }
    
    else if (r >= c.width || r >= c.height){
	growing = !growing;
    }

    if (growing){
	r++;
    }
    else{
	r--;
    }
    requestID = window.requestAnimationFrame(draw);
};

var stop = function(){
    window.cancelAnimationFrame(requestID);
};

var dvd = function(){
    if(x <= 0 || x >= c.width-width){
	horizontal = !horizontal;
    }
    if (y <= 0 || y >= c.width-height){
	vertical = !vertical;
    }
    if (){
	y+=1;
    }
    y -=1;
    requestID = window.requestAnimationFrame(dvd);
};   

document.getElementById("start").addEventListener("click",draw);
document.getElementById("stop").addEventListener("click",stop);
document.getElementById("dvd").addEventListener("click",dvd);
