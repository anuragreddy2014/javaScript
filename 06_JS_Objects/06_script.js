/*
  * 1) Object Creation
  * 2) Adding and Deleting props
  * 3) Retrieval
  * 4) Object Literal
  * 5) dot , [] notation
  * 6) Nested Objects
*/

// Create an Object
let fridge = {};
console.log(fridge);

// Add properties to an object
fridge.eggs = 20;
fridge.vegitables = 30;
console.log(fridge);

// Object Literal
let mobile = {
    brand : 'Apple',
    color : 'Silver',
    RAM : '16GB',
    isInsured : true
};
console.log(mobile);

// Access the properties of an Object
console.log(`Brand : ${mobile.brand}`);
console.log(`Brand : ${mobile['brand']}`);

// Access non existing property
console.log(`Non Prop : ${mobile.price}`);

mobile.price = 30000;
console.log(mobile);

// Nested Objects
let student = {
    name : 'Rajan',
    age : 25,
    course : 'Engineering',
    address : {
        city : 'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};
console.log(student);
console.log(student.address);

// Access nested Obj properties
console.log(`City : ${student.address.city}`);

// Delete a Property from an Object
console.log(student);
delete student.address;
console.log(student);

// JSON Functions
let employee = {
  name : 'John',
  age : 40,
  designation : 'Manager',
  company : 'Infosys'
};

// Convert Object => String
let empStr = JSON.stringify(employee);
console.log(empStr);

// Convert String => Object
let someStr = '{"name":"John","age":40,"designation":"Manager","company":"Infosys"}';
let theObj = JSON.parse(someStr);
console.log(theObj);




