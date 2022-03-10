console.log("Learning about arrow functions");

function greet(){
    console.log("first way of declaring function");
}

const greet1 = function(){
    console.log("Function declartion by assigning to variable");
}

const greet2 = ()=>{
    console.log("using arrow function same as lambda functions ()=>{}")
}

const greetRet = function(){
    return "Good Morning";
}

const greetRet1 = ()=>{
    return "Good Morning with arrow function";
}

const greetRet2 = () => "Good morning with one liner."

//How to return object in one liner function
const greetObjRet = () => ({city:'Pune'});

const greetArgRet = (name) => "Good morning " + name;
const greetArgRet1 = name => "Good morning " + name;

//For two args it is compulsory to put paranthesis
const greetArgRet2 = (name, msg) => "Good morning " + name + msg;

greet();
greet1();
greet2();
console.log(greetRet());
console.log(greetRet1());
console.log(greetRet2());
console.log(greetObjRet());
console.log(greetArgRet("Shilpa"));
console.log(greetArgRet1("Shilpa no paranthesis"));
console.log(greetArgRet2("Shilpa", "  bbye!!!"));
