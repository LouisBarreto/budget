let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0
    
//Weekley Expense for Loop
for (let i = 0; i < weeklyExpenseQuestions.length; i++){
    let stringAnswer = window.prompt(weeklyExpenseQuestions[i]);
    let numberAnswer = parseFloat(stringAnswer); 
    console.log(numberAnswer);
    weeklyExpenses = weeklyExpenses + numberAnswer;
}

//Monthly Expense for loop
for (let i = 0; i < monthlyExpenseQuestions.length; i++){
    let stringAnswer = window.prompt(monthlyExpenseQuestions[i]);
    let numberAnswer = parseFloat(stringAnswer); 
    console.log(numberAnswer);
    monthlyExpenses = monthlyExpenses + numberAnswer;
}

// Annual Expense for loop

for (let i = 0; i<annualExpensesQuestions.length; i++){
    let stringAnswer = window.prompt(annualExpenseQuestions[i]);
    let numberAnswer = parseFloat(stringAnswer);
    console.log(numberAnswer);
    annualExpenses = annualExpenses + numberAnswer;

}