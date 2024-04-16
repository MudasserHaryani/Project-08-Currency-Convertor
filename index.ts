#! /usr/bin/env node

import inquirer from "inquirer";

interface Currency {
    [key: string]: number;
  }
const currency: Currency = {
    USD: 1,
    EUR: 0.88, // Placeholder EUR rate
    GBP: 0.73, // Placeholder GBP rate
    INR: 75.14, // Placeholder INR rate
    PKR: 280, // Placeholder PKR rate
    AUD: 1.30, // Placeholder AUD rate
    CAD: 1.25, // Placeholder CAD rate
    JPY: 115.50, // Placeholder JPY rate
    CNY: 6.42, // Placeholder CNY rate
    AED: 3.67, // Placeholder AED rate
    AFN: 85.50, // Placeholder AFN rate
    ALL: 102.20, // Placeholder ALL rate
    AMD: 480.20, // Placeholder AMD rate
    ANG: 1.80, // Placeholder ANG rate
    AOA: 790.50, // Placeholder AOA rate
    ARS: 103.80, // Placeholder ARS rate
    OMR: 0.38, // Placeholder OMR rate
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



