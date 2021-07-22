import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/config/route/guards/auth.guard';
import { ErrorPageComponent } from './main-feature/pages/error-page/error-page.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./main-feature/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: '',
    loadChildren: () => import('./main-feature/shop/shop.module').then(m => m.ShopModule)
  },
  {
    path: 'page', canActivate :[AuthGuard],
    loadChildren: () => import('./main-feature/pages/pages.module').then(m => m.PagesModule)

  },
  {
    path: 'market-place', canActivate :[AuthGuard],
    loadChildren: () => import('../app/main-feature/market-place/market-place.module').then(m => m.MarketPlaceModule)
  },
  {
    path: 'wish-list', canActivate :[AuthGuard],
    loadChildren: () => import('../app/main-feature/wish-list/wish-list.module').then(m => m.WishListModule)
  },
  {
    path: 'compare', canActivate :[AuthGuard],
    loadChildren: () => import('../app/main-feature/compare/compare.module').then(m => m.CompareModule)
  },
  {
    path: '', canActivate :[AuthGuard],
    loadChildren: () => import('../app/main-feature/profile/profile.module').then(m => m.ProfileModule)
  },

  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: false,
      onSameUrlNavigation: 'ignore',
      relativeLinkResolution: 'legacy',
      scrollPositionRestoration: 'top',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
