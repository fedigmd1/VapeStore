import { Component, OnInit } from '@angular/core';
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

  constructor() { }

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
    }
  }

}
