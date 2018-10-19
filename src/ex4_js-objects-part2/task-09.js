var str = "Hello world!",
    word = "p";
var f = function( str ){
    var result = 0, i = 0;
    for ( i; i < str.length; i++ )
    if ( str[i] == word ) 
    result++;
    return result;
}
f(str);