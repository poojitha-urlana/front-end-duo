import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HardcodedAuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(public hardcodedAuthenticationService: HardcodedAuthenticationService){

  }

  ngOnInit(){
    //this.isUserLoggedin=this.hardcodedAuthenticationService.isUserLoggedin()
  }
}
