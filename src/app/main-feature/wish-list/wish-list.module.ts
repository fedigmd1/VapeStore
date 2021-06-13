import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishListRoutingModule } from './wish-list-routing.module';
import { WishListMainComponent } from './wish-list-main/wish-list-main.component';
import { WishlistDetailsComponent } from './pages/wish-list-details/wish-list-details.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    WishListRoutingModule

  ],
  declarations: [
    WishListMainComponent,
    WishlistDetailsComponent
  ],
})
export class WishListModule { }
