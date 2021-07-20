import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ROUTE } from 'src/app/core/config/route/route';
import { AuthService } from '../../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {


  email: FormControl
  loginForm: FormGroup
  password: FormControl
  displayMessageError = false

  constructor(private authService: AuthService, private router: Router) { }

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
      const subscription = new Subscription();
     this.authService.login(this.loginForm.value).subscribe((res) => {
        if (res) {
          console.log("login response :", res);
          this.router.navigate([ROUTE.HOME])
          subscription.unsubscribe()
        }
      }, (error) => {
        console.log(error);
        this.displayMessageError = true
      })
    }
  }
}
