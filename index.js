function validateEmail(emailfield){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailfield.value) == false) 
    {
        alert('Invalid Email Address');
        return false;
    }
    return true;
}
function validatepass(passfield){
    var re = /(?=.*\d)(?=.*[a-z]).{8,}/;
    if (re.test(passfield.value) == false)
    {
        alert('Invalid Password');
        return false;
    }
    return true;
}


