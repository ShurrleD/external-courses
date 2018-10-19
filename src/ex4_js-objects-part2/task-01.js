var objproto = {},
    name;           
var obj = Object.create(objproto);
var f = function ( obj, name ){
    return obj.__proto__[name];
}
f( obj, name );