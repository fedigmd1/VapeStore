import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxImgZoomModule } from 'ngx-img-zoom';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShopModule } from './main-feature/shop/shop.module';
import { SharedModule } from './shared/shared.module';
import { ErrorPageComponent } from './main-feature/pages/error-page/error-page.component';
import { ColorOptionsComponent } from './main-feature/color-options/color-options.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    ColorOptionsComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
