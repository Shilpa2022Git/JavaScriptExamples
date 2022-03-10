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
//Add a class name
element.className = 'classLi';
element.id = 'addedLi';

