//variables and Datatypes in JS
// var, let, const using this we can create variables
var name = "Shilpa"
var name1 = 'Sh"i"lpa'
var channel;
channel = "JS learning"
var marks = 34
console.log("My name is " + name)
console.log("Data type is " + (typeof name))
console.log(name1, channel, marks) //Channel is not initialized then it gives undefined

console.log("Data type of marks is " + (typeof marks))

let Driver = true;
console.log("Data type of driver is " + (typeof Driver))

//Null
let nullVar = null;
console.log("null is primitive datatype, but type of of nullVar " + (typeof nullVar))

let undef = undefined;
console.log("Data type is undef = " + (typeof undef));

/*Rules for creating JS vars
1. Cannot start with numbers
2. Can start with letter, number, underscore and dollar
3. Vars are case sensitive
*/

var city = "Delhi"

//Assignment to constant variable is not allowed
const ownerName = "Hare Ram";
console.log(ownerName)

//let scope is block level, var is global scope
{
    let city = "Pune"
    city = "Kolkata"
    console.log(city)
}

console.log(city)  //Accessing global var

//JS have array object string and numbers

const arr1 = [11, 12,13,14,5]
//add elements to const array
//cannot re declare as arr1 = [1,2,3]
arr1.push(10)
console.log(arr1)
console.log("Data type is arr1 = " + (typeof arr1));
//float is also number 
//const object re-assignment is not pssible
/* Most common programming case type
1. camel casing
2. Kabab-case - distinguish between dash
3. snake_case - use underscore
4. PascalCase - every word is captial start
*/


let stMarks = {
    abc:10,
    xyz:23,
    pqr:20,
    efh:30
};
console.log(stMarks)
console.log( "  Type of object " + (typeof stMarks))

function findName(params) {
    
}

console.log("Type of function is function - check " + (typeof findName))

let date = new Date();
console.log("Type of date " + (typeof date))

//type conversion and type coercion
console.log("Welcome to type conversion and type coercion")

let myVar;
myVar = String(34);
console.log(myVar, (typeof myVar));
let booleanVar =String(true);
console.log(booleanVar, (typeof booleanVar));

let date1 = String(new Date());
console.log("Type of string date " + (typeof date1))

let arr = String([1,2,3,4,5]);
console.log("Length of arr ",  arr.length, (typeof arr))

let i=0;
console.log(i.toString())

let stri= Number("3434");
console.log(stri, (typeof stri));
//while converting to number if anything wrong it will give NaN. If boolean cobcerts then gives 1 or 0

let number = parseInt('34.627343')
console.log(number)
number = parseFloat('34.78457')
console.log(number.toFixed(2)) //gives 2 nos after decimal point
//type coercion
let myStr = "698";  // to get number myStr = Number("698")
let myNum = 34;
console.log(myStr + myNum); //69834

let html;
html = "<h1>This si a heading</h1" + 
        "<p>This is PARA</p>";
html = html.concat('this', ' str2');
console.log(html, "  length of html - " , html.length);
console.log("Lower case " +  html.toLowerCase());
console.log("Upper case " +  html.toUpperCase());
console.log("Print chars ", html[0], html[1])
console.log("Get index of ", html.indexOf("this"));
console.log("Get last index of ", html.lastIndexOf("This"));
console.log("Char AT function " , html.charAt(3));
console.log(html.endsWith("str2")); //if found true else false
console.log(html.includes("dhfgrh"));
console.log(html.substring(1,3)); //1 to 2 returns
console.log(html.slice(0, 4)); //returns from 0 to 3
console.log(html.split(" ")); //split string usinh space
console.log(html.replace("This", "it"));  //Replaces first occurence

let fruit1 = 'Orange';
let fruit2 = 'Mango';
let myHtml = `Hello ${name}
            <h1> In back ticks string </h1>
            <p>Do you like ${fruit1} and ${fruit2}
            </p>
`;

document.body.innerHTML = myHtml;