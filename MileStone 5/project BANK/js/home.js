//working on deposit mode

document.getElementById("deposit-submit").addEventListener("click", function(){
    const deposit_amount = document.getElementById("deposit-amount").value;
    const deposit_number = parseFloat(deposit_amount);

    const current_deposit = document.getElementById("currentDeposit").innerText;
    const current_number = parseFloat(current_deposit);
    const total_deposit = current_number + deposit_number;

    document.getElementById("currentDeposit").innerText = total_deposit;
    document.getElementById("deposit-amount").value = "";

    //balance update with the deposit

    const balance = document.getElementById("currentBalance").innerText;
    const balance_amount = parseFloat(balance);
    const new_balance = balance_amount + deposit_number;
    document.getElementById("currentBalance").innerText = new_balance;

})

//working on withdraw mode 

document.getElementById("withdraw-submit").addEventListener("click", function(){
    const balance = document.getElementById("currentBalance").innerText;
    const balance_amount = parseFloat(balance);

    const withdraw_amount = document.getElementById("withdraw-amount").value;
    const withdraw_number = parseFloat(withdraw_amount);

    if(balance_amount < withdraw_number){
        withdraw_amount.value = "";
        alert("You dont have enough funds !");
    }else{
        
        const current_withdraw = document.getElementById("currentWithdraw").innerText;
        const current_number = parseFloat(current_withdraw);
        const total_withdraw = current_number + withdraw_number;

        document.getElementById("currentWithdraw").innerText = total_withdraw;
        withdraw_amount.value = "";

            //balance update with the withdraw amount

    
        const new_balance = balance_amount - withdraw_number;
        document.getElementById("currentBalance").innerText = new_balance;
    }

    
})

