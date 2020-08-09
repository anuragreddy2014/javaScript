// Exception Handling
/*
    Reference Error
    Type Error
    Syntax Error
    URI Error

    try -> problematic Code
    catch -> Handling the Error
    finally -> this executes irrespective of an exception
    throw -> throw new Exception / User defined Exception

*/

try {
    // greet(); // ReferenceError
   // null.greet(); // TypeError: Cannot read property 'greet' of null
   // Let b = 100; // SyntaxError: Unexpected identifier
    console.log(a);
}
catch(e) {
    //console.log(e);
    throw new Error('User Error : Data is not defined Dude!!');
}
finally {
    console.log('Iam from finally block');
}

console.log('Good Morning');
