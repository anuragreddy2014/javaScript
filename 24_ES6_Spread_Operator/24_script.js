// Spread Operator

// Example 1 to insert the elements of an array in another array
let array1 = [10,20,30];
let array2 = [...array1,40,50];
let array3 = [...array2,60,70,80];
console.log(array3);

// Example 2 : to create a copy of an array
let arr1 = ['html','css','js'];
// let arr2 = arr1.slice(); // Array Function
let arr2 = [...arr1]; // Spread operator
if(arr1 === arr2){
    console.log('Same Copy');
}
else{
    console.log('Separate Copy');
}
console.log(arr2);

// Example 3 : Spread operator with objects
let address = {
    city : 'Hyderabad',
    state : 'TS',
    country : 'India'
};

let student1 = {
    name : 'Rajan',
    age : 22,
    course : 'Engineering',
    ...address
};
console.log(student1);