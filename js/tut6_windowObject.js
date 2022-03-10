//DOM - Document pbject model
//Window object is main object
console.log("Learning DOM!!!");

let a = window;  //window is object
console.log("Get window object details, it is a global object ", a);

//Using functions of window object

//window.alert("Hello");
//alert("Hello");

//Prompt in JS, this takes input from user and return the input given.
//a = prompt("This is warning");
//console.log(a);

//Confirm dialog

//a = confirm("Are you sure to delete?");
//console.log("option choosed ", a);

let win = window.document;
let inHt = window.innerHeight;  //gives height of browser
let intwth = window.innerWidth;  //gives width of browser
let sx = scrollX;  //gives position of scroll bar from x axis
let sy = scrollY;  //gives position of scroll bar from y axis, similar way we can get this values from console window of browser
let loc = location; //it is object
console.log(loc);
//location.reload();
location.href;  // this gives current url, you can also assign any url to this and it will redirect to that location

//Get history of window 
console.log(window.history);
console.log(window.history.length);
history.go(-1); //is same as back button on browser, go to back
history.go(1);  //goes forward 1 step ahead, same as fwd button


//create a variable string conatining text which is a valid link
//Fetch all links from given page, which conatins given text
