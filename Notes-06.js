console.log('We are at tut 6');
const name = 'saaqlain';
const greeting = 'Good Morning';
// console.log(name+greeting);/* we can just print like this */
console.log(name + ' ' + greeting);/* we can add a space like this */


/* Concatination and String Methods  {
    
    ".concat()" 
    ".toLowerCase()" 
    ".toUpperCase()" 
    ".length"
} */ 

let html;
html = "<h1> this is heading</h1>"+
"<p> this is My para</p>"; /* This is valid syntax */

html = html.concat('added car',' added bus'); /* it just keep on adding strings */
// console.log(html.length); /* this gives the length of string */
// console.log(html.toLowerCase()); /* this makes a whole string to lowercase */
// console.log(html.toUpperCase()); /* this makes a whole string to uppercase */
console.log(html);

/* Indexing and Slicing and More functions of string */

// console.log(html[1]); /* This gives us 1st character of the declared string */
console.log(html.indexOf('<')); /* The indexOf() method returns the position of the first occurrence of a specified value in a string.  */
// console.log(html.indexOf('jkhdg')); /* indexOf() returns -1 if the value is not found.  */
// console.log(html.lastIndexOf('<')); /* The lastIndexOf() method returns the position of the last occurrence of a specified value in a string */
// console.log(html.charAt(3)); /* The charAt() method returns the character at a specified index in a string. The index of the first character is 0, the second character is 1, and so on. */
// console.log(html.endsWith('dsfsdfd')); /* The endsWith() method returns true if a string ends with a specified string, otherwise false . endsWith() is case sensitive. */
// console.log(html.includes(' fg')); /* The includes() method check whether an array includes a certain value among its entries, returns true or if no then false. */
// console.log(html.substring(1,6)); /* The substring() method returns a string out of another string */
// console.log(html.slice(0, 4)) /* The slice() returns a specific piece of string from the given string */
// console.log(html.split('>')); /* The split() method breaks the string in an array format */
// console.log(html.replace('this', 'it')); /* replace() is nothing but just replacing a string with another string. but it only replaces the first occurrence of string*/


/* ==============Tempelet literals =================*/
let fruit1 = 'Orange\'';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
            <h1> This is "my" heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myHtml;            
