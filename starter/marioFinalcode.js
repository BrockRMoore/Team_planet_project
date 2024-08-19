//Mario

const prompt = require('prompt-sync')();

const gravityFactors = require('./utils/earthGravityFactors.js');

const alienFactors = require('./utils/alienGravityFactors.js');


function showUserFactors(type, value, system, typeSolorsystem) {
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
        case "pushups":
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

    const validWords = ["Jump", "pushups", "weight"];
    while (true) {
        console.log("Enter your measurment type ('jump' or 'weight' or 'pushups')");
        const type = prompt(">> ");
        let match = false;

        for (let i = 0; i < validWords.length; i++) {
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
        let matchTwo = false;

        for (let i = 0; i < systems.length; i++) {
            if (system.trim().toLowerCase() === systems[i] && type != "pushups") {
                if (system === "metric") {
                    if (type === "jump") {
                        measurment = "cm";
                    }
                    if (type === "weight") {
                        measurment = "kg"
                    }
                }

                if (system === "imperial") {
                    if (type === "jump") {
                        measurement = "in";
                    }
                    if (type === "weight") {
                        measurement = "lbs";
                    }
                }
                matchTwo = true;
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
    while (true) {
        console.log("Enter your measurment type ('jump' or 'weight' or 'pushups')");
        const value = prompt(">> ");
        let matchThree = false;
            
        if (!isNaN(value.trim())) {
                matchThree = true;
                break;

            }
            else {
                console.log("That is not valid, enter another number")
            }
    }

    const planetNum = [1, 2];
    let value;
    while (true) {
        console.log("Enter 1 if on earth or 2 if on alien planet");
        const typeSolorsytem = prompt(">> ");
        let matchThree = false;

        if (!isNaN(typeSolorsystem.trim())) {
            matchFour = true;
            break;

        }
        else {
            console.log("That is not valid, enter another number")
        }
    }
    showUserFactors(type, value, system, typeSolorsystem);


}



global.getUserInput = getUserInput;
global.showUserFactors = showUserFactors;
