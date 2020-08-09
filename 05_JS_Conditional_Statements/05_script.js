// If Else condition Example
let age = 28;
let gotJob = false;
if(age <= 30 && gotJob){
    console.log('Enjoy the bachelor Life');
}
else if(age >= 30 && gotJob){
    console.log('Get Marry First');
}
else if(age >= 30 && !gotJob){
    console.log('Search for Job as well as partner');
}
else{
    console.log('Please join a course in Ameerpet');
}

// For loop Example to display from 0 - 10 values
let output = '';
for(let i = 0; i<= 10; i++){
    if(i <= 9){
        output += `${i} , `;
    }
    else{
        output += `${i} `;
    }
}
console.log(output);

// print the values from 20 - 0 diff 2
output = '';
for(let i = 20; i>=0 ; i -= 2){
    if(i > 0){
        output += `${i} , `;
    }
    else{
        output += `${i} `;
    }
}
console.log(output);

// Print 10 Starts
let numberOfStars = 9;
output = '';
for(let i = 1; i<= numberOfStars; i++){
    for(let j = 1; j <= i; j++){
        output += '*';
    }
    output += '\n';
}
console.log(output);

// Print the Numbers
let theNumber = 9;
output = '';
for(let i = 1; i<= theNumber; i++){
    for(let j = 1; j <= i; j++){
        output += i;
    }
    output += '\n';
}
console.log(output);

// While loop Example to display from 0 - 10 values
// print 0 - 10
output = '';
let  i = 0;
while(i <= 10){
    if(i <= 9){
        output += `${i} - `;
    }
    else{
        output += `${i} `;
    }
    i++;
}
console.log(output);
// Print 20 - 0
output = '';
i = 20;
while(i >= 0){
    if(i > 0){
        output += `${i} - `;
    }
    else{
        output += `${i} `;
    }
    i-= 2;
}
console.log(output);

// Print Stars
numberOfStars = 9;
output = '';
i = 1;
while(i<= numberOfStars){
    let j = 1;
    while(j <= i){
        output += '*';
        j++;
    }
    i++;
    output += '\n';
}
console.log(output);

// Print Numbers
theNumber = 9;
output = '';
i = 1;
while(i<= theNumber) {
    let j = 1;
    while(j <= i){
        output += i;
        j++;
    }
    i++;
    output += '\n';
}
console.log(output);

// Do while loop Example to display from 1 - 10 values
// Print 0 - 10
output = '';
i = 0; // initialization
do{
    // logic
    if(i <= 9){
        output += `${i} * `;
    }
    else{
        output += `${i} `;
    }
    i++; // increment
}
while(i <= 10); // condition
console.log(output);

// Print 20 - 0
output = '';
i = 20;
do{
    if(i > 0){
        output += `${i} * `;
    }
    else{
        output += `${i} `;
    }
    i-= 2;
}
while(i >= 0);
console.log(output);

// Print Stars
numberOfStars = 9;
output = '';
i = 1;
do{
    let j = 1;
    do{
        output += '*';
        j++;
    }
    while(j <= i);
    i++;
    output += '\n';
}
while(i<= numberOfStars);
console.log(output);

// Print Numbers
theNumber = 9;
output = '';
i = 1;
do{
    let j = 1;
    do{
        output += i;
        j++;
    }
    while(j <= i);
    i++;
    output += '\n';
}
while(i<= theNumber);
console.log(output);

// Switch Statement Example
let day = new Date().getDay();
let fullDay = '';
switch(day){
    case 0:
        fullDay = 'SUNDAY';
        break;
    case 1:
        fullDay = 'Monday';
        break;
    case 2:
        fullDay = 'Tuesday';
        break;
    case 3:
        fullDay = 'Wednesday';
        break;
    case 4:
        fullDay = 'Thursday';
        break;
    case 5:
        fullDay = 'Friday';
        break;
    case 6:
        fullDay = 'Saturday';
        break;
    default:
        fullDay = '';
        break;
}
console.log(`Today is : ${fullDay}`);