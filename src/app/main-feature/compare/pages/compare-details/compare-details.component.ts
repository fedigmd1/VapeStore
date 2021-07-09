import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/core/modals/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';


@Component({
  selector: 'app-compare-details',
  templateUrl: './compare-details.component.html',
  styleUrls: ['./compare-details.component.sass']
})
export class CompareDetailsComponent implements OnInit {

  public product: Observable<Product[]> = of([]);
  public products: Product[] = [];

  constructor(
    private cartService: CartService,
    private productService: ProductService,
  ) {

  }

  ngOnInit() {
    this.product = this.productService.getComapreProducts();
    this.product.subscribe(products => this.products = products);
    console.log(this.product);
  }

  // Add to cart
  public addToCart(product: Product, quantity: number = 1) {
    this.cartService.addToCart(product, quantity);
  }

  // Remove from compare list
  public removeItem(product: Product) {
    this.productService.removeFromCompare(product);
  }

}
