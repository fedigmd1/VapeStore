import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './main-feature/pages/error-page/error-page.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./main-feature/shop/shop.module').then(m => m.ShopModule)
  },
  {
    path: 'page',
    loadChildren: () => import('./main-feature/pages/pages.module').then(m => m.PagesModule)

  },
  {
    path: 'market-place',
    loadChildren: () => import('../app/main-feature/market-place/market-place.module').then(m => m.MarketPlaceModule)
  },
  {
    path: 'wish-list',
    loadChildren: () => import('../app/main-feature/wish-list/wish-list.module').then(m => m.WishListModule)
  },
  {
    path: 'compare',
    loadChildren: () => import('../app/main-feature/compare/compare.module').then(m => m.CompareModule)
  },
  


  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      onSameUrlNavigation: 'ignore',
      relativeLinkResolution: 'legacy',
      scrollPositionRestoration: 'top',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
