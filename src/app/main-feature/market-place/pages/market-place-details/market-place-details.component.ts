import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/core/models/post';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { MarketPlaceService } from '../../services/market-place.service';

@Component({
  selector: 'app-market-place-details',
  templateUrl: './market-place-details.component.html',
  styleUrls: ['./market-place-details.component.scss']
})
export class MarketPlaceDetailsComponent implements OnInit {

  postId
  contentLoaded
  postDetails: Post
  commentForm: FormGroup
  comment: FormControl

  constructor(
    private router: Router,
    private loader: LoaderService,
    private snackBar: MatSnackBar,
    private activatedroute: ActivatedRoute,
    private marketPlaceService: MarketPlaceService) { }

  ngOnInit() {
    this.postId = this.activatedroute.snapshot.paramMap.get("id");
    this.getPostDetails(this.postId)
    this.initCommentForm()
  }

  initCommentForm() {
    this.comment = new FormControl('', Validators.required)
    this.commentForm = new FormGroup({
      comment: this.comment
    })

  }
  addComment(){
    
    console.log(this.commentForm);
    if (this.commentForm.valid){
      const requestData = {
        post_id: this.postDetails._id,
        content: this.commentForm.value.comment
      }
      this.marketPlaceService.addComment(requestData).subscribe((response: any) => {
        if (response){
          this.commentForm.reset()
         this.getPostDetails(this.postDetails._id)
        }
      })
    }
    
  }

  getPostDetails(postId) {
    const requestData = {
      post_id: postId
    }
    this.loader.showSpinner()
    this.contentLoaded = false
    const subscription = new Subscription();
    subscription.add(this.marketPlaceService.getPostById(requestData).subscribe((response: any) => {
      if (response) {
        this.postDetails = response.data[0]
        console.log(this.postDetails);
        this.contentLoaded = true
        this.loader.stopSpinner()
        subscription.unsubscribe()
      }
    }, (error) => {
      console.log(error)
      this.loader.stopSpinner()
      this.contentLoaded = true
    }))
  }

}
