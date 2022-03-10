console.log("DOM Selectors");
/*
     DOM Selectors
Two types of element selector
1. Single element selector
2. Multi element selector

*/

//1. Single element selector
let elem = document.getElementById('First');
console.log(elem);
console.log(elem.className);
console.log(elem.childNodes);
console.log(elem.parentNode)
elem.style.color = 'red';  // can change css on this, any style can be given from here
elem.innerText = "Changed inner text";
elem.innerHTML = '<p> New para </p>';
console.log("Inner Html : ", elem.innerHTML);

//Another way of selection
let sel = document.querySelector("#Thrid");
let classNode = document.querySelector('.child');
let getEle = document.querySelector("div");

//2. Multi element selector
let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');

console.log(elems[0].getElementsByClassName('child'));

console.log(document.getElementsByTagName('div'));

//foreach not allowed HTML colelctions. We can use Array.from

//Here anonymous function is used in foreach
Array.from(elems).forEach(ele => {
    console.log(ele);
    ele.style.color = "green";
});



