import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  postImage
  uploadedImage
  title: FormControl
  description: FormControl
  addNewPostForm: FormGroup
  subscription = new Subscription();
  constructor( public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.title = new FormControl('', { validators: Validators.required })
    this.description = new FormControl('', { validators: Validators.required })
  

    this.addNewPostForm = new FormGroup({
      title: this.title,
      description: this.description,
    })
  }

  uploadImage(event){ 
      this.uploadedImage = event.target.files[0]    
  }
  
  deleteUploadedImage(){
      this.uploadedImage = null
  }

  hideModal() {
    this.bsModalRef.hide();
  }

  addNewPost(){
   if (this.addNewPostForm.valid){
     if (this.uploadedImage){
       const reader = new FileReader();
       reader.readAsDataURL(this.uploadedImage);
       reader.onload = () => {
           this.postImage = reader.result
       }
     }
     const requestData = {
       title: this.addNewPostForm.value.title,
       description: this.addNewPostForm.value.description,
       picture: this.postImage
     }
     
     console.log(requestData);
     
   }
  }
}
