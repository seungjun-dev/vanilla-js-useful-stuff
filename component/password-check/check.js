function checkPw() {
    let pwInput = document.getElementById('pwInput').innerHTML;
    let pwCheck = document.getElementById('pwCheck').innerHTML;
    
    if(pwInput==pwCheck) {
        alert('Password Confirmed');
    } else {
        alert('Please check your password');
    }
}