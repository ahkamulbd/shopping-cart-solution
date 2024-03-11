//console.log('phoneFunc.js active');

function getElementById(elementId) {
    const getElement = document.getElementById(elementId);
    const elementString = getElement.innerText;
    const elementNumberTotal = parseInt(elementString);

    return elementNumberTotal;
}


document.getElementById('phone-btn-plus').addEventListener('click', function () {
    //console.log('Phone Button Plus clicked')
    const totalPhoneNumber = updatePhoneInput(true);

    updatePhonePrice(totalPhoneNumber);

    // const phonePriceElement = document.getElementById('phone-price');
    // const phonePriceString = phonePriceElement.innerText;
    // const totalPhonePrice = parseInt(phonePriceString);

    const totalPhonePrice = getElementById('phone-price');

    // const casePriceElement = document.getElementById('case-price');
    // const casePriceString = casePriceElement.innerText;
    // const totalCasePrice = parseInt(casePriceString);

    const totalCasePrice = getElementById('case-price');

    const subTotalElement = document.getElementById('sub-total');
    const subTotalString = subTotalElement.innerText;
    const existingSubTotal = parseInt(subTotalString);

    const currentSubTotal = existingSubTotal + totalPhonePrice + totalCasePrice;

    subTotalElement.innerText = currentSubTotal;

})
document.getElementById('phone-btn-minus').addEventListener('click', function () {
    //console.log('Phone Button Plus clicked')
    const totalPhoneNumber = updatePhoneInput(false);

    updatePhonePrice(totalPhoneNumber);
})