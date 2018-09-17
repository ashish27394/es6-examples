let invoiceNum = '1350';
console.log(`Invoice Number : ${invoiceNum}`);
//Invoice Number : 1350

//With literals , white space, tabs and new line 
//are maintained
let message = `A
B
C`;
console.log(message) 
/*
A
B
C
*/

/* --------------- */
let invoiceNum = '1350';
console.log(`Invoice Number : ${"INV-" + invoiceNum}`);
//Invoice Number : INV-1350

//Interpolation takes place before the function call
function showMessage(message)
{
        let invoiceNum = '99';
        console.log(message);
}
let invoiceNum = '1350';
showMessage(`Invoice Message: ${invoiceNum}`);
//Invoice Number : 1350

//------------------
function processInvoice(segments){
    console.log(segments);
}

processInvoice `template`;
//[ 'template' ]

//------------------

function processInvoice(segments, ...values){
    console.log(segments);
    console.log(values);
}

let invoiceNum = '1350';
let amount = '2000';

processInvoice `Invoice: ${invoiceNum} for ${amount}`;
//[ 'Invoice: ', ' for ', '' ]
//[ '1350', '2000' ]