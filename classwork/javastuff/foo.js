var base = "this is in f1 in the global namespace";
var x = "x in the global namespace"
var f2 = function(){
    console.log("this is f2");
};

var f1 = {
    x : "something in the f1 namespace",
    f2 : f2,
    f : function(){
	console.log('this is in f in the f1 namespace');
	console.log('x is ' + x);
	console.log('f1.x is ' + f1.x);
	console.log('better way: ' + this.x);
    }
};

var inc = function(){
    x = 0;
    return function(){
	return x++;
    };
};

var makeAdder = function(n){
    return function(x){
        return x+n;
    };
};
//var add3 = makeAdder(3); > add3(7) --> 10
//var add7 = makeAdder(7); > add7(5) --> 12

var makeCounter = function(){
    var i = 0;	

    return {
    	x: "this is a str"
    }	
};

