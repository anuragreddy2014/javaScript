/*let a = () =>{
    console.log('Iam from a function');
};
let  y = (callback) => {
    callback();
    console.log('Iam from Y function');
};
y(a);

//Actual Callback Functions
let sum = (a , b) => {
    return a + b;
};

let mul = (a , b) => {
    return a * b;
};

let calculate = (a , b , callback) => {
   return callback(a , b);
};
console.log(calculate(10,20,sum));
console.log(calculate(10,20,mul));
console.log(calculate(10,20,(a, b) => {
    return a - b;
}));

// Callback Function Example
let employees = [
    {
        name : 'John',
        age : 40,
        desg : 'Manager',
        active : true
    },
    {
        name : 'Williams',
        age : 35,
        desg : 'Sr. TechLead',
        active : false
    },
    {
        name : 'Rajan',
        age : 25,
        desg : 'Software Engg',
        active : true
    },
    {
        name : 'Laura',
        age : 23,
        desg : 'Software Engg',
        active : false
    }
];

let activeEmployees = employees.filter((employee) => {
    return employee.active;
});
console.log(activeEmployees);

let inActiveEmployees = employees.filter((employee) => {
    return !employee.active;
});
console.log(inActiveEmployees);

let seniorEmployees = employees.filter((employee)=> {
    return employee.age >= 35;
});
console.log(seniorEmployees);

let juniorEmployees = employees.filter((employee)=> {
    return employee.age < 35;
});
console.log(juniorEmployees);*/


// Arrow Functions

