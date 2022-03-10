let cont = document.querySelector('.no');
console.log(cont);
//cont = document.querySelector('div.container');
cont = document.querySelector('.container');
console.log(cont.childNodes);   //This will give all new lines, comments, text
console.log( cont.children);  //This will give only elements, no new line comments etc...
//We can access elements
console.log(cont.childNodes[1].nodeName);  
console.log(cont.childNodes[1].nodeType);
/*
1. element
2. Attribute
3. Text node
8. Comment
9. document
10. docType
*/

console.log(cont.firstChild);
console.log(cont.firstElementChild);
cont.lastChild;
cont.lastElementChild;
cont.childElementCount;  // count of child elements

console.log(cont.firstElementChild.nextSibling)
console.log(cont.firstElementChild.parentNode)
console.log(cont.firstElementChild.nextElementSibling)

//Create element
let element = document.createElement('li');
element.setAttribute('title', 'List of colleges')
element.id = "myList";
element.value = "Grapes";
element.nodeName = "Grapes";
element.innerText = "Grapes";
element.className = "myGrapes";
//element.innerHTML = '<b>Grapes</b>';
//document.getElementById('li').textContent = "Grapes";
let ul = document.querySelector(".FruitsList");
console.log(ul);
ul.appendChild(element);

//we can also set text using text node and append text node 
let text = document.createTextNode("Kiwi");
ul.appendChild(text);

let elem2 = document.createElement('h3');
elem2.innerText = "New node created";

document.getElementById('myfli').replaceWith(elem2);

let liElem = document.createElement('li');
liElem.setAttribute('id', 'myNewLi');
liElem.innerText = 'Pomogrenate';
//To get value of any id or element use value property

//document.getElementById('myLli').appendChild(liElem);
//item() method is used to get elements from HTML collection
let myUl = document.getElementsByClassName('FruitsList').item(0);
document.getElementsByClassName('FruitsList').item(0).replaceChild(liElem, document.getElementById('myLli'));
/*
let myEleLi = document.getElementsByClassName('myGrapes');
console.log(ul.hasAttribute);

myUl.removeChild(liElem);
element.removeAttribute('id');
*/
let myhead = document.createElement('h3');
myhead.innerText = 'go to w3schools';
let anchorEle = document.createElement('a');
anchorEle.setAttribute('href', 'https://www.w3schools.com/');
myhead.appendChild(anchorEle);
document.querySelector('.container').appendChild(myhead);
//create a heading element with text as gotocode and set herf. Create anchor tag ou

//blur event is to handle mouse away
/*
let str = "python";
let links = document.links;
console.log(links);
let href;
Array.from(links).forEach(function(element) {
  href = element.href;
  if (href.includes(str)) {
    console.log(href);
  }
});
*/






