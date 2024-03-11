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
    const totalCasePrice = totalCaseNumber * 50;

    const casePriceElement = document.getElementById('case-price');
    casePriceElement.innerText = totalCasePrice;
}

function updatePhoneInput(isIncrease) {
    const phoneInputField = document.getElementById('phone-input-field');
    const phoneInputString = phoneInputField.value;
    const existingPhoneInput = parseInt(phoneInputString);

    let currentPhoneInput;
    if (isIncrease) {
        currentPhoneInput = existingPhoneInput + 1;
    }
    else {
        currentPhoneInput = existingPhoneInput - 1;
    }
    phoneInputField.value = currentPhoneInput;

    return currentPhoneInput;
}

function updatePhonePrice(totalPhoneNumber) {
    const phonePriceElement = document.getElementById('phone-price');
    const currentPhonePrice = totalPhoneNumber * 1000;

    phonePriceElement.innerText = currentPhonePrice;
}

function getElementById(elementId) {
    const getElement = document.getElementById(elementId);
    const elementString = getElement.innerText;
    const elementNumberTotal = parseInt(elementString);

    return elementNumberTotal;
}
function setTextElementById(elementId, value) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = value;
}

function calculateSubtotal() {
    const totalPhonePrice = getElementById('phone-price');

    const totalCasePrice = getElementById('case-price');

    const currentSubTotal = totalPhonePrice + totalCasePrice;

    setTextElementById('sub-total', currentSubTotal);

    const taxAmount = currentSubTotal * 0.1;
    const taxAmountFixed = parseFloat(taxAmount.toFixed(2));
    setTextElementById('tax-amount', taxAmountFixed);

    const totalAmount = currentSubTotal + taxAmountFixed;
    setTextElementById('total-amount', totalAmount);

}