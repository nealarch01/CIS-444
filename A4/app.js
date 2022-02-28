const Fruits = new Map();

Fruits.set('apple', {
    'quantity': 0,
    'price': 0.89
});

Fruits.set('orange', {
    'quantity': 0,
    'price': 0.69
});

Fruits.set('banana', {
    'quantity': 0,
    'price': 0.49
});


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

function setInputBoxInvalid(doc_obj) {
    doc_obj.style.borderColor = '#FF3131';
}

function setInputBoxValid(doc_obj) {
    doc_obj.style.borderColor = '#66FF00';
}

function resetInputbox(doc_obj) {
    doc_obj.style.borderColor = 'black';
}

const submitButton = document.getElementById('submit-button');
const applesInput = document.getElementById('apples-input');
const orangesInput = document.getElementById('oranges-input');
const bananasInput = document.getElementById('bananas-input');

// using es6 arrows for event handler functions
applesInput.addEventListener('input', (event) => {
    // check if text inside text box is valid
    if (!isInputValid(applesInput.value)) { // not valid
        Fruits.get('apple').quantity = 0; // set quantity of fruit to 0
        // ternary operator // if empty then set text box border color to be black // otherwise, set to red (invalid input)
        (applesInput.value === '') ? resetInputbox(applesInput) : setInputBoxInvalid(applesInput); 
        return;
    }
    setInputBoxValid(applesInput);
    Fruits.get('apple').quantity = parseInt(applesInput.value);
});

// oranges text box
orangesInput.addEventListener('input', (event) => {
    if (!isInputValid(orangesInput.value)) {
        Fruits.get('orange').quantity = 0;
        (orangesInput.value === '') ? resetInputbox(orangesInput) : setInputBoxInvalid(orangesInput);
        return;
    }
    setInputBoxValid(orangesInput);
    Fruits.get('orange').quantity = parseInt(orangesInput.value)
});

// bananas text box
bananasInput.addEventListener('input', (event) => {
    if (!isInputValid(bananasInput.value)) {
        Fruits.get('banana').quantity = 0;
        (bananasInput.value === '') ? resetInputbox(bananasInput) : setInputBoxInvalid(bananasInput);
        return;
    }
    setInputBoxValid(bananasInput);
    Fruits.get('banana').quantity = parseInt(bananasInput.value);
});


// event listener for submit button
document.getElementById('submit-button').addEventListener('click', () => {
    alert(`Your total is: ${calculateTotal()}`);
    return false; // return false to not submit form
});