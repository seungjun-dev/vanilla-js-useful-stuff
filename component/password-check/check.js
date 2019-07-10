function checkPw() {
    let pwInput = document.getElementById('pwInput').value;
    let pwCheck = document.getElementById('pwCheck').value;
    
    if(pwInput==pwCheck) {
        //alert('Password Confirmed');
        document.getElementById('confirm').innerText='비밀번호가 일치합니다.';
    } else {
        //alert('Please check your password');
        document.getElementById('confirm').innerText='비밀번호가 일치하지 않습니다.';
    }
}