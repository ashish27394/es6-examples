var price = 5.99, quantity = 30;
var productView = {
    price,
    quantity
}
console.log(productView);//{ price: 5.99, quantity: 30 }

//--------------
var price = 5.99, quantity = 10;
var productView = {
    price,
    quantity,
    calculateView(){
        return this.price * this.quantity
    }
    //what is this referring here,
    //object or the context it was in
}
console.log(productView.calculateView());//59.900006

//------------
var price = 5.99, quantity = 10;
var productView = {
    price:7.99,
    quantity:1,
    calculateView(){
        return this.price * this.quantity
    }
}
console.log(productView.calculateView());//7.99
//So here , we  changed the valus in the object
//but we get the new result
//So this based on object and not on the
//code on which it is running

var price = 5.99, quantity = 10;
var productView = {
    price:7.99,
    quantity:1,
    "calculate value"(){
        return this.price * this.quantity
    }
}
console.log(productView["calculate value"]());//7.99

//-----------------
//To give the dynamic property
var price = 5.99, field = 'dynamicField';
var productView = {
    [field] : price
}
console.log(productView);
//{ dynamicField: 5.99 }

//------------
var price = 5.99, field = 'dynamicField';
var productView = {
    [field + "-001"] : price
}
console.log(productView);
//{ 'dynamicField-001': 5.99 }

//-------------
var method = "doIt"
var productView = {
    [method + "-001"]() {
        console.log("in a method");
    }
}
productView["doIt-001"](); //in a method

//---------------
//Here we have object literal with getter and setter
var ident = 'productId';
var productView = {
    get [ident] () {return true ; },
    set [ident] (value) {},
}
console.log(productView.productId); //true


