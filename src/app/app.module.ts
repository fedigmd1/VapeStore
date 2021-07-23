import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxImgZoomModule } from 'ngx-img-zoom';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { AuthGuard } from './core/config/route/guards/auth.guard';
import { TokenInterceptorService } from './core/config/route/token-interceptor.service';
import { CropPictureModalComponent } from './main-feature/profile/modals/crop-picture-modal/crop-picture-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    ColorOptionsComponent,
    CropPictureModalComponent
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
  providers: [AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  entryComponents:[CropPictureModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
