import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketPlaceDetailsComponent } from './pages/market-place-details/market-place-details.component';
import { MarketPlaceColumnComponent } from './pages/market-place-column/market-place-column.component';
import { MarketPlaceListComponent } from './pages/market-place-list/market-place-list.component';
import { MarketPlaceMainComponent } from './market-place-main/market-place-main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  {
    path: '', component: MarketPlaceMainComponent,
    children: [
      { path: 'list', component: MarketPlaceListComponent },
      { path: 'post/:id/details', component: MarketPlaceDetailsComponent }
      // { path: 'column', component: MarketPlaceColumnComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MarketPlaceRoutingModule { }
