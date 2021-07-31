
export class CustomValidators{

 static mustMatchPwd(control) {
    if (control && control.root.get('password').value === control.root.get('confirmPassword').value)
        return null;
    else
        return { 'passwordNotmatch': true };
}

static phoneValidator(number) {
    if (number.pristine) {
        return null;
    }
    const PHONE_REGEXP = /^([[0-9]{2})([\s]|[-]|[.])?([0-9]{3})([\s]|[-]|[.])?([0-9]{3})$/;
    number.markAsTouched();
    if (PHONE_REGEXP.test(number.value)) {
        return null;
    }
    else
    return { 'invalidPhoneNumber': true };
}
}
