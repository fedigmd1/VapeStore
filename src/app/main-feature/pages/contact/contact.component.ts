import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  name: FormControl
  email: FormControl
  subject: FormControl
  content: FormControl


  constructor(
  ) { }

  ngOnInit() {
    this.initForm();

  }
  initForm() {
    this.name = new FormControl('', { validators: Validators.required })
    this.content = new FormControl('', { validators: Validators.required })
    this.subject = new FormControl('', { validators: Validators.required })
    this.email = new FormControl('', { validators: [Validators.required, Validators.email] })
    this.contactForm = new FormGroup({
      name: this.name,
      email: this.email,
      subject: this.subject,
      content: this.content
    })
  }

  sendMail() {
    console.warn(this.contactForm.value)
  }
}