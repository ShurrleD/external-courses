var str = "sldj sdfg";
var f = function (str){
    var word = true;
    for ( let index = 0; index < str.length; index++ ){
        if (word){
            str = str.substring( 0, index ) + str [index].toUpperCase() + str.substring( index + 1, str.length);
            word = false;
        }
        if ( str [index] === " "){
        word = true;
        }
    }
    return str;
}
console.log(f(str));