// Calls prompt function to get input from user
function promptUserForNumber() {
    var prompt_result = prompt("Enter a non-negative number"); // save the result into variable
    return parseInt(prompt_result); // call parseInt to convert into into a number
}

// parameters: the valid user input from prompt
function fib(n_input) {
    addRow(0, 0); // write 0,0 into the table
    if (n_input === 0) return;
    addRow(1, 1); // write 1,1 into the table
    if (n_input === 1) return; 
    // end of special cases
    var left_num = 0;
    var right_num = 1;
    for(let i = 2; i < n_input + 1; i++) {
        let temp_result = left_num + right_num;
        left_num = right_num;
        right_num = temp_result;
        addRow(i, temp_result);
    }
}

// writes a new row with n and its corresponding fibonacci number
function addRow(n, fib_number) {
    document.write(`
        <tr>
            <td>${n}</td>
            <td>${fib_number}</td>
        </tr>
    `);
}

function main() {
    var userInput = promptUserForNumber(); // get user input
    if(isNaN(userInput)) { // if value returned was not a valid integer
        return -1; // return -1 to recall main function
    }
    if(userInput < 0) {
        return -1; // return -1 to recall main function
    }
    fib(userInput); // else; if input is valid call fib function
    return 0; // return 0 to not call this function again
}

while(main() !== 0) {
    alert('Invalid input');
}
console.log('End of program'); // printing into browser developer console that the script has ended