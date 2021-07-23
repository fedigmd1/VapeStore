import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { Router, NavigationEnd } from '@angular/router';

import { Settings, AppSettings } from './shared/services/color-option.service';
import { CartService } from './shared/services/cart.service';
import { SidebarMenuService } from './shared/sidebar/sidebar-menu.service';
import { Product } from './core/modals/product.model';
import { CartItem } from './core/modals/cart-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public flag: any;
  isloggedIn = false
  isAuthPages = false
  public banners = [];
  title = 'Vape Store';
  public currency: any;
  indexProduct: number;
  public settings: Settings;
  wishlistItems: Product[] = [];
  shoppingCartItems: CartItem[] = [];
  public currencies = ['USD', 'EUR','DT'];
  public sidenavMenuItems: Array<any>;

  public flags = [
    { name: 'English', image: 'assets/images/flags/gb.svg' },
    { name: 'German', image: 'assets/images/flags/de.svg' },
    { name: 'French', image: 'assets/images/flags/fr.svg' },
    { name: 'Russian', image: 'assets/images/flags/ru.svg' },
    { name: 'Turkish', image: 'assets/images/flags/tr.svg' }
  ]

  constructor(
    private spinner: NgxSpinnerService,
    public appSettings: AppSettings,
    public router: Router,
    private cartService: CartService,
    public sidenavMenuService: SidebarMenuService
  ) {
    this.settings = this.appSettings.settings;
    this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
  }


  ngOnInit() {
    /** spinner starts on in
     * it */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    document.documentElement.style.setProperty('--theme-deafult', '#901010');
    this.currency = this.currencies[0];
    this.flag = this.flags[0];

    this.checkIsAuthPages()

  }


  checkIsAuthPages() {
    this.router.events.subscribe((val) => {
      this.isAuthPages = this.router.url.includes('auth')
    })
  }

  public changeCurrency(currency) {
    this.currency = currency;
  }
  public changeLang(flag) {
    this.flag = flag;
  }
  ngAfterViewInit() {
  }
}
