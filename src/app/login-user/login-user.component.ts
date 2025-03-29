import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HardcodedAuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [FormsModule , HeaderComponent, FooterComponent ,CommonModule, RouterModule],
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  username = "User";
  password = "123";
  errorMessage="Invalid Credentials"
  invalidLogin= false

  constructor(private router: Router, public authenticationService : HardcodedAuthenticationService) {}

  ngOnInit(): void {}

  handleLogin() {
   
    if(this.authenticationService.authenticate(this.username,this.password)){

      this.router.navigate(['/dashboard-user']);
    }else{
      this.invalidLogin = true
    }

    
  }
}
