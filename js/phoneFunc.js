//console.log('phoneFunc.js active');


document.getElementById('phone-btn-plus').addEventListener('click', function () {
    //console.log('Phone Button Plus clicked')
    const totalPhoneNumber = updatePhoneInput(true);

    updatePhonePrice(totalPhoneNumber);

    const phonePriceElement = document.getElementById('phone-price');
    const phonePriceString = phonePriceElement.innerText;
    const totalPhonePrice = parseInt(phonePriceString);

    const subTotalElement = document.getElementById('sub-total');
    const subTotalString = subTotalElement.innerText;
    const existingSubTotal = parseInt(subTotalString);

    const currentSubTotal = existingSubTotal + totalPhonePrice;

    subTotalElement.innerText = currentSubTotal;

})
document.getElementById('phone-btn-minus').addEventListener('click', function () {
    //console.log('Phone Button Plus clicked')
    const totalPhoneNumber = updatePhoneInput(false);

    updatePhonePrice(totalPhoneNumber);
})