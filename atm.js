import inquirer from "inquirer";
let mybalance = 10000;
let mypin = 5293;
let pinanswer = await inquirer.prompt([
    {
        name: "MyPincode",
        type: "input",
        message: "Enter Your Password"
    }
]);
if (pinanswer.MyPincode == mypin) {
    console.log("Welcome");
    let Operation = await inquirer.prompt({
        name: "operation",
        type: "list",
        choices: ["WITHDRAW", "Check Balance"],
        message: "Select The Option  "
    });
    if (Operation.operation === "WITHDRAW") {
        let Money = await inquirer.prompt({
            name: "Amount",
            type: "list",
            message: "Amount You Want To WithDraw",
            choices: ["500", "1000", "5000", "10000", "Other"]
        });
        if (Money.amount === "other") {
            let cash = await inquirer.prompt([{
                    name: "other",
                    type: "number",
                    message: "Enter The Amount You Want To Withdraw"
                }]);
        }
        mybalance -= Money.Amount;
        console.log("Your Remaning Balance Is:" + mybalance);
    }
    else if (Operation.operation === "Check Balance") {
        console.log("Your Current Balance Is:" + mybalance);
    }
}
else {
    console.log("Wrong PIN");
}
