import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/core/modals/cart-item';
import { Product } from 'src/app/core/modals/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';




@Component({
  selector: 'app-home-four',
  templateUrl: './home-four.component.html',
  styleUrls: ['./home-four.component.sass']
})
export class HomeFourComponent implements OnInit {
  public banners = [];
  public currencies = ['USD', 'EUR'];
  public currency:any;
  public flags = [
    { name:'English', image: 'assets/images/flags/gb.svg' },
    { name:'German', image: 'assets/images/flags/de.svg' },
    { name:'French', image: 'assets/images/flags/fr.svg' },
    { name:'Russian', image: 'assets/images/flags/ru.svg' },
    { name:'Turkish', image: 'assets/images/flags/tr.svg' }
  ]
  public flag:any;

  products: Product[];

  indexProduct: number;
  shoppingCartItems: CartItem[] = [];
  wishlistItems  :   Product[] = [];
  contentLoaded = false;


  public slides = [
    { title: 'Huge sale', subtitle: 'Up to 70%', image: 'assets/images/carousel/banner1.jpg' },
    { title: 'Biggest discount', subtitle: 'Check the promotion', image: 'assets/images/carousel/banner2.jpg' },
    { title: 'Biggest sale', subtitle: 'Dont miss it', image: 'assets/images/carousel/banner3.jpg' },
    { title: 'Our best products', subtitle: 'Special selection', image: 'assets/images/carousel/banner4.jpg' },
    { title: 'Massive sale', subtitle: 'Only for today', image: 'assets/images/carousel/banner5.jpg' }
  ];

  constructor(private productService: ProductService,  private cartService: CartService) {
    this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);

  }

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
 this.currency = this.currencies[0];
  this.flag = this.flags[0];
  setTimeout(() => {
    this.contentLoaded = true;
  }, 3000);

}





public changeCurrency(currency){
  this.currency = currency;
}
public changeLang(flag){
  this.flag = flag;
}

}
