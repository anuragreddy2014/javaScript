// Get the HTML Elements
let numberBox = document.querySelector('#number');
let h1Tag = document.querySelector('#text-number');
let array = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];


// Event Listener
numberBox.addEventListener('keyup',function() {
    let numberEntered = numberBox.value;
    h1Tag.textContent = convertWordString(numberEntered);
});

let convertWordString = (number) => {
    let tempStr = '';
    let theStr = number.toString();
    for(let i=0; i<theStr.length; i++){
        let digit = Number(theStr.charAt(i));
        tempStr += `${array[digit]} `;
    }
    return tempStr;
};
