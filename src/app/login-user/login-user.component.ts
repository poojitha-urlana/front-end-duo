import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [FormsModule , HeaderComponent, FooterComponent ,CommonModule, RouterModule],
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  name: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
   
    if (this.name === 'poojitha' && this.password === '123456') {
      this.router.navigate(['/dashboard-user']);
    } else {
      alert('Invalid login credentials for User');
    }
  }
}
