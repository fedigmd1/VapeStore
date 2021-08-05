import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/core/models/post';

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
  public event: EventEmitter<any> = new EventEmitter();

  constructor(public bsModalRef: BsModalRef) { }

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
    this.uploadedImage = null
  }

  hideModal() {
    this.bsModalRef.hide();
  }

  addNewPost() {
    if (this.addNewPostForm.valid) {
      const requestData = {
        title: this.addNewPostForm.value.title,
        description: this.addNewPostForm.value.description,
        picture: this.postImage
      }
      console.log(requestData);
      
      this.event.emit(requestData)
      this.hideModal()
    }
  }
}
