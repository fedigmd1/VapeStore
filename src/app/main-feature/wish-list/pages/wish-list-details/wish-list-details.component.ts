import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/core/modals/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-wish-list-details',
  templateUrl: './wish-list-deatils.component.html',
  styleUrls: ['./wish-list-deatils.component.sass']
})
export class WishlistDetailsComponent implements OnInit {

  public product        :   Observable<Product[]> = of([]);
  wishlistItems  :   Product[] = [];

  constructor(private cartService: CartService, private wishlistService: WishlistService) {
    this.product = this.wishlistService.getProducts();
    this.product.subscribe(products => this.wishlistItems = products);
  }

  ngOnInit() {
  }

   // Add to cart
 public addToCart(product: Product,  quantity: number = 1) {
  if (quantity > 0)
   this.cartService.addToCart(product,quantity);
   this.wishlistService.removeFromWishlist(product);
}

// Remove from wishlist
public removeItem(product: Product) {
 this.wishlistService.removeFromWishlist(product);
}

}
