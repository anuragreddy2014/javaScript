// for-in from ES5
// for-of from ES6
const technologies = ['html','css','javascript'];

// for-in ES5
for(let index in technologies){
    let value = technologies[index];
    console.log(value);
}

// for-of ES6
for(let value of technologies){
    console.log(value);
}