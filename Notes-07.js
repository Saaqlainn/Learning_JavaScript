console.log('we are at tut-7.js and lets discuss about arrays');

/* Arrays */
const marks = [35, 53, 67, 66, 54, 72];
const fruits = ["apple", "berrys", "banana", "guava"];
const mixed = [554, "banana", ["string", "saqlain"]];
console.log(mixed);
// console.log(fruits[1]); /* like all prgrming lang. indexing in array start with "0" */

/* We can generate an array with the help of array constuctor method */
const myArr = new Array(34, 45, 65, 72,"bananas");
console.log(myArr);

/* ======================methods and functions in arrays=================== */
/* This methods change the orignal arrays */
const myArray = new Array(34, 45, 65, 72,"orange");
console.log(Array.isArray("orange"));/* isArray() checks if the declare variable is a array or not if yes then says true false if not the array  */

/* we can change the value of an array */
const arr  = new Array(34, "dislikes", "orange");
arr[0] = "saqlain";
// console.log(arr);

/* similarly we can access the value of an arrays */
 arr[0]  = "Delhi";
 let arrElement = arr[0];
// console.log("Element:", arrElement);

/* "indexof()" we can find The value of Element  */
let stMarks = [35, 53, 67, 66, 54, 72];
let value = stMarks.indexOf(53);
// console.log(value)

/* Mutating And Modifing Arrays */

let stNumber = [40, 50, 60, 70, 80, 82, 88, 92];
// stNumber.push(91); /* push() adds an intiger at the end */
// stNumber.unshift(9595); /* unshift adds an intiger at the start */
// stNumber.pop(); /* pop() Deletes the Last Int */
// stNumber.shift(); /* shift Deletes the first Int */
// stNumber.splice(1,2);/*Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements. */
stNumber.reverse(); /* It makes the array in reverse order */
console.log(stNumber);

/* concatinations with arrays */

let numbers = [12, 13, 14, 15, 16, 17];
let numbers2 = [3, 5, 6, 7];
numbers = numbers.concat(numbers2);
console.log(numbers);

/* Objects in array */
/* In Objects we can add arrays, string, boolean, */

let myObj = {
    name : 'saaqlain',
    status : 'learning JavaScript',
    isActive : true,
    subMarks : [70, 74, 71, 60]
}
// console.log(myObj);
// console.log(myObj.name); /* we can access the values of the declared object */
// console.log(myObj['name']) /* this is the another way to access the object value */

// var a;
// a = 7;
// var b;
// b = a;


const FCC = "FREECODECAMP"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); 

let myvar = 20;
myvar--;
console.log(myvar);

// let secVar = 3;
// secVar += 12;
// comsole.log(secVar);

let myVar = 1;
myVar += 5;
console.log(myVar);

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a = a += 12;
b = b += 9;
c = c += 7;
console.log(a, b, c);
