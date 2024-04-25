#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance = 10000;
let mypin = 5293;
let pinAnswer = await inquirer.prompt([
    {
        name: "MyPincode",
        type: "number",
        message: "Enter Your Password"
    }
]);
if (pinAnswer.MyPincode === mypin) {
    console.log("Welcome");
    let Operation = await inquirer.prompt({
        name: "operation",
        type: "list",
        choices: ["WITHDRAW", "Check Balance"],
        message: "Select The Option  "
    });
    if (Operation.operation === "WITHDRAW") {
        let money = await inquirer.prompt({
            name: "Amount",
            type: "list",
            message: "Amount You Want To WithDraw",
            choices: ["500", "1000", "5000", "10000", "other"]
        });
        if (money.Amount == 'other') {
            let otherWithdraw = await inquirer.prompt({
                name: "WithdrawAmount",
                type: "number",
                message: "Enter The Amount You Want To Withdraw"
            });
            mybalance -= otherWithdraw.WithdrawAmount;
            console.log("Your Remaning Balance Is:" + mybalance);
        }
        else {
            mybalance -= money.Amount;
            console.log("Your Remaning Balance Is:" + mybalance);
        }
    }
    else if (Operation.operation === "Check Balance") {
        console.log("Your Current Balance Is:" + mybalance);
    }
}
else {
    console.log("Wrong PIN");
}
