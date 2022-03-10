console.log("Class obj");

//object literal for creating objects
//base class of any object, object.prototype from java script
let car = {
    name: "Maruti car",
    topSpeed:"190",
    run: function (){
        console.log("Car is running");
    }
}

console.log(car);
car.run();

//Creating a constructor
function GeneralCar(name, topSpeed){
    this.name = name;
    this.topSpeed = topSpeed;
    this.run = function(){
        console.log(`${this.name} is running`);
    }

    this.analyse = function(){
        console.log(`${name} is slower than Marcedes by ${200-topSpeed}`);        
    }
}

//Creating object using constructor
carObj = new GeneralCar("Nissan", 180);
carObj1 = new GeneralCar("Maruti", 130);
carObj2 = new GeneralCar("Hyundai", 150);
carObj.run();
carObj.analyse();

carObj1.run();
carObj1.analyse();

carObj2.run();
carObj2.analyse();

//Prototypes of a class. 
//We should not make nay change in class prototype
//Prototype can be accessed as obj.prototype.funcName. Object.prototype is a JS type, which we never change

let shop = {
    TVBrand: "Sony",
    size: 32,
    speakers:2,
    ports:3
}

//To create objects of object literal we have to define constructor
constructShop = function (givenTv, givenSize, givenSpeakers, givenPorts){
    this.TVBrand = givenTv;
    this.size = givenSize;
    this.speakers = givenSpeakers;
    this.ports = givenPorts;
}

console.log(shop);
/* Changing prototype of object literal is not allowed, this will change
shop.prototype.getName(){
    return "123"
}
*/


//Change the prototype i.e. base class definition
constructShop.prototype.getBrand = function() {
    return this.TVBrand;
}


relianceObj = new constructShop("Sony", 43, 2, 3);


BplObj = new constructShop("BPL", 50, 3, 5);

LgObj = new constructShop("LG", 32, 3, 2);
console.log(relianceObj);
console.log("Prototyupe usage : ", relianceObj.getBrand())