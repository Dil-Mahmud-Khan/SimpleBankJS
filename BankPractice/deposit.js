document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField=document.getElementById('deposit-field');
    const depositAmountString=depositField.value;
    const newdepositAmount=parseFloat(depositAmountString);


    depositField.value='';
    if(isNaN(newdepositAmount)){
        alert("Please provide a valid number!!");
        return ;
    }
    const depositTotalElement=document.getElementById('deposit-total');
    const depositTotalString=depositTotalElement.innerText;
    const previousDepositTotal=parseFloat(depositTotalString);

    const crntDepositTotal=previousDepositTotal+newdepositAmount;
    
    depositTotalElement.innerText=crntDepositTotal;

    const balanceTotalElement=document.getElementById('balance-total');
    const balanceTotalString=balanceTotalElement.innerText;
    const balanceTotal=parseFloat(balanceTotalString);

    const crntBalance=balanceTotal+newdepositAmount;
    balanceTotalElement.innerText=crntBalance;

    

})