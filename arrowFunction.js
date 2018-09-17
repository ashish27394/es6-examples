
//With no parameters - empty paraenthesis
var getPrice = () => 5.99;
console.log(typeof getPrice); //function

var getPrice = () => 5.99;
console.log(getPrice()); //5.99

//-----------------
//giving one parameters to the function
var getPrice = (count) => count * 4.00;
//passing the arguments to the fnction
console.log(getPrice(2));  // 8

//-------------------
//giving two parameters 
var getPrice = (count, tax) => count * 4.00 * (1 + tax);
//passing the arguments to the function
console.log(getPrice(2, .07)); //8.56

//-----------------
//Here we are using a block and returning the value
//instead of using a comles expression
var getPrice = (count, tax) => {
    var price = count * 4.00;
    price *= (1 + tax)
    return price;
}
console.log(getPrice(2, .07)); //8.56

//------------------
//AF can reduce some key strokes but the main use of
//AF is to use 'this' keyword

document.addEventListener('click', function(){
    console.log(this);
});
//#document

document.addEventListener('click', () => console.log(this));
//window{...}

//In ES5, this set to the object on which 
//functions running
//In ES6 i.e. arrow function, this set to the 
//context in which code is running

/* In the above es5 code '#document' is returning b/c 
the object is document.
*/

/* In the above es6 code 'window{...}' is returning b/c 
it was running under window directly. If it would have been
under the function then it would have returned 'function'
*/

//es5 example
var invoice = {
    number : 123,
    process : function(){
        console.log(this);
    }
}
invoice.process(); //{ number: 123, process: [Function: process] }
//this represents the current object

//es6 example
var invoice = {
    number : 123,
    process : () => console.log(this)
};
invoice.process();// Window{...}
//this represents the context in which the code is running
//here Window

//es6
var invoice = {
    number : 123,
    process : function() {
        return() => console.log(this.number);
    }
};
invoice.process()(); //123
//It is in process context which is in invoice context


//----------------
//With AF, you cannot bind an object to an AF
//It will not throw ant error.It will just ignore 
//the bind. so you won'y be able to change he value 
//of this with bind

var invoice = {
    number : 123,
    process : function() {
        return() => console.log(this.number);
    }
};
var newInvoice = {
    number : 456
}
invoice.process().bind(newInvoice)(); //123

//-----------------------
//When we are using AF, call to bind, call, apply all are useless
var invoice = {
    number : 123,
    process : function() {
        return() => console.log(this.number);
    }
};
var newInvoice = {
    number : 456
}
invoice.process().call(newInvoice); //123

//--------------------
//we cannot put the arrow function in new line
var getPrice = () 
        => 5.99;   //error = Unexpected token =>
console.log(typeof getPrice);

//-------------------
//In es5, every function has prototype but in es6 AF, we do not have
var getPrice = () => 5.99;
console.log(getPrice.hasOwnProperty('prototype')); //false

//----------------------------------------------------------------------

//In es5, if we do not set the parameter, it's value will be
//undefined. In es6 we have ability to set it default.

var getProduct = function(productId = 1000){
        console.log(productId);
}
getProduct(); //1000

//-------------------
var getProduct = function(productId = 1000, type = 'software'){
    console.log(productId + ', ' + type);
}
getProduct(undefined, 'hardware'); //1000, hardware

//-------------------
var geTotal = function(price , tax = price*0.07){
        console.log(price + tax);
}
geTotal(5.00);//5.35

//--------------------
var baseTax = 0.07;
var geTotal = function(price , tax = price * baseTax){
    console.log(price + tax);
}
geTotal(5.00);//5.35

//---------------------

var generateBaseTax = () => 0.07;
var geTotal = function(price , tax = price * generateBaseTax() ){
    console.log(price + tax);
}
geTotal(5.00);//5.35

//--------------------
//arguments will refere to the number of arguments passed
//to the function
var geTotal = function(price, tax = 0.07){
    console.log(arguments.length);
}
geTotal(5); //1

//----------------------
var geTotal = function(price = adjustment , adjustment = 1)
{
    console.log(price + adjustment);
}
geTotal(); //errro - adjustment is not defined
//In parameters, declaration should happen before
//the usage

geTotal(5);//6
//This will work b/c here it will use the value
//passed as argument.

/* Dynamic Functions with default */
var geTotal = new Function("price = 20.00", "return price;");
console.log(geTotal()); //20