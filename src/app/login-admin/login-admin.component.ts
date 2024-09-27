import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { HardcodedAuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [FormsModule , FooterComponent , HeaderComponent, RouterModule],
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  username = "poojitha";
  password = "123456";
  errorMessage="Invalid Credentials"
  invalidLogin= false
  constructor(private router: Router, public authenticationService : HardcodedAuthenticationService) {}

  ngOnInit(): void {}

  login() {
   
    if(this.authenticationService.authenticate(this.username,this.password)){

      this.router.navigate(['/dashboard-admin']);
    }else{
      this.invalidLogin = true
    }

  // login() {
  //   if (this.username === 'poojitha' && this.password === '123456') {
  //     this.router.navigate(['/dashboard-admin']);
  //   } else {
  //     alert('Invalid login credentials for Admin');
  //   }
  }
}
