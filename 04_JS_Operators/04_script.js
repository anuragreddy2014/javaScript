// Assignment operator =
let name = 'John';
console.log(`Name : ${name}`);

// Arithmetic operators + - * / , %
let num1 = 100;
let num2 = 20;
console.log(`Addition : ${num1 + num2}`);
console.log(`Subtraction : ${num1 - num2}`);
console.log(`Multiplication : ${num1 * num2}`);
console.log(`Division : ${num1 / num2}`);
console.log(`Remainder : ${100 % 20}`);

// Example 1
let theNumber = 121;
if(theNumber % 2 === 0){
    console.log(`Its an Even number`);
}
else{
    console.log(`Its an Odd number`);
}

// Short hand math += , -= , *= , /=
let firstNumber = 30;
let secondNumber = 20;
let add = 10;
add = add + (firstNumber + secondNumber);
add += (firstNumber + secondNumber);
console.log(`Add Value : ${add}`);

// Conditional operators < , > , <= , >= , !=
// Range 15 - 25
let theValue = 18;
if(theValue >= 15 && theValue <= 25){
    console.log(`${theValue} is in Range`);
}
else{
    console.log(`${theValue} is NOT in Range`);
}

// Unary Operator ++ , --
let someNumber = 100;
someNumber = someNumber + 1;
someNumber += 1;
someNumber++;
console.log(`SomeNumber ${someNumber}`);

// Logical operators AND && , OR ||
let haveLaptop = true;
let isClass = false;
if(isClass && haveLaptop){
    console.log('Allowed inside the class');
}
else{
    console.log('Not Allow Inside the Class');
}

let inRelation = true;
let parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log('Get Marry Soon');
}
else{
    console.log('Wait until the parents Agreed');
}

// String Concatenation / Append Operator (+)
let empName = 'John';
let empAge = 40;
console.log("Hello " + empName + " You are " + empAge + " Yrs Old");
console.log(`Hello ${empName} You are ${empAge} Yrs Old`);

// Ternary operator (? :)
// Using If-else
let score = 70;
let message = '';
if(score >= 35){
    message = 'You Passed the Exam';
}
else{
    message = 'You Failed the Exam';
}
console.log(message);

// Using Ternary Operator
score = 55;
(score >= 35) ? message = 'You Passed' : message = 'You Failed';
console.log(message);

// Type of operator
let myScore = 100;
console.log(`Value => ${myScore} , Type ${typeof myScore}`);

// == operator
num1 = 10;
num2 = "10";
if(num1 == num2){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}

// === operator
num1 = 10;
num2 = "10";
if(num1 === num2){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}