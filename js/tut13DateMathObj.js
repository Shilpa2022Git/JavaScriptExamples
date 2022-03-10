console.log("Math operations, date time");
let x = 34;
let y = 6;
let z;
z = x+y; //x-y; x*y; x/y;

//Exploring Math object/package
console.log('Print math object ', Math);

let today = new Date();
console.log(today);
console.log(typeof today);
//format is mmddyyyy
let otherDate = new Date('8-4-2022 08:34:23');
console.log(otherDate);


otherDate = new Date("June 13 2022");
console.log(otherDate);
otherDate = new Date('09/13/2021');
let a = otherDate.getDay();  //getDate(), getMins(), 
console.log(a);

otherDate.setDate(23);
otherDate.setTime(10);