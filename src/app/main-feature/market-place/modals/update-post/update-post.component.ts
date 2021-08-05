import { Component, OnInit,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {
  
  postDetails
  postImage
  uploadedImage
  title: FormControl
  description: FormControl
  updatePostForm: FormGroup
  public event: EventEmitter<any> = new EventEmitter();

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {

    this.postImage = this.postDetails.picture
    this.title = new FormControl(this.postDetails.title, { validators: Validators.required })
    this.description = new FormControl(this.postDetails.description, { validators: Validators.required })

    this.updatePostForm = new FormGroup({
      title: this.title,
      description: this.description,
    })
  }

  uploadImage(event) {
    this.uploadedImage = event.target.files[0]
    const reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = () => {
      this.postImage = reader.result
      console.log(this.postImage);
      
    }
  }

  deleteUploadedImage() {
    this.postImage = null
  }

  hideModal() {
    this.bsModalRef.hide();
  }

  updatePost() {
    if (this.updatePostForm.valid) {
      const requestData = {
        picture: this.postImage,
        post_id: this.postDetails._id,
        title: this.updatePostForm.value.title,
        description: this.updatePostForm.value.description
      }
      console.log(requestData);
      this.event.emit(requestData)
      this.hideModal()
    }
  }

}
