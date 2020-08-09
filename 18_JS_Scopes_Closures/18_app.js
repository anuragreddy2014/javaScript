let ab = 10;
let greet1 = () => {
    let a = 20;
    let greet2 = () => {
        let a = 30;
    };
    greet2();
};
console.log(ab);
greet1();

// closures
let a = 10;
let outerFn = () => {
    let b = 20;
    let innerFn = () => {
        let c = 30;
        console.log(a);
        console.log(b);
        console.log(c);
    };
    return innerFn;
};
let greetFn = (callback) => {
    callback();
};
let iFn = outerFn();
greetFn(iFn);