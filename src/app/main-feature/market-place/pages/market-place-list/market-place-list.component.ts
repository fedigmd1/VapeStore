import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-market-place-list',
  templateUrl: './market-place-list.component.html',
  styleUrls: ['./market-place-list.component.sass']
})
export class MarketPlaceListComponent implements OnInit {
  id = 6
  constructor(private router: Router) { }

  ngOnInit() {
  }

  getDetails(id :any) {
    this.id = id
    this.router.navigate(["['post/']" + this.id + "['/details']"])
  }

}
