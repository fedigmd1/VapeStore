import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompareMainComponent } from './compare-main/compare-main.component';
import { CompareDetailsComponent } from './pages/compare-details/compare-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'details' },
  {
    path: '', component: CompareMainComponent,
    children: [
      { path: 'details', component: CompareDetailsComponent },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompareRoutingModule { }
