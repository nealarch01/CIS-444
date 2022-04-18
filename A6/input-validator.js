function validateInput(input_data) {
    const regex = /^[0-9]+$/;
    if(regex.test(input_data)) {
        return true;
    }
    return false;
}

document.getElementById('submit-form-button').addEventListener('click', (event) => {
    if (!validateInput(document.getElementById('input-box').value)) {
        document.getElementById('invalid-input-text').innerHTML = "Invalid number";
        event.preventDefault();
        return false;
    }
});