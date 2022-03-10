console.log("Learning INteritance using ES6 syntax");

class Employee {
    constructor(name, exp, div) {
        this.name = name;
        this.exp = exp;
        this.division = div;
    }

    slogan() {
        return `I'm ${this.name} the best!!!`;
    }

    joiningYear() {
        return new Date().getFullYear() - this.exp;
    }

    static add(a, b) {
        return a + b;
    }
}

//Empty constructor is not present, hence pass all args
let empObj = new Employee('Shilpa', 10, 'Telecom');
console.log(empObj.joiningYear(), empObj.slogan());

//calling staic method using class name
console.log(Employee.add(10, 20));

//INheritance using ES6 syntax

class Programmer extends Employee {
    constructor(name, exp, div, lang, github) {
        //Initialize base class constructor
        super(name, exp, div);
        this.language = lang;
        this.github = github;
    }

    favouriteLang() {

        if (this.lang == 'python') {
            return 'Python';
        }
        else {
            return 'Javascript';
        }

    }

    static multiply(a, b) {
        return a * b;
    }
}

let progObj = new Programmer('Rohan', 3, 'IBM', 'go', 'abc124');
console.log(progObj);
console.log(progObj.favouriteLang())
console.log(Programmer.multiply(2, 7));


class Library {
    //Take booklist as an argument
    constructor(books, users){
        this.bookList = books;
        this.userList = users;
    }

    getBookList(){
        return this.bookList;
    }

    IssueBook(bookname, user){
        //verify user in userlist. Indexof returns index/pos in array
        //If not present it return -1
        if(this.userList.indexOf(user) >= 0){
            return bookname;
        }

        return "Invalid user";
    }

    //Spread sysntax, condenced array accepted in seperate variables
    addition = (a, b, c) => a+b+c;

    //Accept seperate variables in condenced array
    addNumbers = (...numbers) => {
        let sum = 0;
        numbers.forEach(element => {
            sum+=element;
        });

        let result = 0;
        numbers.forEach(num => result+=num);
        console.log("Result : ", result);
        return sum;
    }
}


const books = ['go', 'java', 'cpp', 'js', 'react'];
const users = ['a', 'b', 'c', 'd', 'e'];
lib = new Library(books, users);
console.log(lib.getBookList());
console.log(lib.IssueBook('go', 'a'));
let numbers = [1,2,3];
console.log(lib.addition(...numbers));
console.log(lib.addNumbers(1,2,3,4,5,6));


class Person {
    constructor(){
        this.personName = 'John';
        this.location = 'Pune';
    }

    getPerson = () => this.personName;
    setName = (nm) => this.personName = nm;
}

let p = new Person();
console.log(p.getPerson());

//verify object.is and Object.assign methods

//Object.assign() method can be used to clone an object.

let perObj = Object.assign({}, p);

p.setName('Jonny');
let cloneP = new Person();
Object.assign(cloneP, p);

console.log("perObj ", perObj.getPerson());
console.log("p1 ", cloneP.getPerson());

//Object.assign() can also be used to merge objects.
let empObj1 = new Employee('Persi', 100000, 5);
let empPerMerged = Object.assign({}, p, empObj1);
console.log(empPerMerged);  //This will only copy properties not functions. Only functions from first class are accessible


let a=10, b=10;
Object.is(a,b); //true
let c=20;
Object.is(a,c);//false
let obj1={a:1};
let obj2={a:1};
Object.is(obj1, obj2);//false, as both objects don't have same reference
Object.is(obj1, obj1);//true, both objects have the same reference

