console.log("Learning website layout");

let a = document;  //it is reference type, object. It is used to change html content
console.log(a);

let htmlCOllection = document.all;
console.log(htmlCOllection)
console.log(document.body);
console.log(document.forms);
//document.forms is html collection of forms we can access as an array
console.log(document.forms[0]);

//Create array 
Array.from(document.all).forEach(element => {
    console.log(element);
});

console.log(document.links);
//console.clear();
console.log("get attrib from link ", document.links[0].href)

//document.images and document.scripts get and print
//foeachnode is a Ag grid api method
// forEachNode(document.images, function(elem) {
//     console.log("image ", elem);
// });

let x = document.images;
for (let i=0; i<x.length; i++){
    console.log(x[i].src);
}
