import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../../shared/shared.module';
import { MarketPlaceRoutingModule } from './market-place-routing.module';
import { MarketPlaceDetailsComponent } from './market-place-details/market-place-details.component';
import { MarketPlaceColumnComponent } from './market-place-column/market-place-column.component';
import { MarketPlaceListComponent } from './market-place-list/market-place-list.component';


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
    MarketPlaceListComponent
  ]
})
export class MarketPlaceModule { }
