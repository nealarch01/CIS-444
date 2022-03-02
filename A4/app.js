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


// input has to be input checked before passing the parameter
function updateFruits(key, input) {
    if (typeof(input) === 'string') input = parseInt(input);
    if (!Fruits.has(key)) return;
    Fruits.get(key).quantity = input;
}

const MainForm = document.getElementById('main-form');

// using JavaScript ES6 arrow for event handler function
MainForm.addEventListener('input', (event) => {
    var inputBoxID = event.target.getAttribute('id'); // get the ID (which is the fruit name) of the text box
    if(!isInputValid(event.target.value)) {
        if(event.target.value === '') resetInputbox(document.getElementById(inputBoxID));
        else setInputBoxInvalid(document.getElementById(inputBoxID));
        updateFruits(inputBoxID, 0); // set to zero to not charge user if input is invalid
    } else {
        updateFruits(inputBoxID, event.target.value);
        setInputBoxValid(document.getElementById(inputBoxID));
    }
});

// event listener that handles if the submit button is pressed
MainForm[MainForm.length - 1].addEventListener('click', () => {
    // console.log('Button was clicked');
    alert(`Your total is: ${calculateTotal()}`)
    MainForm.onsubmit = () => {
        return false;
    }
});

// onsubmit, prevent false to not submit
MainForm.onsubmit = () => {
    return false;
}