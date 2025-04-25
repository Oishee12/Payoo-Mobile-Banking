document.getElementById('cash-out').addEventListener('click', function(){
   const cashOutMoney = document.getElementById('cash-out-amount').value;
   const cashOutMoneyN = parseFloat(cashOutMoney);
//    console.log(cashOutMoney);

   const cashOutPin = document.getElementById('cashout-pin').value;
   //console.log(cashOutPin);
   
    if(cashOutPin === '2345'){
       const currentBalance = document.getElementById('current-balance').innerText;
       const currentBalanceN = parseFloat(currentBalance);
       const newBalance = currentBalanceN - cashOutMoneyN;
       //console.log(newBalance);
       document.getElementById('current-balance').innerText = newBalance;
    }
    else{
        alert('Wrong pin number');
    } 
})


