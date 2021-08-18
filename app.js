
function getPriceMoney(inputId, isPositive, price){
    let inputValue = document.getElementById(inputId);
    let inputValueNum = inputValue.value;
    if(isPositive){
        let inputValueNum = parseInt(inputValue.value) + 1;
        inputValue.value = inputValueNum;
    }else if(inputValueNum > 0){
        let inputValueNum = parseInt(inputValue.value) - 1;
        inputValue.value =  inputValueNum; 
    };
    inputValueNum = inputValue.value;
    // console.log(inputValueNum);
    const priceMoney = inputValueNum * price;
    // console.log(priceMoney);
    return priceMoney;
};

// set price money phone and case
function setPriceMoney(getBothPrice, priceMoneyId){
    let priceMoney = document.getElementById(priceMoneyId);
    priceMoney.innerText = getBothPrice;
};

// phone increment with price money
document.getElementById("plushPhoneBtn").addEventListener("click", function(){
    let getPriceMoneyResult = getPriceMoney("phoneInputValue", true, 1219);
    // console.log(getPriceMoneyResult);
    setPriceMoney(getPriceMoneyResult, "phonePriceMoney");
    getTotalMoney();

});
// phone decrement with price money
document.getElementById("minasPhoneBtn").addEventListener("click", function(){
    let phoneGetPriceMoney = getPriceMoney("phoneInputValue", false, 1219);
    setPriceMoney(phoneGetPriceMoney, "phonePriceMoney");
    getTotalMoney()
});



// case increment with price money
document.getElementById("plushCaseBtn").addEventListener("click", function(){
    let  caseGetPriceMoney = getPriceMoney("caseInputValue", true, 59);
    setPriceMoney(caseGetPriceMoney, "casePriceMoney");
    getTotalMoney()
});

// case decrement with price money

document.getElementById("minasCaseBtn").addEventListener("click", function(){
    let caseGetPriceMoney = getPriceMoney("caseInputValue", false, 59);
    setPriceMoney(caseGetPriceMoney, "casePriceMoney");
    getTotalMoney()
});


// get totoal money
function getTotalMoney(){
    let phonePriceMoney = document.getElementById("phonePriceMoney");
    // console.log(parseInt(phonePriceMoney.innerText));
    let casePriceMoney = document.getElementById("casePriceMoney");
    // console.log(casePriceMoney.innerText);
    let subTotal = document.getElementById("subTotal");
    let subTotalMoney = parseInt(phonePriceMoney.innerText) + parseInt(casePriceMoney.innerText);
    subTotal.innerText = subTotalMoney;
    // console.log(subTotal.innerText);
    const tax = parseInt(subTotalMoney/10);
    let taxMoney = document.getElementById("taxMoney")
    taxMoney.innerText = tax;
    const total = document.getElementById("total");
    const totalMoney = subTotalMoney + tax;
    total.innerText = totalMoney;
};
