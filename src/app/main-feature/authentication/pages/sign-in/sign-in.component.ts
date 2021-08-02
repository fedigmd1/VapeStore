import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ROUTE } from 'src/app/core/config/route/route';
import { AuthService } from '../../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit , OnDestroy{


  email: FormControl
  loginForm: FormGroup
  password: FormControl
  displayMessageError = false
  subscription = new Subscription();

  constructor(
    private router: Router,
    private loader: LoaderService,
    private authService: AuthService,

  ) { }

  ngOnInit(): void {
    this.initForm()
  }


  initForm() {
    this.email = new FormControl('', { validators: [Validators.required, Validators.email] })
    this.password = new FormControl('', { validators: Validators.required })

    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    })

  }

  login() {
    if (this.loginForm.valid) {
      this.loader.showSpinner()
      this.subscription.add(this.authService.login(this.loginForm.value).subscribe(
        (res) => {
          if (res) {
            console.log("login response :", res);
            this.router.navigate([ROUTE.HOME])
            this.loader.stopSpinner()
          }
        }, (error) => {
          console.log(error);
          this.displayMessageError = true
          this.loader.stopSpinner()
        }))
    }
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
