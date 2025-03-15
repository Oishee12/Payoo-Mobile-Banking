document.getElementById('login-button').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('mobile-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    if(phoneNumber === '09876' && pinNumber === '2345'){
        window.location.href = '/home.html';
    }
    else{
        alert('Wrong mobile number or pin');
    }
})