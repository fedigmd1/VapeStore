import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalService } from 'src/app/shared/services/modal.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { MarketPlaceService } from '../../services/market-place.service';

@Component({
  selector: 'app-market-place-list',
  templateUrl: './market-place-list.component.html',
  styleUrls: ['./market-place-list.component.scss']
})
export class MarketPlaceListComponent implements OnInit, OnDestroy {

  id = 6
  subscription = new Subscription();

  constructor(
    private router: Router,
    public snackBar: MatSnackBar,
    private loader: LoaderService,
    private modalService: ModalService,
    private marketPlaceService: MarketPlaceService) { }

  ngOnInit() {
  }

  getDetails(id: any) {
    this.id = id
    let url = 'market-place/post/' + this.id + '/details'
    this.router.navigate([url])
  }

  showAddPostModal() {
    this.modalService.AddPostModal().subscribe(requestData => {
      this.loader.showSpinner()
      this.subscription.add(this.marketPlaceService.addPost(requestData).subscribe(res => {
        if (res) {
          this.loader.stopSpinner()
          const message = 'Post added successfully';
          this.snackBar.open(message, '×', { panelClass: 'green-snackbar', verticalPosition: 'top', duration: 3000 });
        }
      }, (error) => {
        console.log(error);

        this.loader.stopSpinner()
        this.snackBar.open(error.message, '×', { panelClass: 'red-snackbar', verticalPosition: 'top', duration: 3000 });
      }))
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
