import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/main-feature/authentication/service/auth.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  isloggedIn = false
  
  constructor(private sessionService: SessionService, private router : Router) { }

  ngOnInit() {
    this.loggedIn()
   }

  loggedIn() {
    this.isloggedIn = this.sessionService.loggedIn()
  }
  
  goTo(page){
    this.router.navigate(['/'+page])
  }

  openMegaMenu(){
    let pane = document.getElementsByClassName('cdk-overlay-pane');
    [].forEach.call(pane, function (el) {
        if(el.children.length > 0){
          if(el.children[0].classList.contains('mega-menu')){
            el.classList.add('mega-menu-pane');
          }
        }
    });
  }
}
