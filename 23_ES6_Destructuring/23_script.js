let student = {
    name : 'Rajan',
    age : 22,
    course : 'Engineering',
    address : {
        city : 'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};

// De-structuring in ES6
let { name , age , course } = student;

console.log(`Name : ${name} 
             Age : ${age}
             course : ${course}`);

// De-structuring in ES6
let { city } = student.address;
console.log(`City : ${city}`);

// Swap two variables
let a = 10;
let b = 20;
/* let temp = a;
a = b;
b = temp; */
[a , b] = [b , a];
console.log(`A: ${a} B: ${b}`);
