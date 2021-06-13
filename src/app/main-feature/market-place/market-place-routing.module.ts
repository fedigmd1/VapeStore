import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketPlaceDetailsComponent } from './market-place-details/market-place-details.component';
import { MarketPlaceColumnComponent } from './market-place-column/market-place-column.component';
import { MarketPlaceListComponent } from './market-place-list/market-place-list.component';



const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'list', component: MarketPlaceListComponent},
      { path: 'column', component: MarketPlaceColumnComponent},
      { path: 'details', component: MarketPlaceDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MarketPlaceRoutingModule { }
