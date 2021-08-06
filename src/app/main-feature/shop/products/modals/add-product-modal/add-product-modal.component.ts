import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { base64ToFile, ImageCroppedEvent } from 'ngx-image-cropper';
import { ModalService } from 'src/app/shared/services/modal.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  addProductForm: FormGroup
  name: FormControl
  description: FormControl
  category: FormControl
  price: FormControl
  brand: FormControl
  color: FormControl
  quantite: FormControl
  displayMessageError = false

  public event: EventEmitter<any> = new EventEmitter();

  constructor(
    private bsModalRef: BsModalRef
  ) {
  }

  ngOnInit(): void {
    console.log("to cropped", this.imageChangedEvent);
    this.initForm()
  }

  initForm() {
    this.name = new FormControl('', { validators: [Validators.required] })
    this.description = new FormControl('', { validators: [Validators.required] })
    this.category = new FormControl('', { validators: Validators.required })
    this.price = new FormControl('', { validators: Validators.required })
    this.brand = new FormControl('', { validators: Validators.required })
    this.color = new FormControl('', { validators: Validators.required })
    this.quantite = new FormControl('', { validators: Validators.required })


    this.addProductForm = new FormGroup({
      name: this.name,
      description: this.description,
      category: this.category,
      price: this.price,
      brand: this.brand,
      color: this.color,
      quantite: this.quantite,
    })

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

  addProduct() {
    console.warn('hello from addProduct function');
    if (this.addProductForm.valid) {
      console.warn('this.addProductForm.value', this.addProductForm.value);
      this.addProductForm.value
    }
  }
}