import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { Product } from 'src/app/modals/product.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-zoom-food',
  templateUrl: './product-zoom-food.component.html',
  styleUrls: ['./product-zoom-food.component.sass']
})
export class ProductZoomFoodComponent  {

  public product;
  public selectedProductImageIndex;

  constructor(

    public dialogRef: MatDialogRef<ProductZoomFoodComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product, index }) {
    this.product = data.product;
    this.selectedProductImageIndex = data.index;
  }

  public close(): void {
    this.dialogRef.close();
  }
}
