function checkPw() {
    let pwInput = document.getElementById('pwInput').value;
    let pwCheck = document.getElementById('pwCheck').value;
    let confirm = document.getElementById('confirm');    

    if(pwInput==pwCheck) {
        //alert('Password Confirmed');
        confirm.innerText='비밀번호가 일치합니다.';
        confirm.setAttribute('style','color:blue');
    } else {
        //alert('Please check your password');
        confirm.innerText='비밀번호가 일치하지 않습니다.';
        confirm.setAttribute('style','color:red');
    }
}