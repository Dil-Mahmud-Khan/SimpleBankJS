document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawFieldString);

    withdrawField.value = '';
    if (isNaN(newWithdrawAmount)) {
        alert("Please provide a valid number!!");
        return;
    }
    const withdrawTotal = document.getElementById('withdraw-total');
    const totalWithdrawAmountString = withdrawTotal.innerText;
    const totalWithdrawAmount = parseFloat(totalWithdrawAmountString);

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert("You can not withdraw more than balance!!");
        return;
    }
    const crntWithdrawTotal = totalWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = crntWithdrawTotal;


    const presentBalance = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = presentBalance;







})