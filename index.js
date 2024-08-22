import inquirer from "inquirer";
let result = await inquirer.prompt({
    name: "as",
    type: "confirm",
    message: "Check more",
    default: true
});
async function calcultor(val) {
    if (val) {
        let weight = await inquirer.prompt({
            name: "weights",
            type: "number",
            message: "Enter your weight"
        });
        let height = await inquirer.prompt({
            name: "heights",
            type: "number",
            message: "Enter your height"
        });
        let BMI = weight.weights / height.heights ** 2;
        console.log(BMI);
    }
}
calcultor(result.as);
