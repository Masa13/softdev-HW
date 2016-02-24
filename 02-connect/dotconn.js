var c = document.getElementById("playground");
var ctx = c.getContext("2d");
ctx.strokeStyle = "#FF0000";
ctx.fillStyle = "#FF0000";

var x = 0;
var y = 0;
var r = 8;
var rect = c.getBoundingClientRect();
ctx.strokeRect(0, 0, c.width, c.height);

var connect = function connect(e){
    ctx.beginPath();
    ctx.arc(e.pageX - rect.left, e.pageY - rect.top, r, 0, 2*Math.PI);
    ctx.fill();
    if(x != 0){
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(e.pageX - rect.left, e.pageY - rect.top);
	ctx.stroke();
    }
    x = e.pageX - rect.left;
    y = e.pageY - rect.top;
};

var clear = function clear(e){
    e.preventDefault();
    x = 0;
    y = 0;
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.strokeRect(0, 0, c.width, c.height);
};

document.getElementById("playground").addEventListener("click", connect);
document.getElementById("clear").addEventListener("click", clear);
