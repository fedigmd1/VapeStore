import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Post } from 'src/app/core/models/post';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/services/modal.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { MarketPlaceService } from '../../services/market-place.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-market-place-list',
  templateUrl: './market-place-list.component.html',
  styleUrls: ['./market-place-list.component.scss']
})
export class MarketPlaceListComponent implements OnInit, OnDestroy {

  id = 6
  postList : Post[]
  subscription = new Subscription();
  public page: any;
  contentLoaded
  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private loader: LoaderService,
    private modalService: ModalService,
    private sessionService: SessionService,
    private marketPlaceService: MarketPlaceService) { }

  ngOnInit() {
   this. getAllPosts()
  }
  getAllPosts(){
    this.postList = []
    this.contentLoaded = false
      this.subscription.add(this.marketPlaceService.getAllPosts().subscribe(res => {
        if (res) {
          this.contentLoaded = true
          this.postList = res
        }
      }, (error) => {
        console.log(error)
        this.contentLoaded = true
      }))
  }

  getDetails(id: any) {
    this.id = id
    let url = 'market-place/post/' + this.id + '/details'
    this.router.navigate([url])
  }

  showAddPostModal() {
    this.modalService.AddPostModal().subscribe(requestData => {
      this.loader.showSpinner()
      this.subscription.add(this.marketPlaceService.addPost(requestData).subscribe((res : any) => {
        if (res) {
          this.snackBar.open(res.message, '×', { panelClass: 'green-snackbar', verticalPosition: 'top', duration: 3000 });
          this.getAllPosts()
         this.loader.stopSpinner()
        }
      }, (error) => {
        console.log(error);
        this.loader.stopSpinner()
        this.snackBar.open(error.message, '×', { panelClass: 'red-snackbar', verticalPosition: 'top', duration: 3000 });
      }))
    });
  }

  deletePost(postId){
    this.subscription.add(this.marketPlaceService.deletePost({post_id: postId}).subscribe(res => {
      if (res) {
        const message = 'Post added successfully';
        this.snackBar.open(message, '×', { panelClass: 'green-snackbar', verticalPosition: 'top', duration: 3000 });
        this.postList = this.postList.filter(post => post._id != postId)
      }
    }, (error) => {
      console.log(error);
      this.snackBar.open(error.message, '×', { panelClass: 'red-snackbar', verticalPosition: 'top', duration: 3000 });
    }))
  }

  checkUser(postUserId){
   return postUserId == this.sessionService.getUserDetails()._id
  }
  
  showUpdatePostModal(post){
    this.modalService.updatePostModal(post).subscribe(requestData => {
      console.log(requestData);
      this.loader.showSpinner()
      this.subscription.add(this.marketPlaceService.updatePost(requestData).subscribe((res : any) => {
        if (res) {
          this.snackBar.open(res.message, '×', { panelClass: 'green-snackbar', verticalPosition: 'top', duration: 3000 });
          this.getAllPosts()
         this.loader.stopSpinner()
        }
      }, (error) => {
        console.log(error);
        this.loader.stopSpinner()
        this.snackBar.open(error.message, '×', { panelClass: 'red-snackbar', verticalPosition: 'top', duration: 3000 });
      }))
    });
  }

  public onPageChanged(event) {
    this.page = event;
    this.postList;
    window.scrollTo(0, 0);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
