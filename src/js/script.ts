let submit= document.querySelector('#calculate');
submit.addEventListener('click', function(e) {
    e.preventDefault();
    let borrow = parseFloat((<HTMLInputElement>document.querySelector('#borrow')).value);
    let salary = parseFloat((<HTMLInputElement>document.querySelector('#salary')).value);
    let repay = parseFloat((<HTMLInputElement>document.querySelector('#repay')).value);
    document.querySelector('.totalBorrow').innerHTML = `${totalCost(borrow)}`;
    document.querySelector('.adminFee').innerHTML = `${adminCharge(totalCost(borrow))}`;
    document.querySelector('.repayRate').innerHTML = `${repay}`;
    document.querySelector('.salary').innerHTML = `${salary}`;
    document.querySelector('.repayMonths').innerHTML = `${monthsToRepay(repayPercentage(repay), salary, totalCost(borrow))}`;
})

function totalCost(borrowAmount:number) {
    if (borrowAmount >7200) {
        var toBorrow:number = borrowAmount + 1000;
    } else if (borrowAmount >6480 && borrowAmount<=7200) {
        var toBorrow:number = borrowAmount + 500;
    } else {
        var toBorrow:number = borrowAmount;
    }
    return toBorrow;
}

function adminCharge(toBorrow:number) {
    let adminFee:number =toBorrow*0.05;

    return adminFee;
}

function repayPercentage(repayNum:number) {
    var repayRate:number= (repayNum/100);
    return repayRate;
}

function monthsToRepay(repayRate:number, annualSalary:number, toBorrow:number) {
    var months= toBorrow/((annualSalary/12)*repayRate);
    return months;
}