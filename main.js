function handleProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + "-count").value;
    const productCount = parseInt(productInput);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    document.getElementById(product + "-count").value = productNewCount;
    let productTotal = 0;
    if (product == 'phone') {
        productTotal = productNewCount * 1219;
    }
    if (product == 'case') {
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + "-total").innerText = productTotal;

    calculateSubtotal();

}
function calculateSubtotal() {
    const phoneInput = document.getElementById("phone-count").value;
    const phoneCount = parseInt(phoneInput);

    const caseInput = document.getElementById("case-count").value;
    const caseCount = parseInt(caseInput);

    const subtotal = phoneCount * 1219 + caseCount * 59;
    document.getElementById("subtotal-price").innerText = subtotal;

    const tax = subtotal * 0.05;
    document.getElementById("tax-amount").innerText = tax.toFixed(2);

    const total = subtotal + tax;
    document.getElementById("total").innerText = total;
}








/* ##this is the 2nd formula for phone and case area! #with_funtion!
//phone section increase
document.getElementById("phone-increase").addEventListener("click", function () {
    handleProductChange(true);
})
//phone section decrease
document.getElementById("phone-decrease").addEventListener("click", function () {
    handleProductChange(false);
})
//case section increase
document.getElementById("case-increase").addEventListener("click", function () {
    handleProductChange(true);
})
//case section decrease
document.getElementById("case-decrease").addEventListener("click", function () {
    handleProductChange(false);
})
function handleProductChange(isIncrease) {
    const phoneInput = document.getElementById("phone-count").value;
    const phoneCount = parseInt(phoneInput);
    let phoneNewCount = phoneCount;
    if (isIncrease == true) {
        phoneNewCount = phoneCount + 1;
    }
    if (isIncrease == false && phoneCount > 0) {
        phoneNewCount = phoneCount - 1;
    }
    document.getElementById("phone-count").value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById("phone-price").innerText = phoneTotal;
}
function handleProductChange(isIncrease) {
    const caseInput = document.getElementById("case-count").value;
    const caseCount = parseInt(caseInput);
    let caseNewCount = caseCount;
    if (isIncrease == true) {
        caseNewCount = caseCount + 1;
    }
    if (isIncrease == false && caseCount > 0) {
        caseNewCount = caseCount - 1;
    }
    document.getElementById("case-count").value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById("case-price").innerText = caseTotal;
}
*/

//subtotal section

/* ##this is the 1st formula for phone and case area! #without_funtion!
//phone section increase
document.getElementById("phone-increase").addEventListener("click", function () {

    const phoneInput = document.getElementById("phone-count").value;
    const phoneCount = parseInt(phoneInput);

    const phoneNewCount = phoneCount + 1;
    document.getElementById("phone-count").value = phoneNewCount;
    document.getElementById("phone-price").innerText;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById("phone-price").innerText = phoneTotal;
})
//phone section decrease
document.getElementById("phone-decrease").addEventListener("click", function () {

    const phoneInput = document.getElementById("phone-count").value;
    const phoneCount = parseInt(phoneInput);

    const phoneNewCount = phoneCount - 1;
    document.getElementById("phone-count").value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById("phone-price").innerText = phoneTotal;
})

//case section increase
document.getElementById("case-increase").addEventListener("click", function () {

    const caseInput = document.getElementById("case-count").value;
    const caseCount = parseInt(caseInput);

    const caseNewCount = caseCount + 1;
    document.getElementById("case-count").value = caseNewCount;
    document.getElementById("case-price").innerText;
    const caseTotal = caseNewCount * 59;
    document.getElementById("case-price").innerText = caseTotal;
})
//case section decrease
document.getElementById("case-decrease").addEventListener("click", function () {

    const caseInput = document.getElementById("case-count").value;
    const caseCount = parseInt(caseInput);

    const caseNewCount = caseCount - 1;
    document.getElementById("case-count").value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById("case-price").innerText = caseTotal;
})
*/




