import { Component, OnInit } from '@angular/core';

import { CartItem } from 'src/app/core/modals/cart-item';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/core/modals/product.model';
import { SessionService } from '../../services/session.service';
import { SidenavMenu } from '../../sidebar/sidebar-menu.model';
import { AppSettings, Settings } from '../../services/color-option.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public sidenavMenuItems: Array<any>;

  public currencies = ['USD', 'EUR', 'DT'];
  public currency: any;
  public flags = [
    { name: 'English', image: 'assets/images/flags/gb.svg' },
    { name: 'German', image: 'assets/images/flags/de.svg' },
    { name: 'French', image: 'assets/images/flags/fr.svg' },
    { name: 'Russian', image: 'assets/images/flags/ru.svg' },
    { name: 'Turkish', image: 'assets/images/flags/tr.svg' }
  ]

  navItems: SidenavMenu[] = [
    {
      displayName: 'Home',
      iconName: 'recent_actors',
      route: '/home'
    },
    {
      displayName: 'Products',
      iconName: 'feedback',
      route: '/home/products/all'
    }
  ];

  public flag: any;
  isloggedIn = false
  products: Product[];

  indexProduct: number;
  shoppingCartItems: CartItem[] = [];
  public settings: Settings;

  constructor(
    public router: Router,
    private cartService: CartService,
    public appSettings: AppSettings,
    private sessionService: SessionService,
  ) {
    this.settings = this.appSettings.settings;
    this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
  }

  ngOnInit() {
    this.loggedIn()
    this.currency = this.currencies[0];
    this.flag = this.flags[0];
  }

  loggedIn() {
    this.isloggedIn = this.sessionService.loggedIn()
  }
  logout() {
    this.sessionService.logoutUser()
  }
  goTo(value) {
    this.router.navigate(['/' + value])
  }
  public changeCurrency(currency) {
    this.currency = currency;
  }
  public changeLang(flag) {
    this.flag = flag;
  }

}
