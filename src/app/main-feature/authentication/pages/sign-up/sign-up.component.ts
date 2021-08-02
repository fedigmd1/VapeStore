import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ROUTE } from 'src/app/core/config/route/route';
import { AuthService } from '../../service/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/validators/validators.validator';
import { LoaderService } from 'src/app/shared/services/loader.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit , OnDestroy{


  validatepasswords
  email: FormControl
  password: FormControl
  lastName: FormControl
  firstName: FormControl
  registerForm: FormGroup
  confirmPassword: FormControl
  subscription = new Subscription();
       
  constructor(
          private router: Router,
          private loader: LoaderService,
          private authService: AuthService) {}

  ngOnInit(): void {
    this.initForm()
  }


  initForm() {

    this.lastName = new FormControl('', { validators: Validators.required })
    this.password = new FormControl('', { validators: Validators.required })
    this.firstName = new FormControl('', { validators: Validators.required })
    this.confirmPassword = new FormControl('', { validators: Validators.required})
    this.email = new FormControl('', { validators: [Validators.required, Validators.email] })

    this.registerForm = new FormGroup({
      email: this.email,
      lastName: this.lastName,
      password: this.password,
      firstName: this.firstName,
      confirmPassword: this.confirmPassword
    },{
      validators : CustomValidators.mustMatchPwd
    }
    )
  }

  register() {

    this.registerForm.errors?.passwordNotmatch ? this.validatepasswords = true : this.validatepasswords = false

    if (this.registerForm.valid) {
      const requestData = {
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        last_name: this.registerForm.value.lastName,
        first_name: this.registerForm.value.firstName,
        role: "user"
      }
      this.loader.showSpinner()
      this.subscription.add( this.authService.register(requestData).subscribe((res) => {
        if (res) {
          console.log("resgister response :", res);
          this.router.navigateByUrl(ROUTE.HOME)
          this.loader.stopSpinner()
        }
      }, (error) => {
        console.log(error);
        this.loader.stopSpinner()
      }))
    }
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
