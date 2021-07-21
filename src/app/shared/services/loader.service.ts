import { Injectable } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { LoaderComponent } from '../common/loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private spinnerTopRef = this.cdkSpinnerCreate();
  constructor(private overlay: Overlay,) { }

  private cdkSpinnerCreate() {
    return this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'dark-backdrop',
      positionStrategy: this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically()
    })
  }

  showSpinner() {
    console.log("attach");
    this.spinnerTopRef.attach(new ComponentPortal(LoaderComponent))
  }

  stopSpinner() {
    console.log("dispose")
    this.spinnerTopRef.detach();
  }

}

