import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { CropPictureModalComponent } from 'src/app/main-feature/profile/modals/crop-picture-modal/crop-picture-modal.component';
import { AddProductModalComponent } from 'src/app/main-feature/shop/products/modals/add-product-modal/add-product-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  bsModalRef: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) { }

  showCropImageModal(imageChangedEvent) {
    return new Observable(obsorver => {
      this.bsModalRef = this.modalService.show(CropPictureModalComponent, {
        class: 'modal-dialog-centered',
        initialState: { imageChangedEvent }
      });
      this.bsModalRef.content.closeBtnName = 'Close';
      this.bsModalRef.content.event.subscribe(res => {
        obsorver.next(res);
      });
    });
  }
  AddProductModal() {
    return new Observable(obsorver => {
      this.bsModalRef = this.modalService.show(AddProductModalComponent, {
        class: 'modal-dialog-centered',
        initialState: {}
      });
      this.bsModalRef.content.closeBtnName = 'Close';
      this.bsModalRef.content.event.subscribe(res => {
        obsorver.next(res);
      });
    });
  }



}
