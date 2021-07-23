import { BsModalRef } from 'ngx-bootstrap/modal';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-crop-picture-modal',
  templateUrl: './crop-picture-modal.component.html',
  styleUrls: ['./crop-picture-modal.component.scss']
})
export class CropPictureModalComponent implements OnInit {

  imageChangedEvent: any;
  croppedImage: any;

  public event: EventEmitter<any> = new EventEmitter();

  constructor(
    private bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    console.log("to cropped", this.imageChangedEvent);
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log("Cropped image", this.croppedImage);
  }

  hideModal() {
    this.bsModalRef.hide();
  }

  confirme() {
    this.event.emit({ file: this.croppedImage })
    this.bsModalRef.hide();
  }


}
