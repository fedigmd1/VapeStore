import { FormControl } from '@angular/forms';

export class CustomValidators{

 static mustMatchPwd(control) {
    console.log(control.root.get('password').value);
    console.log(control && control.root.get('password').value === control.root.get('confirmPassword').value);
    if (control && control.root.get('password').value === control.root.get('confirmPassword').value)
        return null;
    else
        return { 'passwordNotmatch': true };
}

}
