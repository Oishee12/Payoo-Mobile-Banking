document.getElementById("add-money").addEventListener('click', function (event) {
    event.preventDefault;
   const addMoneyInput = document.getElementById("add-amount").value;
   const addMoneyInputN = parseFloat(addMoneyInput);
   console.log(addMoneyInput);
   
   const pinNumberInput = document.getElementById('pin-number').value;
   
   if (pinNumberInput === '2345') {
    console.log(pinNumberInput);
   }
   else{
    alert('Wrong pin number')
   }

   const currentBalance = document.getElementById('current-balance').innerText;
   const currentBalanceN = parseFloat(currentBalance);
   console.log(currentBalance);

   const sum = addMoneyInputN + currentBalanceN;
   console.log(sum);

   document.getElementById('current-balance').innerText= sum;

   
})