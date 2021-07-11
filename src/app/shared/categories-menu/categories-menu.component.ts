import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.sass']
})
export class CategoriesMenuComponent implements OnInit {
  @Input() id: number

  constructor() { }

  ngOnInit() {
  }

}
