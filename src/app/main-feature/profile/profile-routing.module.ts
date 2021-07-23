import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'profile' },
  {
    path: '', component: MainProfileComponent, children: [
      { path: 'profile', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfileRoutingModule { }
