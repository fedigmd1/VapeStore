



import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Product, ColorFilter } from 'src/app/core/modals/product.model';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit {
  public sidenavOpen: boolean = true;
  public animation: any;   // Animation
  public sortByOrder: string = '';   // sorting
  public page: any;
  public tagsFilters: any[] = [];
  public viewType: string = 'grid';
  public viewCol: number = 25;
  public filterForm: FormGroup;
  public colorFilters: ColorFilter[] = [];

  public items: Product[] = [];
  public allStores: any;
  public allStoresSearch: any;
  public products: any
  public tags: any[] = [];
  public colors: any[] = [];

  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getAllStore()
  }


  getAllStore() {
    this.productService.getstoreByCategory().subscribe(data => {
      console.warn("data", data);
      this.allStores = data.slice(0.8);;
      this.allStoresSearch = this.allStores;
    })
  }

  changeViewType(viewType, viewCol) {
    this.viewType = viewType;
    this.viewCol = viewCol;
  }
  // Animation Effect fadeIn
  fadeIn() {
    this.animation = 'fadeIn';
  }

  // Animation Effect fadeOut
  fadeOut() {
    this.animation = 'fadeOut';
  }

  // sorting type ASC / DESC / A-Z / Z-A etc.
  onChangeSorting(val) {
    this.sortByOrder = val;
    this.animation == 'fadeOut' ? this.fadeIn() : this.fadeOut(); // animation
  }

  public onPageChanged(event) {
    this.page = event;
    this.allStores;
    window.scrollTo(0, 0);
  }

  onStoreSearch(value: string): void {
    if (value === '') {
      this.allStores = this.allStoresSearch;
    } else {
      this.allStores = this.allStoresSearch.filter(({ name }) => name.toLowerCase().indexOf(value) > -1);
    }
  }
}



