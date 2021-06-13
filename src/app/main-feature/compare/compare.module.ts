import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareRoutingModule } from './compare-routing.module';
import { CompareMainComponent } from './compare-main/compare-main.component';
import { CompareDetailsComponent } from './pages/compare-details/compare-details.component';


@NgModule({
  declarations: [CompareMainComponent, CompareDetailsComponent],
  imports: [
    CommonModule,
    CompareRoutingModule
  ]
})
export class CompareModule { }
