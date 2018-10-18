var obj = {
    a:10,
    b : {a:15, b: 25}
};
var f = function ( obj ){
    var clone = {};
    if (typeof ( obj ) === Object){
        f(obj);
    }
    else{
    for ( var key in obj ){
        clone [key] = obj [key];
    }
    }
    return clone;
}
f(obj);