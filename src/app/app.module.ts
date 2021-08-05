import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxImgZoomModule } from 'ngx-img-zoom';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ShopModule } from './main-feature/shop/shop.module';
import { AuthGuard } from './core/config/route/guards/auth.guard';
import { TokenInterceptorService } from './core/config/route/token-interceptor.service';
import { ErrorPageComponent } from './main-feature/pages/error-page/error-page.component';
import { ColorOptionsComponent } from './main-feature/color-options/color-options.component';
import { CropPictureModalComponent } from './main-feature/profile/modals/crop-picture-modal/crop-picture-modal.component';
import { AddProductModalComponent } from './main-feature/shop/products/modals/add-product-modal/add-product-modal.component';
import { AddPostComponent } from './main-feature/market-place/modals/add-post/add-post.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    ErrorPageComponent,
    ColorOptionsComponent,
    AddProductModalComponent,
    CropPictureModalComponent,
  ],
  imports: [
    ShopModule,
    FormsModule,
    SharedModule,
    BrowserModule,
    NgxSpinnerModule,
    AppRoutingModule,
    HttpClientModule,
    NgxImgZoomModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  entryComponents: [
    AddPostComponent,
    AddProductModalComponent,
    CropPictureModalComponent,
  ]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
