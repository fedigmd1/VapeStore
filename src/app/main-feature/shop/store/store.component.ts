import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/core/modals/cart-item';

import { Product } from 'src/app/core/modals/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  products: Product[];
  shoppingCartItems: CartItem[] = [];
  contentLoaded = false;
  public slides = [
    { title: 'Huge sale', subtitle: 'Up to 70%', image: 'assets/images/carousel/banner1.jpg' },
    { title: 'Biggest discount', subtitle: 'Check the promotion', image: 'assets/images/carousel/banner2.jpg' },
    { title: 'Biggest sale', subtitle: 'Dont miss it', image: 'assets/images/carousel/banner3.jpg' },
    { title: 'Our best products', subtitle: 'Special selection', image: 'assets/images/carousel/banner4.jpg' },
    { title: 'Massive sale', subtitle: 'Only for today', image: 'assets/images/carousel/banner5.jpg' }
  ];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {

    this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
    this.productService.getProducts()
    .subscribe(
      (product: Product[]) => {
      this.products = product;
      }
    )

    setTimeout(() => {
      this.contentLoaded = true;
    }, 3000);
  }


       // Collection banner
       public discount = [{
        image: 'assets/images/product/tablet_bn.png',
        title: 'Tablets, Smartphones and more',
        subtitle: 'Sale up to 30%',
      }, {
        image: 'assets/images/product/camera_bn.png',
        title: 'New Cameras Collection',
        subtitle: 'Sale up to 30%',
      }]

  }


