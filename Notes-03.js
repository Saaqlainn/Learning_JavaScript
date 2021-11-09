console.log ('tut-3');

/* Variables In javascript */

// There are three ways to declare variables in javascript using key words 
/* var, let, const */

/* var is a bit older ways to declare a variable 
In the latest version of js most use cases are let, const*/


/*we can use back ticks to write a html code or 
for including commas in between.

a string should be written is double/ single quotes
Every variable we declare with an a quotes the browser will read it as a string
*/

/* simple example */
var name = 'saaqlain';
// console.log(name);

/*The no should be written without quotes */
var name = 'saaqlain';
var channel;
channel = 'programming with saaqlain';
var marks = 72;
console.log(name,channel,marks)


/* Rules for javascript variables
1.cannot start with number
2.can start with letter, numbers, _ or $
3.javascript variables are case sensative
*/

/*valid syntax */
var _city = 'mumbai';
console.log(_city);

var $city = 'mumbai';
console.log($city);

/* invalid syntax 
try not to use "#" "^" this kind of symbols
javascript will throw an error */

// Example:-
// var ^city = 'mumbai';
// console.log(^city);

// var #city = 'mumbai';
// console.log(#city);


/* In The CONST variable the assign value cannot be changed. */ 

/*Example */

const ownersName = 'varun vastav';
// ownersName = "amir siddiq"
console.log(ownersName);

/* Now LET has a block level scope every thing whitch is define in the curly braces js will 
only run the code and show out put of the code within the block*/

/* example of let */
{
    let city = 'ratnagiri';
    city = 'banglore'
    console.log(city);
}

/*bonus tip  */
/* In array or Object we cant redeclare an element but we can push the element */
/* array function */
const arr1 = [21,23,32,32,34];
arr1.push(53);
console.log(arr1);

/* most commomn progeamming case types 

1. camelCase
2. kabab-case
3. snake_case
4. PascalCase

*/





