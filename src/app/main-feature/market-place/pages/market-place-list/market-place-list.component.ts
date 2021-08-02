import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-market-place-list',
  templateUrl: './market-place-list.component.html',
  styleUrls: ['./market-place-list.component.scss']
})
export class MarketPlaceListComponent implements OnInit {
  id = 6
  constructor(private router: Router) { }

  ngOnInit() {
  }

  getDetails(id :any) {
    this.id = id
    let url = 'market-place/post/'+this.id +'/details'
    this.router.navigate([url])
  }



}
