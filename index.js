#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red("*".repeat(60)));
console.log(chalk.yellow("  \n  \t        WELCOME TO MODIFIED CALCULATOR \n"));
console.log(chalk.red("*".repeat(60)));
const userQuestion = await inquirer.prompt([
    {
        message: chalk.bgGreen("Enter Your First Number"),
        type: "number",
        name: "firstNumber",
    },
    {
        message: chalk.bgCyan("Enter  Your Second Number"),
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Select the one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: [
            "Addition",
            "Substraction",
            "Multiplication",
            "Division",
            "Exponentiation",
            "Modulus",
        ],
    },
]);
// console.log(userQuestion)
if (userQuestion.operator === "Addition") {
    console.log(chalk.bgGreen(userQuestion.firstNumber + userQuestion.secondNumber));
}
else if (userQuestion.operator === "Substraction") {
    console.log(chalk.bgMagenta(userQuestion.firstNumber - userQuestion.secondNumber));
}
else if (userQuestion.operator === "Multiplication") {
    console.log(chalk.bgCyan(userQuestion.firstNumber * userQuestion.secondNumber));
}
else if (userQuestion.operator === "Division") {
    console.log(chalk.bgRed(userQuestion.firstNumber / userQuestion.secondNumber));
}
else if (userQuestion.operator === "Exponentiation") {
    console.log(chalk.bgGreenBright(userQuestion.firstNumber ** userQuestion.secondNumber));
}
else if (userQuestion.operator === "Modulus") {
    console.log(chalk.bgCyan(userQuestion.firstNumber % userQuestion.secondNumber));
}
console.log(chalk.bgRed("Thank You For Using"));
