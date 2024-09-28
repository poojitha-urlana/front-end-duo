import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HardcodedAuthenticationService } from '../authentication.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterModule, CommonModule,FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  name ="Poojitha"
  faUser = faUser;
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  
  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService){

  }

  ngOnInit(){
    //this.isUserLoggedin=this.hardcodedAuthenticationService.isUserLoggedin()
  }
}
