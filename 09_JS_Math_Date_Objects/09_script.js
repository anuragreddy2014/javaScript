/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
console.log(`Pi Value : ${Math.PI}`);

// Math sqrt
let sqrt = Math.sqrt(144);
console.log(`Sqrt of 144 is : ${sqrt}`);

// find the min of 4 numbers
let min = Math.min(789798,654,55,4,46,4654,49,4616,19,1,891,8);
console.log(`Min value is : ${min}`);

// find the Max of 4 numbers
let max = Math.max(789798,654,55,4,46,4654,49,4616,19,1,891,8);
console.log(`Max value is : ${max}`);

// find the 'x' to the power of 'y' value, ex: 2^4
let pow = Math.pow(2,4);
console.log(`2 ^ 4 is : ${pow}`);

// generate the random numbers from 0 to 100
let random = Math.round(Math.random() * 100000);
console.log(random);

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
let date = new Date();
console.log(date);

// Get proper date
let today = new Date().toLocaleDateString();
console.log(today);

let time = new Date().toLocaleTimeString();
console.log(time);

// get full day of the week using switch statement
let day = new Date().getDay();// 6
let fullday = '';
switch(day){
    case 0:
        fullday = 'Sunday';
        break;
    case 1:
        fullday = 'Monday';
        break;
    case 2:
        fullday = 'Tuesday';
        break;
    case 3:
        fullday = 'Wednesday';
        break;
    case 4:
        fullday = 'Thursday';
        break;
    case 5:
        fullday = 'Friday';
        break;
    case 6:
        fullday = 'Saturday';
        break;
    default:
        fullday = 'no - day';
        break;
}
console.log(`Today is : ${fullday}`);

// Display a Digital Clock on the web page


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */
let minNumber = Number.MIN_SAFE_INTEGER;
console.log(minNumber);

let maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber);

let num1 = 100;
console.log(`value : ${num1} , Type : ${typeof num1}`);

let numStr = num1.toString();
console.log(`value : ${numStr} , Type : ${typeof numStr}`);

numStr = "10.46546454";
let num2 = Number(numStr);
console.log(`value : ${num2} , Type : ${typeof num2}`);


/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */
let msg = "Good Morning";
console.log(`Length : ${msg.length}`);
console.log(`Substr : ${msg.substr(0,4)}`);
console.log(`Substr : ${msg.substr(5)}`);
console.log(`Char : ${msg.charAt(5)}`);

// Example 1 : Count the number of o's
let theStr = "Good Morning";
let countZeros = (str) => {
    let count = 0;
    for(let i = 0; i<str.length-1; i++){
        let ch = str.charAt(i);
        if(ch === 'o'){
            count++;
        }
    }
    return count;
};
console.log(`Count is : ${countZeros(theStr)}`);

// Example 2 : Reverse String
theStr = "Good Morning";
let reverseStr = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i >= 0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
console.log(`The Reverse string : ${reverseStr(theStr)}`);

// Example 3 : isPalindrome
theStr = "ABCBA";
let isPalindrome = (str) => {
    return str === reverseStr(str);
};
console.log(`is Palindrome ? ${isPalindrome(theStr)}`);

// Example 4 : convert to Palindrome
// AB -> ABA
// ABC -> ABCBA
// BAD -> BADAB
theStr = 'BAD';
let convertToPalindrome = (str) => {
    let tempStr = str;
    for(let i= str.length-2; i >= 0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
console.log(`The Palindrome is : ${convertToPalindrome(theStr)}`);

// Example 5 : TriangleOne String
theStr = 'NAVEEN SAGGAM';
let triangleOne = (str) => {
     let tempStr = '';
     for(let i = 1; i<= str.length; i++){
         tempStr += `${str.substr(0,i)} \n`;
     }
     return tempStr;
};
console.log(triangleOne(theStr));

// Example 5 : TriangleTwo String
let addSpace = (number) => {
    let tempSpace = '';
    for(let i=0 ; i<number; i++){
        tempSpace += ' ';
    }
    return tempSpace;
};

theStr = 'NAVEEN SAGGAM';
let triangleTwo = (str) => {
    let tempStr = '';
    for(let i=0; i<=str.length-1; i++){
        tempStr += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempStr;
};
console.log(triangleTwo(theStr));

// Example 5 : TriangleThree String
theStr = 'NAVEEN SAGGAM';
let triangleThree = (str) => {
    let tempStr = '';
    for(let i=str.length; i>=1 ; i--){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};
console.log(triangleThree(theStr));

// Example 6 : TriangleFour String
theStr = 'NAVEEN SAGGAM';
let triangleFour = (str) => {
    let tempStr = '';
    for(let i=str.length-1;i>=0; i--){
        tempStr += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempStr;
};
console.log(triangleFour(theStr));

