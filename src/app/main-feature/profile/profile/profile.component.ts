import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { User } from 'src/app/core/models/auth';
import { ModalService } from 'src/app/shared/services/modal.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { CustomValidators } from 'src/app/shared/validators/confirmPassword.validator';
import { ProfileService } from '../services/profile.service';
import { AuthService } from '../../authentication/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild('inputFile') inputFile: ElementRef;

  updatedUser: any;
  userPicture: null
  userDetails: User
  phone: FormControl
  address: FormControl
  lastName: FormControl
  firstName: FormControl
  showEditAdress = false
  oldPassword: FormControl
  password: FormControl
  showEditUserName = false
  showEditPassword = false
  validatepasswords = false
  showEditPhoneNumber = false
  updateProfileForm: FormGroup
  confirmPassword: FormControl
  updatePasswordForm: FormGroup


  constructor(
    private modalService: ModalService,
    private sessionService: SessionService,
    private profileSession: ProfileService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getUserDetails()
    
    this.initForm()
  }

  initForm() {
    this.phone = new FormControl(this.userDetails.phone)
    this.address = new FormControl(this.userDetails.adress)
    this.lastName = new FormControl(this.userDetails.last_name)
    this.firstName = new FormControl(this.userDetails.first_name)    

    this.password = new FormControl({validators: Validators.required})
    this.oldPassword = new FormControl({validators: Validators.required})
    this.confirmPassword = new FormControl({validators: Validators.required})

    this.updateProfileForm = new FormGroup({
      phone: this.phone,
      address: this.address,
      lastName: this.lastName,
      firstName: this.firstName,
    })

    this.updatePasswordForm = new FormGroup({

      password: this.password,
      oldPassword: this.oldPassword,
      confirmPassword: this.confirmPassword

    }, {
      validators: CustomValidators.mustMatchPwd
    })
  }

  getUserDetails() {
    this.userDetails = JSON.parse(this.sessionService.getUserDetails())
  }

  showEditPasswordForm() {
    this.showEditPassword = !this.showEditPassword
    this.showEditUserName = false
    this.showEditAdress = false
    this.showEditPhoneNumber= false



  }
  showEditUsenameForm() {
    this.showEditUserName = !this.showEditUserName
    this.showEditPassword = false
    this.showEditAdress = false
    this.showEditPhoneNumber= false



  }
  showEditAdressForm() {
    this.showEditAdress = !this.showEditAdress
    this.showEditPassword = false
    this.showEditUserName = false
    this.showEditPhoneNumber= false
  }
  showEditPhoneNbrForm() {
    this.showEditPhoneNumber= !this.showEditPhoneNumber
    this.showEditAdress = false
    this.showEditPassword = false
    this.showEditUserName =false
  }

updatePassword(){
    this.updatePasswordForm.errors?.passwordNotmatch ? this.validatepasswords = true : this.validatepasswords = false
    if (this.updatePasswordForm.valid) {

      const requestData = {
        old_password: this.updatePasswordForm.value.oldPassword,
        password: this.updatePasswordForm.value.password
      }
      console.log(requestData);
      this.profileSession.updateProfile(requestData).subscribe(res => {
        this.authService.getUserInfo()
        console.log(res);
      })
    }
}

updateInfo() {
  if (this.updateProfileForm.invalid) {
    return;
  }
  this.updateCurrentUser();
  this.updateProfile();
  this.showEditPhoneNumber= false
  this.showEditAdress = false
  this.showEditPassword = false
  this.showEditUserName =false
}

  updateProfile() {
      const requestData = {
        phone: this.updatedUser?.phone,
        adress: this.updatedUser?.adress,
        last_name: this.updatedUser?.last_name,
        first_name: this.updatedUser?.first_name,
      }
      console.log(requestData);
      this.profileSession.updateProfile(requestData).subscribe(res => {
        this.authService.getUserInfo()
        console.log(res);
        
      })
    
  }


  updateCurrentUser() {
    this.updatedUser = {
      ...this.userDetails,
      phone: this.updateProfileForm.controls.phone.value,
      adress: this.updateProfileForm.controls.address.value,
      last_name: this.updateProfileForm.controls.lastName.value,
      first_name: this.updateProfileForm.controls.firstName.value
    };
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
