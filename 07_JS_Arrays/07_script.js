// creation of arrays
let array  = [10,20,30,40,50];

// Accessing an array and its properties
console.log(array);

console.log(`prop : ${array[0]}`); // 10
console.log(`prop : ${array[100]}`); // undefined

// adding properties to an array
array[5] = 60;
console.log(array);

// Accessing length of an Array
console.log(`Length : ${array.length}`);

// reverse the array using reverse()
array  = [10,20,30,40,50];
console.log(array);
array.reverse();
console.log(array);

// Remove the first value of the array: shift()
array  = [10,20,30,40,50];
console.log(array);
array.shift();
console.log(array);

// Add value to front of the array:unshift()
array  = [10,20,30,40,50];
console.log(array);
array.unshift(60);
console.log(array);

// Remove the last value of the array: pop()
array  = [10,20,30,40,50];
console.log(array);
array.pop();
console.log(array);

// Add value the end of the array: push()
array  = [10,20,30,40,50];
console.log(array);
array.push(60);
console.log(array);

// Remove an element from an Array , Arguments: colors.splice(pos,n):
// 1: splice(index)
array  = [10,20,30,40,50];
console.log(array);
array.splice(2);
console.log(array);

// 2: splice(index,noOf Elements)
array  = [10,20,30,40,50];
console.log(array);
array.splice(1,2);
console.log(array);

// 3: splice(index,1,replaceElement)
array  = [10,20,30,40,50];
console.log(array);
array.splice(2,1,'test');
console.log(array);

// Create a copy of an array. Typically assigned to a new variable:slice();
let array1 = ['html','css','Javascript'];
let array2 = array1.slice();
array1.splice(2);
console.log(array2);

// indexOf()
array = ['html','css','javascript'];
console.log(`value : ${array[0]}`); // html
console.log(`Index : ${array.indexOf('bootstrap')}`); // 0


// Join()
array = ['html','css','javascript'];
console.log(array);
let theStr = array.join(' - ');
console.log(theStr);


// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// for-loop
let technologies = ['html','css','javascript','bootstrap'];
let output = '';
for(let i =0 ; i < technologies.length; i++){
    output += `${technologies[i].toUpperCase()} `;
}
console.log(output);

// for - in loop ES5
output = '';
for(let index in technologies){
    output += `${technologies[index].toUpperCase()} `;
}
console.log(output);

// for-of loop ES6
output = '';
for(let value of technologies){
    output += `${value.toUpperCase()} `;
}
console.log(output);

// forEach Function
output = '';
technologies.forEach(function(element) {
    output += `${element.toUpperCase()} `;
});
console.log(output);

// Arrow Function ES6
output = '';
technologies.forEach(element => {
    output += `${element.toUpperCase()} `;
});
console.log(output);

// array of Objects
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
// Filter
let seniorEmployees = employees.filter(function(employee) {
    return employee.age >= 35;
});
console.log(seniorEmployees);