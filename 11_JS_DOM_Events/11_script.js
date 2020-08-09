let textBox = document.querySelector('#username');
let spanTag = document.querySelector('#span');

let getData = () => {
    let textEntered = textBox.value;
    spanTag.textContent = reverseStr(textEntered);
    if(textEntered === 'naveen'){
        textBox.style.backgroundColor = 'lightgreen';
        textBox.style.borderColor = 'green';
        textBox.style.boxShadow = "0 0 10px green";
    }
    else{
        textBox.style.backgroundColor = 'lightsalmon';
        textBox.style.borderColor = 'red';
        textBox.style.boxShadow = "0 0 10px red";
    }
};

let reverseStr = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i >= 0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};

// SMS App
let textAreaBox = document.querySelector('#text-area');
let countElement = document.querySelector('#word-count');
let wordCount = 100;
textAreaBox.addEventListener('keyup',function() {
    let textEnteredLength = textAreaBox.value.length;
    countElement.textContent = (wordCount - textEnteredLength).toString();
});

// Show Password
let passwordBox = document.querySelector('#password');
let checkBox = document.querySelector('#checkbox');

checkBox.addEventListener('change',function() {
    let theType = passwordBox.getAttribute('type');
    if(theType === 'password'){
        passwordBox.setAttribute('type','text');
    }
    else{
        passwordBox.setAttribute('type','password');
    }
});


// Select Box
let cars = [
    {
        id : 1,
        name : 'Maruthi Suzuki'
    },
    {
        id : 2,
        name : 'Maruthi NEXA'
    },
    {
        id : 3,
        name : 'Mahindra'
    }
];
let models = [
    {
        car_id:1,
        name : 'Swift'
    },
    {
        car_id:1,
        name : 'Brezza'
    },
    {
        car_id:1,
        name : 'Dzire'
    },
    {
        car_id:2,
        name : 'Baleno'
    },
    {
        car_id:2,
        name : 'Scross'
    },
    {
        car_id:2,
        name : 'Ignis'
    },
    {
        car_id:3,
        name : 'Bolero'
    },
    {
        car_id:3,
        name : 'Scorpio'
    },
    {
        car_id:3,
        name : 'XUV 500'
    }

];
let carSelectBox = document.querySelector('#car-select');
let modelSelectBox = document.querySelector('#model-select');
let optionsTag = '<option>Select a Car</option>';
cars.forEach((car) => {
    optionsTag += `<option value="${car.id}">${car.name}</option> \n`;
});
carSelectBox.innerHTML = optionsTag;

carSelectBox.addEventListener('change',function() {
    let newOptions = '';
    let car_id = Number(carSelectBox.value);
    let selectedModels = models.filter((model) => {
        return model.car_id === car_id;
    });
    selectedModels.forEach((model) => {
        newOptions += `<option value="${model.car_id}">${model.name}</option> \n`;
    });
    modelSelectBox.innerHTML = newOptions;
});

