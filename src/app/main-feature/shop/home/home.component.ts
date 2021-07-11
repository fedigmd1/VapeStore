import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from 'src/app/core/modals/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[];
  contentLoaded = false;
  public banners = [];
  public slides = [
    { title: 'Huge sale', subtitle: 'Up to 70%', image: 'assets/images/background/background-01.jpg' },
    { title: 'Biggest discount', subtitle: 'Check the promotion', image: 'assets/images/background/background-02.jpg' },
    { title: 'Biggest sale', subtitle: 'Dont miss it', image: 'assets/images/background/background-03.jpg' },
    { title: 'Our best products', subtitle: 'Special selection', image: 'assets/images/background/background-04.jpg' },
    { title: 'Massive sale', subtitle: 'Only for today', image: 'assets/images/background/background-05.jpg' }
  ];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getBanners()
    .subscribe(
      data => this.banners = data
    );

 this.productService.getProducts()
 .subscribe(
   (product: Product[]) => {
     this.products = product
   }
 )
 setTimeout(() => {
      this.contentLoaded = true;
    }, 3000);
  }






}
