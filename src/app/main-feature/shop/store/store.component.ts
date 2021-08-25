import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  id: number;
  public slides = [
    { title: 'Huge sale', subtitle: 'Up to 70%', image: 'assets/images/backgrd1.jpg' },
    { title: 'Biggest discount', subtitle: 'Check the promotion', image: 'assets/images/backgrd2.jpeg' },
    { title: 'Biggest sale', subtitle: 'Dont miss it', image: 'assets/images/backgrd3.jpg' },
    { title: 'Our best products', subtitle: 'Special selection', image: 'assets/images/backgrd4.jpg' },
    { title: 'Massive sale', subtitle: 'Only for today', image: 'assets/images/backgrd5.jpg' }
  ];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService,
  ) {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
      })
  }

  ngOnInit() {

    console.warn("id",this.id);
    
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
    image: 'assets/images/product1.jpg',
    title: 'Vape, Kit and cover',
    subtitle: 'Sale up to 30%',
  }, {
    image: 'assets/images/product2.jpg',
    title: 'New Ben Smoke Collection',
    subtitle: 'Sale up to 25%',
  }]

}


