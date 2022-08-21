// calculating expenses and balance
document.getElementById("calculate-btn").addEventListener("click", function () {
    /* Total Income */
    const incomeInputFieldValue = getInputValue("incomeInput", "Income");

    /* Total Expenses*/
    // get food input value
    const foodInputField = getInputValue("foodInput", "Food");
    // get rent input value
    const rentInputField = getInputValue("rentInput", "Rent");
    // get clothes input value
    const clothesInputField = getInputValue("clothesInput", "Clothes");

    // calculate total expenses
    const additionTotalExpenses =
        foodInputField + rentInputField + clothesInputField;

    // calculate total balance
    const totalBalance = incomeInputFieldValue - additionTotalExpenses;

    // checking income is less than total expenses or not
    if (incomeInputFieldValue < additionTotalExpenses) {
        alert("Total Expenses greater than Income!");
    } else {
        // get total expenses
        getTotal("total-expenses", additionTotalExpenses);
        // get total balance
        getTotal("total-balance", totalBalance);
    }
});

// saving calculating
document
    .getElementById("savingCalculate")
    .addEventListener("click", function () {
        // get income value
        const incomeValue = getInputValue("incomeInput", "Income");
        // get percentage input value
        const percentageValue = getInputValue("percentageBtn", "Percentage");

        // checking percentage input value greater than 100 or not
        if (percentageValue > 100) {
            alert("Please Provide Percentage Value Greater Than 100");
        } else {
            // get saving amount
            const savingAmount = (incomeValue * percentageValue) / 100;
            getTotal("savingAmount", savingAmount);

            /* get remaining balance */
            // get total balance
            const totalBalance = getTotal("total-balance");
            const remainingBalance = totalBalance - savingAmount;
            getTotal("remainingBalance", remainingBalance);
        }
    });
