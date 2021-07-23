import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { User } from 'src/app/core/models/auth';
import { ModalService } from 'src/app/shared/services/modal.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { CustomValidators } from 'src/app/shared/validators/confirmPassword.validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild('inputFile') inputFile: ElementRef;

  userPicture: null
  userDetails: User
  email: FormControl
  phone: FormControl
  address: FormControl
  password: FormControl
  lastName: FormControl
  firstName: FormControl
  showUpdateForm = false
  validatepasswords = false
  updateProfileForm: FormGroup
  confirmPassword: FormControl


  constructor(
    private modalService: ModalService,
    private sessionService: SessionService,
  ) { }

  ngOnInit() {
    this.getUserDetails()
  }

  initForm() {
    this.phone = new FormControl(this.userDetails.phone, { validators: Validators.required })
    this.address = new FormControl(this.userDetails.address, { validators: Validators.required })
    this.password = new FormControl(this.userDetails.password, { validators: Validators.required })
    this.lastName = new FormControl(this.userDetails.last_name, { validators: Validators.required })
    this.firstName = new FormControl(this.userDetails.first_name, { validators: Validators.required })
    this.confirmPassword = new FormControl(this.userDetails.password, { validators: Validators.required })
    this.email = new FormControl({ value: this.userDetails.email, disabled: true }, { validators: [Validators.required, Validators.email] })

    this.updateProfileForm = new FormGroup({
      email: this.email,
      phone: this.phone,
      address: this.address,
      lastName: this.lastName,
      password: this.password,
      firstName: this.firstName,
      confirmPassword: this.confirmPassword
    }, {
      validators: CustomValidators.mustMatchPwd
    })
  }

  getUserDetails() {
    this.userDetails = JSON.parse(this.sessionService.getUserDetails())
  }

  showForm() {
    this.initForm()
    this.showUpdateForm = !this.showUpdateForm
  }

  upadateProfile() {
    this.updateProfileForm.errors?.passwordNotmatch ? this.validatepasswords = true : this.validatepasswords = false

    if (this.updateProfileForm.valid) {

      const requestData = {
        email: this.updateProfileForm.value.email,
        phone: this.updateProfileForm.value.phone,
        address: this.updateProfileForm.value.address,
        password: this.updateProfileForm.value.password,
        last_name: this.updateProfileForm.value.lastName,
        first_name: this.updateProfileForm.value.firstName,
      }
      console.log(requestData);

      //TODO WS
    }
  }
  openFile() {
    this.inputFile.nativeElement.click();
  }

  fileChangeEvent(image: any): void {
    console.log('Image to crop web', image);
    this.modalService.showCropImageModal(image).subscribe((croppedImage: any) => {
      console.log(croppedImage);
      this.userPicture = croppedImage.file
    });
  }


}
