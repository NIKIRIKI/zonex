function validatePhone() {
    let phone = document.querySelector('input[type="text"]').value;
    let phoneno = /^\d{11}$/;
    if(phone.match(phoneno)) {
        return true;
    } else {
        alert("Неправильный номер");
        return false;
    }
}
