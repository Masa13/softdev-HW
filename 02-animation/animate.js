var c = document.getElementById("playground");
var ctx = c.getContext("2d");

ctx.strokeStyle="#ADD8E6";
ctx.fillStyle = "#ADD8E6";
ctx.strokeRect(0,0,c.width,c.height);

var r = 8;
var growing = true;
var requestID;
var logo = new Image();
logo.src = "logo_dvd.jpg";

var draw = function(){
    ctx.clearRect(0,0,c.width,c.height);
    ctx.strokeRect(0,0,c.width,c.height);
    ctx.beginPath();
    ctx.arc(c.width/2, c.height/2, r, 0, 2*Math.PI);
    ctx.fill();

    if (r <= 0){
	growing = true;
    }
    else if (r > c.width || r > c.height){
	growing = false;
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
    
    

    requestID = window.requestAnimationFrame(dvd);
};   

document.getElementById("start").addEventListener("click",draw);
document.getElementById("stop").addEventListener("click",stop);
document.getElementById("dvd").addEventListener("click",dvd);