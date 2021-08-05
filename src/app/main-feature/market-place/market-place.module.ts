import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';
import { MarketPlaceRoutingModule } from './market-place-routing.module';
import { MarketPlaceDetailsComponent } from './pages/market-place-details/market-place-details.component';
import { MarketPlaceColumnComponent } from './pages/market-place-column/market-place-column.component';
import { MarketPlaceListComponent } from './pages/market-place-list/market-place-list.component';
import { MarketPlaceMainComponent } from './market-place-main/market-place-main.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MarketPlaceRoutingModule

  ],
  declarations: [
    MarketPlaceDetailsComponent,
    MarketPlaceColumnComponent,
    MarketPlaceListComponent,
    MarketPlaceMainComponent,
    
  ]
})
export class MarketPlaceModule { }
