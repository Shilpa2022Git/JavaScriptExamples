console.log("Tutorial on arrays");
const marks = [67,78,89,90,56,79,91];
const fruits = ['Orange', 'Apple', 'Mango', 'Grapes', 'Watermelon'];
const mixedArr = ['str', 67, [3,5]];

const arr = new Array(23, 133, 456, 'Orange');
console.log("Array using arrayu class " , arr)
console.log("Mixed array " , mixedArr)
console.log("Number array " , marks)

console.log("Get length of array " , arr.length)
console.log(Array.isArray(arr)); //if array returns true else false

arr[0] = 'ABC';
let arrElement = arr[0]
console.log("Print element " , arrElement);

let value = marks.indexOf(91);
console.log("Index value ", value)

//Mutating or Modifying array
marks.push(345);
console.log(marks)
marks.unshift(123); //Put at start
console.log("Unshift " , marks)
marks.pop(); //pop element from end
console.log("Pop " , marks);
marks.shift() //shift similar to pop shift from start, removes first ele
console.log("After shifting ", marks);
marks.splice(1,3); //Remove 3 elements from 1 , start index and how many elements
console.log("Splice of array from 1 , 3 " , marks);
marks.reverse();
marks.concat(arr);
console.log("array conact ", marks)

//declare object
let myObj = {
    name: 'Shilpa',
    channel: 'Persistent',
    isActive: true,
    marks:[1,5,3,2,4]
};

console.log(myObj);

console.log(myObj.isActive);

console.log("Channel is " , myObj['channel']);


