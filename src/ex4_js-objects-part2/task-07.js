var str = "Hello world!",
    str1 = "Hi world!",
    number = 10;
var f = function(str1){
    var number1 = number - 1;
    if (str.length > number){
        console.log(str1.substr(0,number1) + '...');       
    }
    else{
        console.log(str1);
    }
}        
f(str);                                                            