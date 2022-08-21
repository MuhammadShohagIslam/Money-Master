function getExpensesInputValue(input) {
    // get input field
    const inputField = document.getElementById(input);
    // get input value as string
    const inputString = inputField.value;
    // get input value as a number
    const inputFieldValue = parseFloat(inputString);
    return inputFieldValue;
}

function getTotal(txtField){
    // get text field
    const textField = document.getElementById(txtField);
    // get input value as string
    const textFieldString = textField.innerText;
    // get input value as a number
    const textFieldValue = parseFloat(textFieldString);
    return textFieldValue;
}
