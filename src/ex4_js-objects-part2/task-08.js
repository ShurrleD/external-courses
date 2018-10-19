var str = "KJGKJGsldj sdfg";
var f = function (str){
    str = str[0].toLowerCase() + str.substring(1, str.length);
    var word = false;
    for ( let index = 0; index < str.length; index++ ){
        if (word){
            str = str.substring( 0, index - 1 ) + str [index].toUpperCase() + str.substring( index + 1, str.length);
            word = false;
        }
        if ( str [index] === " "){
        word = true;
        }
    }
    return str;
}
console.log(f(str));