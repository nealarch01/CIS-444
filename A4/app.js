const Fruits = new Map(); // map data structure that will hold fruit objects

// Fruit object is as follows:
/*
    FruitType: {
        quantity: number,
        price: number
    }
*/

// put all fruits into the map
Fruits.set('apple', {
    quantity: 0,
    price: 0.89
});

Fruits.set('orange', {
    quantity: 0,
    price: 0.69
});

Fruits.set('banana', {
    quantity: 0,
    price: 0.49
});

// function validates input string using regular expression
function isInputValid(input) {
    const input_regex = /^([0]+)?\d{1,2}$/;
    // regex explanation:
    // ^ $ together matches entire line rather than characters // ^ matches beginning of string // $ matches end of string
    // optional one or more zeroes at the front of the string
    // decimals (0 - 9) where n > 0 and n < 3
    if (!input_regex.test(input)) return false;
    return true;
}

function calculateSubTotal() {
    var subTotal = 0;
    Fruits.forEach((element) => {
        subTotal += (element.quantity * element.price);
    });
    // console.log(subTotal);
    return subTotal;
}

function calculateTotal() {
    const taxRate = (7.75 / 100) + 1;
    var total = calculateSubTotal() * taxRate;
    return total.toFixed(2);
}

// function that sets the input box border color to red when an input that doesn't match regular expression is typed into input box
function setInputBoxInvalid(doc_obj) {
    doc_obj.style.borderColor = '#FF3131';
}

// function that sets the input box border color to green when an input that matches regular expression is typed into the input box
function setInputBoxValid(doc_obj) {
    doc_obj.style.borderColor = '#66FF00';
}

// function that sets the input box to black if there is no input
function resetInputbox(doc_obj) {
    doc_obj.style.borderColor = 'black';
}


// input has to be input checked before passing the parameter
function updateFruits(key, input) {
    if (typeof(input) === 'string') input = parseInt(input);
    if (!Fruits.has(key)) return;
    Fruits.get(key).quantity = input;
}

const MainForm = document.getElementById('main-form');

// using JavaScript ES6 arrow for event handler function
// event listener to handle when a typed input is detected in one of the input boxes
MainForm.addEventListener('input', (event) => {
    var inputBoxID = event.target.getAttribute('id'); // get the ID (which is the fruit name) of the text box
    // event.target is the reference to the element whose event was triggered
    if(!isInputValid(event.target.value)) { // check if the input inside the text box is avlid
        if(event.target.value === '') resetInputbox(document.getElementById(inputBoxID)); // if the string is empty, instead of setting borderColor to red, turn it to black (default color)
        else setInputBoxInvalid(document.getElementById(inputBoxID)); // otherwise, if invalid input (not an empty string), set border color to red
        updateFruits(inputBoxID, 0); // set to zero to not charge user if input is invalid, we will not charge anything for invalid inputs (including empty string)
    } else {
        updateFruits(inputBoxID, event.target.value); // since the input is valid, set the fruit quantity on the map to that of the input entered
        setInputBoxValid(document.getElementById(inputBoxID)); // make input box color green
    }
});

// event listener that handles when the submit button is pressed
MainForm[MainForm.length - 1].addEventListener('click', () => {
    // console.log('Button was clicked');
    alert(`Your total is: ${calculateTotal()}`)
});

// onsubmit, return false to prevent submission of form data
MainForm.onsubmit = () => {
    return false;
}