const prompt = require('prompt-sync')();

const gravityFactors = require('./utils/earthGravityFactors.js');

const gravityFactors = require('./utils/alienGravityFactors.js');

function showUserFactors(type, value) { 

    let results = {};

    let mesurement;

    for (let planet in gravityFactors) {
        results[planet] = parseFloat(( gravityFactors[planet] * value ).toFixed(2));
    }

    switch (type) { 
        case "jump":
            measurement = "cm";
            break;
        case "weight":
            measurement = "kg";
            break;
        default:
            measurment = "units"
            
    }
    for (let planet in results) {
        console.log(`Your ${type} on ${planet} is ${results[planet]} ${mesurement}`);
    }
}
function getUserInput() { 
    console.log("Enter your measurement type ('jump' or 'weight')");
    const validWords = ["jump", "weight"];
    while(true) {
        console.log("enter 'jump' or 'weight'");
        let match = false
        for (let i = 0; i < validWords.length; i++) {
            if (type === validWords[i]) {match = true;
            break;
            }
            else {
                console.log("Thats not valid");
            }
        }
            break;
    }
    const systems = ["metric", "imperial"];

    while (true) {
        console.log("enter 'jump' or 'weight'");
        let matchTwo = false
        for (let i = 0; i < validWords.length; i++)
        if (systems[i] && type != "pushups") {
            if (system === validWords[i]) {
                matchTwo = true;
                break;
            }
            else {
                console.log("Thats not valid");
            }
        }
        break;
    }
   
    const type = prompt(">> ").trim.toLowerCase;
    console.log("Enter the value (as a number)");
    const value = prompt(">> ").trim.toLowerCase;

    showUserFactors(type, value);
}
// getUserInput();
global.getUserInput = getUserInput;
global.showUserFactors = showUserFactors;
