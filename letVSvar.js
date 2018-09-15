//var demo
console.log(productId1);  //undefined
var productId1 = 12; 

//i *is* available 
console.log(i);

for(var i = 0 ;i<20 ; i++)
{
    console.log(i); //i *is* available 
}

//i *is* available 
console.log(i);

//---------------
//no blocking space
var b = 12;
{
    var b = 2000;
}
console.log(b); //2000

//----------
let updateFunctions = [];
for(var i = 0 ; i< 2 ;i++)
{
        updateFunctions.push(function() {return i; });
}
console.log(updateFunctions[0]()); //2
console.log(updateFunctions[1]()); //2

/* A closure gets created over the variable i,
so the final value of i will be 2,
so everytime 2 will appear
*/

//Keep in mind, we are calling the function inside the array,
//that is why we are getting the result as this
//If we are pushing the data directly in the array,
//then we will get expected result with let and var both 

let updateFunctions = [];
for(var i = 0 ; i< 2 ;i++)
{
    updateFunctions.push(i);
}
console.log(updateFunctions[0]); //0
console.log(updateFunctions[1]); //1

/* ************* */

//let demo
console.log(productId2);  
let productId2 = 12; 

//------------

//j *is not* available 
//j *is not* defined error
console.log(j);

for(let j = 0 ;i<20 ; i++)
{
    console.log(j); //j *is* available 
}

console.log(j); //j *is not* available 

//-------------

let a;
console.log(a);//undefined

//------------
//Block Scoping

let b = 12;
{
    let b = 2000;
}
console.log(b);  //12

//-------------
{
    let b = 2000;
}
console.log(b); //error b is not defined

//------------------
/* Function is in temporal dead zone but will 
run across even though it's not declared yet.
*/
function updateProductId(){
    productId = 12;
}
let productId = null;
updateProductId();
console.log(productId);//12

//-----------------
let bike = {name: 'SuperSport', maker:'Ducati', engine:'937cc'};
console.log(bike.hasOwnProperty('name'));  //true
console.log(bike); //{ name: 'SuperSport', maker: 'Ducati', engine: '937cc' }
bike = 12;
console.log(bike.hasOwnProperty('name')); //false
console.log(bike.name); //undefined
console.log(bike); //12

//---------------
let updateFunctions = [];
for(let i = 0 ; i< 2 ;i++)
{
    updateFunctions.push(function() {return i; });
}
console.log(updateFunctions[0]()); //0
console.log(updateFunctions[1]()); //1

/* No closure in this case.
Everytime a *new i* will be created
*/
