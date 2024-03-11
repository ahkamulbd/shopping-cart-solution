//console.log('Cart js initiated');

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