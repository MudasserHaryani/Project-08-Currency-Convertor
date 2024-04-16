#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.88,
    GBP: 0.73,
    INR: 75.14,
    PKR: 280,
    AUD: 1.30,
    CAD: 1.25,
    JPY: 115.50,
    CNY: 6.42,
    AED: 3.67,
    AFN: 85.50,
    ALL: 102.20,
    AMD: 480.20,
    ANG: 1.80,
    AOA: 790.50,
    ARS: 103.80, // Placeholder ARS rate
};
async function main() {
    let user_answer = await inquirer.prompt([
        {
            name: "from",
            message: "Enter From Currency",
            type: "list",
            choices: Object.keys(currency),
        },
        {
            name: "to",
            message: "Enter To Currency",
            type: "list",
            choices: Object.keys(currency),
        },
        {
            name: "amount",
            message: "Enter your amount",
            type: "number",
        },
    ]);
    let fromAmount = currency[user_answer.from];
    let toAmount = currency[user_answer.to];
    let amount = user_answer.amount;
    let baseAmount = amount / fromAmount; //USD base amount
    let convertedAmount = baseAmount * toAmount;
    console.log(convertedAmount);
}
main();
