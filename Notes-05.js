//Type conversion and coercion 

 //<==============Type conversion============>

console.log("welcome to tut5");
/* Number */
/* converting Number into a string using string function  */
let myvar;
myvar = 34;
console.log(myvar);
myvar = String(34);
console.log(myvar, (typeof myvar));

/* Boolean */
// let booleanval  = (true);
// console.log(booleanval);
let booleanval  = String(true);
console.log(booleanval, (typeof booleanval));

//Date 
// let date = new Date();
// console.log(date);

let date = String(new Date());
console.log(date);

/*Array 
 conversion of arry into string and finding a length */
// let arr = [1,2,3,4,5];
// console.log(arr.length);

let arr = String([1,2,3,4,5]);
console.log(arr.length, (typeof arr));

let i = 8;
console.log(i.toString()); /*"toString()" function this does the same job as "string()" */

/* Number function */
//Converting a string into a number 
let stri = ("234556")
let stri = Number("234556");
// stri = Number("2323d4"); /* this will show NaN */
// stri = Number(true);/* number(true) gives ="1" number(false) gives="2" */
// stri = [1,2,3,4,4,5,6,7,8];/* this will also show NaN */
// console.log(stri,(typeof stri));

/* ===================== More functions ===================== 
"parseInt()" and "parsefloat()" ".toFixed()" */

/* "parseInt" is used to convert a string into a number.
but if the number is in the decimal format it doesnt shows Decimal no.  */

/* parseFloat() convert the number in a floating point no.*/

/* .toFixed() is just that how many decimal point you wanna display */

/* Examples */
// let number = parseInt('34.04554');
// console.log(number,(typeof number));

// let number = parseFloat('34.04554');
// console.log(number,(typeof number));

// let number = Number('34.04554');
// console.log(number,(typeof number));

//"tofixed()" is use to show decimals after Numbers
let number = Number('34.04554');
console.log(number.toFixed(3),(typeof number));


/* ==============Type coercion============ */

/* Assume that we wanna add this two thing together  */
// let string = "20";
// let num = 40;
// console.log(string + num); /* The out put will be 2040 */

/* this will give us the addtion value of two */
let string = Number("20");
let num = 40;
console.log(string + num); /* The out put will be "60" {kn0w the difference} */
