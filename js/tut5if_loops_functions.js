const age = 20;

if (age == 29) {
    console.log('Age is 19')
}
else if(age == 65) {
    console.log('Age is 65');
}
else {
    console.log('Age is not 19');
}

// to match value and type use ===

if (age === 65){  //age = '65' - here it will fail condition as 65 is string
    console.log('Age is 19 and number')
}

//check if variable is defined

if (typeof vari !== 'undefined')
{
    console.log("vari is defined");
}
else {
    console.log("vari is not defined")            
}

console.log("Ternary operator");
console.log(age==45? 'Age is 45':'Age is not 45')


// Switch case stmt
switch(age) {
    case 18:
        console.log('Your are 18');
        break;
    case 20:
        console.log('You are 20');
        break;
    default:
        console.log('Default case');
        break;
}

console.log('Learning loops')
//General loops for, while and do while
 for (let i=0; i<5; i++){
     console.log("i ", i)
 }

 let j=0;
 while(j<10)
 {
     console.log("While j ", j);
    j++;
 }

 let k = 0;
 do
 {  
       
    if(k ==8){
        break;
    }
    

    if(k === 2){
        k++;
        console.log("Continue ", k++)
        continue;        
    }

    console.log("do while", k++)

 } while (k < 10)

 let arr = [2,3,4,5,6,7,8]

 arr.forEach(function(element) {
     console.log("Array of ele ", element)
 });


 //Second syntax
 arr.forEach(function(element, index, array) {
    console.log("Array of ele ", element, index, array)
});


 let obj = {
     name: "SHilpa",
     age: 30,
     type: "Developer",
     os:'ubuntu'
 }

for (let key in obj){
    console.log(`${key} of object is ${obj[key]}`);
}

function greeting(name, thank='Thanks a lot'){  ///Default value in funtion argument
    console.log(`Happy birthday ${name}!.....${thank}`);
    let msg = `greeting from ${name}`;
    return msg; //NO need to define return type
}

let skills = 'SkillF';
console.clear();
console.log(greeting(skills));
let val = greeting("Shilpa");
console.log(val)

//Function can be assigned to any variable, Annonymous function. No function name only variable for function is created
const myWelcomeMsg = function (name) {
    console.log(`Welcome ${name}`);
}

myWelcomeMsg("Abha");
myWelcomeMsg("World");


//Function within object
const myObj = {
    name: "Avengers",
    game: function(){
        return "Avengers game"
    }
}

console.log("Function call from object ", myObj.game());

mixedArr = ['fruit', 'vegetables', 'furniture'];

//This function argument list
mixedArr.forEach(function(element, index, array) {

});

//let and const have block level scope, this increases performance also
//var is having global level scope
let i = 234;
function ui(name){
    let i =10;
    return `This is ${name}`;
}

console.log(ui("SHilpa"), i)
