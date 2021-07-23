import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { AppSettings } from './services/color-option.service'

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BannersComponent } from './banners/banners.component';
import { ShoppingWidgetsComponent } from './shopping-widgets/shopping-widgets.component';
import { BannersFourComponent } from './banners-four/banners-four.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { BannerPromotionComponent } from './banner-promotion/banner-promotion.component';
import { CategoriesMenuComponent } from './categories-menu/categories-menu.component';
import { CategoriesSectionComponent } from './categories-section/categories-section.component';
import { MatBadgeModule } from '@angular/material/badge';
import { ShoppingWidgetsTwoComponent } from './shopping-widgets-two/shopping-widgets-two.component';
import { BlogSectionTwoComponent } from './blog-section-two/blog-section-two.component';
import { ShoppingWidgetsThreeComponent } from './shopping-widgets-three/shopping-widgets-three.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './common/loader/loader.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import {ModalModule} from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent,
    OrderByPipe,
    BannersComponent,
    ShoppingWidgetsComponent,
    BannersFourComponent,
    BlogSectionComponent,
    BannerPromotionComponent,
    CategoriesMenuComponent,
    CategoriesSectionComponent,
    ShoppingWidgetsTwoComponent,
    BlogSectionTwoComponent,
    ShoppingWidgetsThreeComponent,
    BreadcrumbComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule,
    MatSliderModule,
    MatExpansionModule,
    MatBadgeModule,
    MatMenuModule,
    MatTableModule,
    MatRadioModule,
    MatDialogModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    NgxSkeletonLoaderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ImageCropperModule,
    ModalModule.forRoot()
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    MatTableModule,
    MatSliderModule,
    MatRadioModule,
    MatDialogModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    OrderByPipe,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent,
    BannersComponent,
    FlexLayoutModule,
    ShoppingWidgetsComponent,
    BannersFourComponent,
    BlogSectionComponent,
    BannerPromotionComponent,
    CategoriesMenuComponent,
    CategoriesSectionComponent,
    ShoppingWidgetsThreeComponent,
    BreadcrumbComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ImageCropperModule,
    ModalModule
  ],
  providers: [
    ProductService,
    CartService,
    AppSettings
  ],
  entryComponents: [
    LoaderComponent

  ]
})
export class SharedModule { }
