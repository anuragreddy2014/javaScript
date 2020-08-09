// Normal Functions
function normalFn() {
    console.log('Iam from Normal Function');
}
normalFn();

// Function Expression
let functionExp = function() {
    console.log('Iam from Function Expression');
};
functionExp();

// Arrow Function
let arrowFn = () => {
    console.log('Iam from Arrow Function');
};
arrowFn();

// Example 1
let technologies = ['html','css','javascript'];

// Arrow Function
technologies.forEach((value) => {
    console.log(value);
});

// Limitation of Arrow Function
// Arrow function should not be used inside an object with this keyword
let student = {
    firstName: 'Arjun',
    lastName : 'Reddy',
    fullName : function(){
        return `${this.firstName} ${this.lastName}`;
    },
    dob : '12-12-1990',
    getDOB : () => {
        // return this.dob; // not used
        return student.dob;
    }
};
console.log(student.fullName());
console.log(student.getDOB());