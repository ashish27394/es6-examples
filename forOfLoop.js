var categories = ['hardware', 'software', 'vaporware'];
for(var item of categories)
{
    console.log(item);
}
//hardware
//software
//vaporware

var categories = [,,];
for(var item of categories)
{
    console.log(item);
}
//undefined
//undefined

var codes = "ABCDE";
var count = 0;
for(var code of codes){
    count++;
}
console.log(count);
//you can use for..of with strings and arrays and any thing
//else , js assumes as iterables

