document.getElementById("calculate-btn").addEventListener("click", function () {
    /* Total Income */
    // get income input field
    const incomeInputField = document.getElementById("incomeInput");
    const incomeInputFieldString = incomeInputField.value;
    // string to number
    const incomeInputFieldValue = parseInt(incomeInputFieldString);
    console.log(incomeInputFieldValue);

    /* Total Expenses*/
    // get food input value
    const foodInputField = getExpensesInputValue("foodInput");
    // get rent input value
    const rentInputField = getExpensesInputValue("rentInput");
    // get clothes input value
    const clothesInputField = getExpensesInputValue("clothesInput");

    // get total expenses
    const totalExpenses = getTotal("total-expenses");
    // get total balance
    const totalBalance = getTotal("total-balance");
});
