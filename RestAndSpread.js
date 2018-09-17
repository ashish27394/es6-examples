//Rest refers to gathering up parameters and putting them into an array

//Spead referes to spreading of elements of array and string

//Rest
var showCategories = function(productId, ...categories){
    console.log(categories instanceof Array);
}
showCategories(123, 'search', 'advertising'); //true

//---------------
var showCategories = function(productId, ...categories){
    console.log(categories);
}
showCategories(123, 'search', 'advertising');
//[ 'search', 'advertising' ]

//--------------------
var showCategories = function(productId, ...categories){
    console.log(categories);
}
showCategories(123);
//[]

//-------------------
var showCategories = function(productId, ...categories){
};
console.log(showCategories.length); //1
//It will ignore thw Rest parameter b/c it can be 
//empty array

//-------------------
var showCategories = function(productId, ...categories){
    console.log(arguments.length);
};
showCategories(123, 'search', 'advertising'); //3

//-----------------
//we can use Rest para in dynamic functions

var showCategories = new Function("...categories", "return categories");
console.log(showCategories('search', 'advertising'));
//[ 'search', 'advertising' ]


//Spread
var prices = [12, 20, 18];
var maxPrice = Math.max(...prices);
console.log(maxPrice);//20

//----------------
var prices = [12, 20, 18];
var newPriceArray = [...prices];
console.log(newPriceArray); //[12, 20, 18]

var newPriceArray = Array(...[,,]);
console.log(newPriceArray); //[ undefined, undefined ]
//Here js will ignore the last comma and generate 
//two undefined values.We are allowed to put a 
//trailing comma.

var newPriceArray = [...[,,]];
console.log(newPriceArray); //[ undefined, undefined ]

var maxCode = Math.max(..."43210");
console.log(maxCode);//4

var codeArray = ["A", ..."BCD", "E"];
console.log(codeArray); //[ 'A', 'B', 'C', 'D', 'E' ]