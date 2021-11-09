/* Two type of data type in javascript 

Primitive Data type and  Refrence Data type.

Memory allocation is in stack
primitive Data types 6 {
    string
    Number 
    Boolean
    Null
    Undefine
    symbol
}

Memory allocation is in heap
Refrence Data types 4 {
    Arrays
    Object literals
    Functions
    Date
}
*/

// Primitive Data Types

/* string is a collections of characters its written in single|double quotes  */
let name = "saqlain"
// console.log("my string is " + name);
//using type of operator
// console.log("Data type is "+ (typeof name));

/* Numbers */
let marks = 35;
// console.log("Data type is "+(typeof marks));

/* boolean is ether true or false value */
let isDriver = true ;
console.log("Data type is "+(typeof isDriver));

/* null is a intentional empty value */
/* The output shows null is a "object" but the 
null is primitive data type*/
let nullvar = null;
// console.log("Data type is "+(typeof nullvar));

/* undefined */
var name;/* this will show as undefined */
let undef = undefined;
// console.log("Data type is "+(typeof undef));

/* symbols */
/* this are the in the latest version will go through it later */

//Refrence Data types

//Arrays
/* below is an "array" but the output shows its an object */
myarr = [1,2,3,4,5,6];
// console.log("Data type is "+(typeof myarr));

/* if we pass an "boolean" or "string" value
still is shows its a object */
myarr = [1,2,3,4,5,6, false,"string"];
// console.log("Data type is "+(typeof myarr));

//Object litarals
// it is the collection of name-value pairs      
let stMarks = 
{
    harry:89,
    shubham:36,
    rohan:53
}
console.log(stMarks);

//function
function findname() {
    
}
// console.log(typeof(findname));

//date 
let date = new Date();
// console.log( date);

// let date = new Date();
// console.log(typeof (date));

