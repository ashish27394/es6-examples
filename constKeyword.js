/* const keyword should be declared and initialized at the same time  */
const MARKUP_PCT = 100;
console.log(MARKUP_PCT); //100

//-----------
//It is imp to initialize const type
const MARKUP_PCT ;
console.log(MARKUP_PCT);//error - Missing initializer in const declaration

//-----------
//we cannot change the "const" type value
const MARKUP_PCT = 100;
MARKUP_PCT = 10;
console.log(MARKUP_PCT); //error - Assignment to constant variable

//Block scope is present in const just like let
const a = 100;
if(a>1){
    const a = 10;
}
console.log(a); //100


