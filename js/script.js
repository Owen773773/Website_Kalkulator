let totalNumber = Number.MIN_VALUE;
let operator = "";

function doOperation (getTextButton, numberDisplay) {
    if (getTextButton === "=") {
        calc("=", numberDisplay);
        displayIt(totalNumber);
    }
    else {
        calc(getTextButton, numberDisplay);
    }
}

function calc(getTextButton, numberDisplay) {
    if (operator === "+") {
        totalNumber += numberDisplay;
    }
    else if (operator === "-") {
        totalNumber -= numberDisplay;
    }
    else if (operator === "*") {
        totalNumber *= numberDisplay;
    }
    else if (operator === "/") {
        totalNumber /= numberDisplay;
    }
    
    operator = getTextButton;
}

function displayIt(numberDisplay) {
    const getScreen = document.getElementById("screen");
    getScreen.value = numberDisplay;
}

function resetScreen() {
    const getScreen = document.getElementById("screen");
    getScreen.value = "";
}

(function() {
    const getCalculator = document.getElementById("calculator");
    let numberDisplay = "";

    getCalculator.addEventListener("click", (event) => {
        const getTextButton = event.target.dataset.text;

        if (getTextButton !== undefined) {
            if (isNaN(Number(getTextButton))) { //operator
                if (getTextButton === "del") {
                    operator = "";
                    totalNumber = Number.MIN_VALUE;
                    resetScreen();
                }
                else {
                    if (operator === "") {
                        operator = getTextButton;
                        totalNumber = Number(numberDisplay);
                    }
                    else {
                        doOperation(getTextButton, Number(numberDisplay));
                    }
                    numberDisplay = "";
                }

            }
            else { //number
                numberDisplay += getTextButton;
                displayIt(numberDisplay);

                if (operator === "=") {
                    operator = "";
                }
            }
        }
    });
}());