var submit = document.querySelector('#calculate');
submit.addEventListener('click', function (e) {
    e.preventDefault();
    var borrow = parseFloat(document.querySelector('#borrow').value);
    var salary = parseFloat(document.querySelector('#salary').value);
    var repay = parseFloat(document.querySelector('#repay').value);
    document.querySelector('.totalBorrow').innerHTML = "" + totalCost(borrow);
    document.querySelector('.adminFee').innerHTML = "" + adminCharge(totalCost(borrow));
    document.querySelector('.repayRate').innerHTML = "" + repay;
    document.querySelector('.salary').innerHTML = "" + salary;
    document.querySelector('.repayMonths').innerHTML = "" + monthsToRepay(repayPercentage(repay), salary, totalCost(borrow));
});
function totalCost(borrowAmount) {
    if (borrowAmount > 7200) {
        var toBorrow = borrowAmount + 1000;
    }
    else if (borrowAmount > 6480 && borrowAmount <= 7200) {
        var toBorrow = borrowAmount + 500;
    }
    else {
        var toBorrow = borrowAmount;
    }
    return toBorrow;
}
function adminCharge(toBorrow) {
    var adminFee = toBorrow * 0.05;
    return adminFee;
}
function repayPercentage(repayNum) {
    var repayRate = (repayNum / 100);
    return repayRate;
}
function monthsToRepay(repayRate, annualSalary, toBorrow) {
    var months = toBorrow / ((annualSalary / 12) * repayRate);
    return months;
}
