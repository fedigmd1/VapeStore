import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishlistDetailsComponent } from './pages/wish-list-details/wish-list-details.component';
import { WishListMainComponent } from './wish-list-main/wish-list-main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'details' },
  {
    path: '', component: WishListMainComponent,
    children: [
      { path: 'details', component: WishlistDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishListRoutingModule { }
