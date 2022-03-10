console.log("Learning Classes and inheritance using prototype");

const proto = {
    slogan: function(){
        return 'This company is best';
    },
    changeName: function(newName){
        this.name = newName;
    },   
}

//Object creation using base class create method, Need to pass prototype
const companyObj = Object.create(proto);
companyObj.name = "Persi";
companyObj.changeName("Telecom");
//console.log(companyObj.name);
companyObj.role = "Engineer";
companyObj.salCal = function(amt){
    return amt*10;
}
//console.log(companyObj);
//console.log(companyObj.salCal(100000));

//Another way to create object using old JS

const company2 = Object.create(proto, {
    name : {value: "Ojas", writable:true},  //This creates const object we cannot alter value unless writable is true
    role: {value: 'Player'}
});

company2.changeName('Riddhi');
//console.log(company2.name);

//Create constructor directly without prototype
function Employee(name, salary, exp){
    this.name = name;
    this.salary = salary;
    this.exp = exp;    
}

Employee.prototype.slogan = function(){
    return `This company is the best. Regards, ${this.name}`;
}

let newObj = new Employee('Abha', '29999999', 10);
console.log(newObj.slogan());

//New constructor: with inheritance. 
//It is achived using call function
function Programmer(name, salary, experience, language){
    Employee.call(name, salary, experience);
    this.language = language;
}

//Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

//Manually set the constructor 
Programmer.prototype.constructor = Programmer;
cppProgramer = new Programmer("Shilpa", 20000000, 12, "cpp");
console.log(cppProgramer);
