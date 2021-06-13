import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishListRoutingModule } from './wish-list-routing.module';
import { WishListMainComponent } from './wish-list-main/wish-list-main.component';
import { WishlistDetailsComponent } from './pages/wish-list-details/wish-list-details.component';


@NgModule({
  declarations: [WishListMainComponent, WishlistDetailsComponent],
  imports: [
    CommonModule,
    WishListRoutingModule
  ]
})
export class WishListModule { }
