//console.log('Cart js initiated');

function updateCaseNumber(isIncrease) {
    const caseInputField = document.getElementById('case-input-field');
    const caseInputString = caseInputField.value;
    const previousCaseInputNumber = parseInt(caseInputString);

    let currentCaseInputNumber;

    if (isIncrease) {
        currentCaseInputNumber = previousCaseInputNumber + 1;
    }
    else {
        currentCaseInputNumber = previousCaseInputNumber - 1;
    }

    caseInputField.value = currentCaseInputNumber;

    return currentCaseInputNumber;
}

function updateCaseTotalPrice(totalCaseNumber) {
    const totalCasePrice = totalCaseNumber * 59;

    const casePriceElement = document.getElementById('case-price');
    casePriceElement.innerText = totalCasePrice;
}

/** Case Button Plus */
document.getElementById('case-btn-plus').addEventListener('click', function () {
    const totalCaseNumber = updateCaseNumber(true);
    //console.log(typeof totalCaseNumber);

    // const totalCasePrice = totalCaseNumber * 59;
    // //console.log(totalCasePrice);

    // const casePriceElement = document.getElementById('case-price');
    // casePriceElement.innerText = totalCasePrice;
    updateCaseTotalPrice(totalCaseNumber);
})

/** Case Button Minus */
document.getElementById('case-btn-minus').addEventListener('click', function () {
    const totalCaseNumber = updateCaseNumber(false);

    updateCaseTotalPrice(totalCaseNumber);
})