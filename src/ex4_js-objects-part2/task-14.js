var min = 10,
    max = 20;
var f = function(min,max){
    console.log(Math.floor (Math.random() * (max - min) + min));
}
f(min,max);