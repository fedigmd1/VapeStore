import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.sass']
})
export class ErrorPageComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['/deduction-data/details'])
  }

  goBack() {
    this.location.back()
  }

  ngOnDestroy(){
    console.log("bye-notFoundPage");
    
  }

}
