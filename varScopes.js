//In this a is not defined so js will defined it in
//global scope

var ab = function()
{
    a = 10;
}

ab();
console.log(a); //10

//--------------
//In this case b is defined inside the function so the scope will
//be function only
var ab = function()
{
    var b = 10;
}

ab();
console.log(b); //error - b *is not* defined

