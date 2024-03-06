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
}

/** Case Button Plus */
document.getElementById('case-btn-plus').addEventListener('click', function () {
    updateCaseNumber(true);

    const casePriceElement = document.getElementById('case-price');
    const casePriceString = casePriceElement.innerText;
    const casePriceNumber = parseInt(casePriceString);

    console.log(currentCaseInputNumber);

})

/** Case Button Minus */
document.getElementById('case-btn-minus').addEventListener('click', function () {
    updateCaseNumber(false);

})