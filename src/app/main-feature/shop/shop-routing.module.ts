import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductLeftSidebarComponent } from './products/product-left-sidebar/product-left-sidebar.component';
import { ProductRightSidebarComponent } from './products/product-right-sidebar/product-right-sidebar.component';
import { ProductNoSidebarComponent } from './products/product-no-sidebar/product-no-sidebar.component';
import { ProductDetailsFoodComponent } from './products/product-details-food/product-details-food.component';

import { ProductDetailsCenteredComponent } from './products/product-details-centered/product-details-centered.component';
import { Resolver } from 'src/app/shared/services/resolver.service';
import { FoodComponent } from './home/home-of-home/food/food.component';
import { FurnitureComponent } from './home/home-of-home/furniture/furniture.component';
import { HomeFiveComponent } from './home/home-of-home/home-five/home-five.component';
import { HomeFourComponent } from './home/home-of-home/home-four/home-four.component';
import { HomeTwoComponent } from './home/home-of-home/home-two/home-two.component';
import { HomeThreeComponent } from './home/home-of-home/home-three/home-three.component';
import { StoreListComponent } from './store-list/store-list.component';


// Routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'store-list', component: StoreListComponent },
  // { path: 'home2', component: HomeTwoComponent },
  // { path: 'home3', component: HomeThreeComponent },
  // { path: 'home4', component: HomeFourComponent },
  // { path: 'home5', component: HomeFiveComponent },
  // { path: 'homefood', component: FoodComponent },
  // { path: 'homefurniture', component: FurnitureComponent },
  { path: 'products/:category/left-sidebar', component: ProductLeftSidebarComponent },
  { path: 'products/:category/right-sidebar', component: ProductRightSidebarComponent },
  { path: 'products/:category/no-sidebar', component: ProductNoSidebarComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'product/food/:id', component: ProductDetailsFoodComponent },
  { path: 'product/product-center/:id', component: ProductDetailsCenteredComponent },
  {
    path: 'product/product-center-name/:slug', component: ProductDetailsCenteredComponent, resolve: {
      data: Resolver
    }
  },




];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
