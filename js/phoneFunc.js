//console.log('phoneFunc.js active');

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
    const phonePriceString = phonePriceElement.innerText;
    const existingPhonePrice = parseFloat(phonePriceString);
    //console.log(existingPhonePrice);
    const currentPhonePrice = totalPhoneNumber * 1219;

    phonePriceElement.innerText = currentPhonePrice;
}

document.getElementById('phone-btn-plus').addEventListener('click', function () {
    //console.log('Phone Button Plus clicked')
    const totalPhoneNumber = updatePhoneInput(true);

    updatePhonePrice(totalPhoneNumber);
})
document.getElementById('phone-btn-minus').addEventListener('click', function () {
    //console.log('Phone Button Plus clicked')
    const totalPhoneNumber = updatePhoneInput(false);

    updatePhonePrice(totalPhoneNumber);
})