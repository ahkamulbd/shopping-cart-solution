//console.log('Cart js initiated');

/** Case Button Plus */
document.getElementById('case-btn-plus').addEventListener('click', function () {
    //console.log('Case Plus Button Clicked');
    const caseInputField = document.getElementById('case-input-field');
    const caseInputString = caseInputField.value;
    const previousCaseInputNumber = parseInt(caseInputString);

    const currentCaseInputNumber = previousCaseInputNumber + 1;

    caseInputField.value = currentCaseInputNumber;
})

/** Case Button Minus */
document.getElementById('case-btn-minus').addEventListener('click', function () {
    //console.log('Case Plus Button Clicked');
    const caseInputField = document.getElementById('case-input-field');
    const caseInputString = caseInputField.value;
    const previousCaseInputNumber = parseInt(caseInputString);


    const currentCaseInputNumber = previousCaseInputNumber - 1;

    caseInputField.value = currentCaseInputNumber;

})