import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { MainCarouselIndustrialComponent } from './industrial/main-carousel-industrial/main-carousel-industrial.component';
import { PriceComponent } from './products/price/price.component';
import { ProductsComponent } from '../shop/products/products.component';
import { ProductComponent } from '../shop/products/product/product.component';
import { ProductDetailsComponent } from '../shop/products/product-details/product-details.component';
import { ProductDialogComponent } from '../shop/products/product-dialog/product-dialog.component';
import { ProductLeftSidebarComponent } from '../shop/products/product-left-sidebar/product-left-sidebar.component';
import { ProductVerticalComponent } from '../shop/products/product-vertical/product-vertical.component';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxPaginationModule } from 'ngx-pagination';
// Import the library

import { from } from 'rxjs';
import { BrandsComponent } from './widgets/brands/brands.component';
import { CategoriesComponent } from './widgets/categories/categories.component';
import { PopularProductsComponent } from './widgets/popular-products/popular-products.component';
import { ProductZoomComponent } from '../shop/products/product-details/product-zoom/product-zoom.component';
import { ProductZoomFoodComponent } from '../shop/products/product-details-food/product-zoom-food/product-zoom-food.component';
import { ProductNoSidebarComponent } from '../shop/products/product-no-sidebar/product-no-sidebar.component';
import { ProductRightSidebarComponent } from '../shop/products/product-right-sidebar/product-right-sidebar.component';
import { IndustrialComponent } from './industrial/industrial.component';
import { ProductTwoComponent } from '../shop/products/product-two/product-two.component';
import { ProductDetailsFoodComponent } from '../shop/products/product-details-food/product-details-food.component';
import { CategoriesFurnitureComponent } from './widgets/categories-furniture/categories-furniture.component';
import { ProductCarouselFourComponent } from '../shop/products/product-carousel-four/product-carousel-four.component';
import { ProductCarouselThreeComponent } from '../shop/products/product-carousel-three/product-carousel-three.component';
import { ProductCarouselComponent } from '../shop/products/product-carousel/product-carousel.component';
import { ProductCarouselTwoComponent } from '../shop/products/product-carousel-two/product-carousel-two.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ProductVerticalFoodComponent } from '../shop/products/product-vertical-food/product-vertical-food.component';
import { ProductDetailsLeftComponent } from '../shop/products/product-details-left/product-details-left.component';
import { ProductDetailsCenteredComponent } from '../shop/products/product-details-centered/product-details-centered.component';
import { HomeTwoComponent } from './home/home-of-home/home-two/home-two.component';
import { HomeThreeComponent } from './home/home-of-home/home-three/home-three.component';
import { HomeFourComponent } from './home/home-of-home/home-four/home-four.component';
import { HomeFiveComponent } from './home/home-of-home/home-five/home-five.component';
import { FoodComponent } from './home/home-of-home/food/food.component';
import { FurnitureComponent } from './home/home-of-home/furniture/furniture.component';
import { MainCarouselComponentFood } from './home/home-of-home/food/main-carousel-food/main-carousel-food.component';

@NgModule({
  declarations: [
    HomeComponent,
    MainCarouselComponent,
    MainCarouselIndustrialComponent,
    ProductsComponent,
    PriceComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductDialogComponent,
    ProductLeftSidebarComponent,
    ProductVerticalComponent,
    BrandsComponent,
    CategoriesComponent,
    PopularProductsComponent,
    ProductZoomComponent,
    ProductZoomFoodComponent,
    ProductNoSidebarComponent,
    ProductRightSidebarComponent,
    IndustrialComponent,
    ProductTwoComponent,
    ProductDetailsFoodComponent,
    CategoriesFurnitureComponent,
    ProductCarouselFourComponent,
    ProductCarouselThreeComponent,
    ProductCarouselComponent,
    ProductCarouselTwoComponent,
    ProductVerticalFoodComponent,
    ProductDetailsLeftComponent,
    ProductDetailsCenteredComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    HomeFourComponent,
    HomeFiveComponent,
    FoodComponent,
    FurnitureComponent,
    MainCarouselComponentFood

  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxPaginationModule,
    NgxSkeletonLoaderModule
    // NgxImageZoomModule.forRoot() // <-- Add this line
  ],
  exports: [
    ProductDialogComponent,
    ProductZoomComponent,
    ProductZoomFoodComponent

  ],

  entryComponents: [
    ProductDialogComponent,
    ProductZoomComponent
  ],
})

export class ShopModule { }
