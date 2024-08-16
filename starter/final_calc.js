const prompt = require('prompt-sync')();

const gravityFactors = require('./utils/earthGravityFactors.js');


function showUserFactors(type, value, system) {
    let result = {};

    let mesurement;

    for (let planet in gravityFactors) {
        result[planet] = (gravityFactors[planet] * value).toFixed(2);

    }

    switch (type) {
        case "jump":
            measurement = "cm";
            break;

        case "run":
            measurement = "KM";
            break;
        case "weight":
            measurement = "kg";
            break;

        default:
            measurement = "cm";
            break;


    }
    for (let planet in result) {
        console.log(`Your ${type} on ${planet} is ${result[planet]}${measurement}`)
    }
}

function getUserInput() {
    
    const validWords = ["Jump", "run", "weight"];
    while (true) {
        console.log("Enter your measurment type ('jump' or 'run' or 'weight)");
        const type = prompt(">> ");
        let match = false;

        for (let i = 0; i < validWords.length - 1; i++) {
            if (type.trim().toLowerCase() === validWords[i]) {
                match = true;
                break;
        
            }
            else {
                console.log("That is not valid.")
            }
        }
        break;
    }

    const systems = ["metric", "imperial"];

    while (true) {
        console.log("Enter what measuring system to use.");
        const type = prompt(">> ");
        let match = false;

        for (let i = 0; i < systems.length - 1; i++) {
            if (system.trim().toLowerCase() === systems[i]) {
                if (system === "metric") {
                    
                }

                if (system === "imperial") {
                
                }
                match = true;
                break;

            }
            else {
                console.log("That is not valid.")
            }
        }
        break;
    }


    console.log("Enter your distance");
    const value = prompt(">> ").trim.toLowerCase;
    
    showUserFactors(type, value, system);
    

}



global.getUserInput = getUserInput;
global.showUserFactors = showUserFactors;
