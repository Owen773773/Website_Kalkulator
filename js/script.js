function doNumber() {

}

function doOperator() {

}

function deletePerChar() {
    
}

(function() {
    const getCalculator = document.getElementById("calculator");
    getCalculator.addEventListener("click", (event) => {
        const getDataset = event.target.dataset.text;
        const number = Number(getDataset);

        if (isNaN(number)) {
            doNumber(number);
        }
        else if (getDataset === "del") {
            deletePerChar();
        }
        else {
            doOperator(number);
        }
    });
}());