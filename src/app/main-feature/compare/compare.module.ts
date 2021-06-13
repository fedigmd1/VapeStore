import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareRoutingModule } from './compare-routing.module';
import { CompareMainComponent } from './compare-main/compare-main.component';
import { CompareDetailsComponent } from './pages/compare-details/compare-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CompareMainComponent,
    CompareDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CompareRoutingModule
  ]
})
export class CompareModule { }
