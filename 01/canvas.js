var c = document.getElementById("ftb2maga");
var con = c.getContext("2d");
con.fillStyle = "#FF0000";
//con.fillRect(0,0,100,100);
con.strokeStyle = "#ADD8E6";
con.strokeRect(100, 100,400,400);

//2-10
con.beginPath();
con.moveTo(100, 400);
con.lineTo(100,100);
con.stroke();
con.lineTo(350, 325);
con.lineTo(100,400);

con.fill();
con.closepath();

//con.arc(0,50,100,150,200)
//con.font="20px arial"
//con.fillText(txt,a,b)
