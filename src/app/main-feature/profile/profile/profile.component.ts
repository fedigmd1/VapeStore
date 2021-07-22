import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  showUpdateForm = false

  constructor() { }

  ngOnInit() {
  }
  showForm(){
    this.showUpdateForm = !this.showUpdateForm
  }
}
