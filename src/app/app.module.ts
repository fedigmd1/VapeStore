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
import { ShopModule } from './shop/shop.module';
import { MainComponent } from './main/main.component';
import { DemoComponent } from './demo/demo.component';
import { SharedModule } from './shared/shared.module';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ColorOptionsComponent } from './color-options/color-options.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    MainComponent,
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
