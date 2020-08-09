/*
  1) Simple Functions ,
  2) args functions ,
  3) return values ,
  4) function expressions ,
  5) functions as arguments
  6) functions inside an object
  7) Nested Objects with functions ,
  8) default args
*/

// preparing chicken curry
function glassBowl(rawChicken,masala) {
    let marinatedChicken = `${rawChicken} ${masala}`;
    console.log('preparing marinated Chicken');
    return marinatedChicken;
}
function cookingPan(marinatedChicken) {
    console.log('Cooking the Chicken');
    let cookedChicken = `Cooked : ${marinatedChicken}`;
    return cookedChicken;
}
function plate(cookedChicken,rice) {
    console.log(`Eating the ${cookedChicken} with Rice : ${rice}`);
}

let rawChicken = '1Kg Chicken';
let masala = 'garlic pepper';
let marinatedChicken = glassBowl(rawChicken,masala); // function call
let cookedChicken = cookingPan(marinatedChicken);
let rice = '2kg';
plate(cookedChicken,rice);

// Function without parameters
function greet() {
    console.log('Iam a no-param function');
}
greet();

// Function with parameters
function greetArgs(name) {
    console.log(`Good Morning ${name}`);
}
greetArgs('John');

// Function with more parameters
function greetMoreArgs(name , age , designation) {
    console.log(`Name : ${name}
                 Age : ${age}
                 Designation : ${designation}`);
}
greetMoreArgs('John',40,'Manager');

// Function with object as a parameter
function greetEmployee(employee) {
    console.log(`Name : ${employee.name}
                 Age ${employee.age}
                 Designation : ${employee.designation}`);
}
let employeeObj = {
    name : 'Williams',
    age : 35,
    designation: 'Tech Lead'
};
greetEmployee(employeeObj);

// Function with return statement
function printEmployee(employee) {
    let theMsg = `Emp Name : ${employee.name}
                  Emp Age : ${employee.age}
                  Emp Desg : ${employee.designation}`;
    return theMsg;
}
let theMsg  = printEmployee(employeeObj);
console.log(theMsg);

// Function Expression
let wishMsg = function () {
    return "Good Evening";
};
let wish = wishMsg();
console.log(wish);

// Functions inside an Object
let student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
let theStudent = student.fullName();
console.log(theStudent);

// Callback functions
let sum = function(a , b) {
    return a + b;
};
let mul = function(a , b) {
    return a * b;
};

let calculate = function(a , b , fName){
    return fName(a , b);
};
let addition = calculate(10 , 20 , sum);
console.log(addition);

// Arrow Functions

// Normal Function
function greetMe1() {
    console.log('Iam greetMe1 Function');
}
greetMe1();

// Function Expression
let greetMe2 = function() {
    console.log('Iam greetMe2 Function');
};
greetMe2();

// Arrow Function
let greetMe3 = () => {
    console.log('Iam greetMe3 Function');
};
greetMe3();

// Function inside another Function Nested Functions
let outerFn = () => {
    console.log('Iam from Outer Fn');
    let innerFn = () => {
        console.log('Iam from Inner Fn');
    };
    innerFn();
};
outerFn();
