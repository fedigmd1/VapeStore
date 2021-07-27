import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { base64ToFile, ImageCroppedEvent } from 'ngx-image-cropper';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss']
})
export class AddProductModalComponent implements OnInit {

  @ViewChild('inputFile') inputFile: ElementRef;
  imageChangedEvent: any;
  croppedImage: any;
  productPicture;

  public event: EventEmitter<any> = new EventEmitter();

  constructor(
    private bsModalRef: BsModalRef
  ) {
  }

  ngOnInit(): void {
    console.log("to cropped", this.imageChangedEvent);
  }

  hideModal() {
    this.bsModalRef.hide();
  }

  confirme() {
    this.event.emit({ file: this.croppedImage })
    this.bsModalRef.hide();
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log("Cropped image", this.croppedImage);
  }


  getProductImage() {
    console.warn("hello from h4");

  }
  openFile() {
    this.inputFile.nativeElement.click();
  }

  getBase64(event: any) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.warn(reader.result);
    };
    reader.onerror = function (error) {
      console.warn('Error: ', error);
    };
  }

  fileChangeEvent(image: any) {
    console.log('Image to crop web', image);
    this.productPicture = this.getBase64(image)
  }
}